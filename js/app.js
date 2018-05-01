var allEnemies = [];
var player;
var speed_Random = 1,speed_Random_1 = 1,speed_Random_2 = 1,speed_Random_3 = 1;
var random_location;
var pos_enemy = [];
var pos_person = [];
var addingX = 1;
var addingX_1 = 1;
var addingX_2 = 1;
var counter_1 = 1;
var counter_2 = 1;
var width = 1;
var height = 1;
var enemyCurrentPos = [];
var enemyLastPos = 1;

class Enemy {
    constructor() {
        this.width = 80;
        this.height = 80;
        addingX = Math.floor(Math.random()*500);
        pos_enemy = [[addingX] ,[61,141,221]];
		// Variables applied to each of our instances go here,
		console.log(pos_enemy);
        console.log(addingX);
        random_location = Math.floor(Math.random() * 3);
        this.x = pos_enemy[0][addingX];
        this.y = pos_enemy[1][random_location];
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        //console.log(dt);
        speed_Random * dt;
        addingX_1 * dt;
        addingX_2 * dt;	

		if(speed_Random <= 500) {
			
			//this.x = speed_Random;		
        }
        if(speed_Random >= 500) {
            speed_Random = -100;
        }
        speed_Random += 1;
        

        if(counter_1 == 1){
            counter_1++;
            if(addingX_1 <= 500) {
                if(this.y == 61) {
                    this.x = addingX_1;
                }
                if(this.y == 141) {
                    this.x = addingX_1;
                }
                if(this.y == 221) {
                    this.x = addingX_1;
                }
            //    this.x = addingX_1;
            }
            if(addingX_1 >= 500) {
                addingX_1 = -100;

            }
            addingX_1 += 1;
        }else if(counter_1 == 2){
            counter_1--;
            if(addingX_1 <= 500) {
                if(this.y == 61) {
                    this.x = speed_Random;
                }
                if(this.y == 141) {
                    this.x = speed_Random;
                }
                if(this.y == 221) {
                    this.x = speed_Random;
                }
                //this.x = speed_Random;
            }
            if(addingX_1 >= 500) {
                addingX_1 = -100;
            }
            addingX_1 += 2;
        }

        

		//console.log(speed_Random); 
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



class Person {
    constructor() {
		pos_person = [[101],[404]];
        this.x = pos_person[0];
        this.y = pos_person[1];
        // Variables applied to each of our instances go here,
        
        this.sprite = 'images/char-boy.png';
    }
    // Update, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
    
    
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    handleInput(evt) {
        console.log(evt);
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var enemy = new Enemy();
player = new Person(); 
console.log(player);
 

newFunction();
newFunction();
newFunction();
newFunction();




 
//allEnemies.push(enemy);
console.log(allEnemies);

console.log(pos_enemy[1][0]);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
function newFunction() {
	enemy = new Enemy();
	allEnemies.push(enemy);
}

