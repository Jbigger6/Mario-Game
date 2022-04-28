const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;

class Player {
    constructor() {
        // sets players initial x & y positions within the canvas
        this.position = {
            x: 100,
            y: 100
        };

        // sets players initial x & y velocity
        this.velocity = {
            x: 0,
            y: 0
        };

        this.width = 50;
        this.height = 50;
    }
    /**
     * Draws player model onto HTML canvas element
     */
    draw() {
        context.fillStyle = 'red';
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    /**
     * Updates player's position on the canvas given player's velocity
     */
    update() {
        this.draw()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (player.position.y +this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0;
        }
    }
}

class Platform {
    constructor() {
        /** 
        * left off at 36:00 mark of video
        * https://www.youtube.com/watch?v=4q2vvZn5aoo&t=3438s&ab_channel=ChrisCourses
        */
    }
}

const player = new Player(); // creates new player object
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};

/**
 * animate function is constantly calling itself which calls "player.update"
 * this function allows for player movement to be updated continuously
 * 
 * clearRect() is used to clear the current rectangle before an update is done
 * if this rectangle is not cleared, the rectangle will be drawn on the canvas everytime the 
 * position it updated and not "erased"
 */
function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.right.pressed) {
        player.velocity.x = 5;
    }
    else if (keys.left.pressed) {
        player.velocity.x = -5;
    }
    else {
        player.velocity.x = 0;
    }
}

animate()

/**
 * event listener for movement
 * tracks whether or not a given key is pressed
 * and changes player's velocity based on the key
 * 
 * For x axis movement (left & right) the velocity is changed
 * directly in the animate function using a constant object 'keys'
 * 
 * first event is for 'keydown' which when a user presses a key
 * this event would result in a change of direction
 * 
 * second event for for 'keyup' which when a user releases a key
 * this event would result in the player stopping all movement 
 * except y axis movement due to gravity
 */

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyA':
            keys.left.pressed = true;
            break;
        
        case 'KeyS':
            player.velocity.y += 10;
            break;
        
        case 'KeyD':
            keys.right.pressed = true;
            break;

        case 'Space':
            player.velocity.y -= 10;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyA':
            keys.left.pressed = false;
            break;
        
        case 'KeyS':
            player.velocity.y += 10;
            break;
        
        case 'KeyD':
            keys.right.pressed = false;
            break;

        case 'Space':
            player.velocity.y -= 10;
            break;
    }
});