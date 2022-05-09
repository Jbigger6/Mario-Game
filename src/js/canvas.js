import platform from '../images/platform.png'
import hills from '../images/hills.png'
import background from '../images/background.png'

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
const gravity = .5;
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

// PLAYER OBJECT
class Player {
  constructor() {
    this.position = {
      x: canvas.width * .1,
      y: 50
    };

    this.velocity = {
      x: 0,
      y: 0
    };

    this.width = 50;
    this.height = 50;
  }

  draw() {
    context.fillStyle = 'red';
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (player.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

// PLATFORM OBJECT
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}

// GENERIC OBJECT (background, etc.)
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}

function init() {
  platformImage = createImage(platform);

  player = new Player();

  platforms = [
    new Platform({ x: -1, y: 455, image: platformImage }),
    new Platform({ x: platformImage.width - 3, y: 455, image: platformImage }),
    new Platform({ x: (platformImage.width * 2) + 100, y: 455, image: platformImage }),
  ];

  genericObject = [
    new GenericObject({
      x: -1, y: -1, image: createImage(background)
    }),

    new GenericObject({
      x: -1, y: -1, image: createImage(hills)
    })
  ]

  scrollOffset = 0;
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc;
  return image
}

let platformImage = createImage(platform);
let player = new Player();
let platforms = [
  new Platform({ x: -1, y: 455, image: platformImage }),
  new Platform({ x: platformImage.width - 3, y: 455, image: platformImage }),
  new Platform({ x: (platformImage.width * 2) + 100, y: 455, image: platformImage }),
];
let genericObject = [
  new GenericObject({
    x: -1, y: -1, image: createImage(background)
  }),

  new GenericObject({
    x: -1, y: -1, image: createImage(hills)
  })
]

let scrollOffset = 0;


// ANIMATE GAME
function animate() {
  requestAnimationFrame(animate)
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height)

  genericObject.forEach(genericObject => {
    genericObject.draw()
  })
  platforms.forEach(platform => {
    platform.draw();
  });

  player.update()

  // player horizontal movement
  if (
    keys.right.pressed &&
    player.position.x < canvas.width * .4
  ) {
    player.velocity.x = 5;
  }
  else if (
    keys.left.pressed &&
    player.position.x > canvas.width * .1
  ) {
    player.velocity.x = -5;
  }
  else {
    player.velocity.x = 0;

    // moves platforms horizontally when player reaches boundaries
    if (keys.right.pressed) {
      platforms.forEach(platform => {
        scrollOffset += 5;
        platform.position.x -= 5;
      });
      genericObject.forEach(genericObject => {
        genericObject.position.x -= 3;
      })
    }
    if (keys.left.pressed) {
      platforms.forEach(platform => {
        scrollOffset -= 5;
        platform.position.x += 5;
      });
      genericObject.forEach(genericObject => {
        genericObject.position.x += 3;
      })
    }
  }

  // player + platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  // win condition
  if (scrollOffset >= 2000) {
    console.log('You win!!')
  }

  //lose condition
  if (player.position.y > canvas.height) {
    init()
  }
}


// KEY PRESS
window.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA':
      keys.left.pressed = true;
      break;
    case 'KeyD':
      keys.right.pressed = true;
      break;
    case 'Space':
      player.velocity.y -= 20;
      break;
  }
});

// KEY RELEASE
window.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyA':
      keys.left.pressed = false;
      break;
    case 'KeyD':
      keys.right.pressed = false;
      break;
  }
});

animate()