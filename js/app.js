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
var tileArray;
var tileCount_x = 0;
var tileCount_y = 0;
var delta_v_x = 1,delta_v_y = 1;
class Enemy {
    constructor() {
        this.width = 80;
        this.height = 70;
        addingX = Math.floor(Math.random()*500);
        pos_enemy = [[addingX] ,[61,141,221]];
		// Variables applied to each of our instances go here,
		
		if(counter_2 == 1) {
            this.y = 61;
            console.log(`counter_2 ${counter_2} and y ${this.y}`);
        }
		if(counter_2 == 2) {
            this.y = 141;
            console.log(`counter_2 ${counter_2} and y ${this.y}`);
		}
		if(counter_2 == 3) {
            this.y = 221;
            console.log(`counter_2 ${counter_2} and y ${this.y}`);
		}
		if(counter_2 == 4) {
			counter_2 = 1;
			random_location = Math.floor(Math.random() * 3);
            this.y = pos_enemy[1][random_location];
            console.log(`counter_2 ${counter_2} and y ${this.y}`);
		}
        counter_2++;
    
        this.x = pos_enemy[0][addingX];
        //console.log(`counter_2 ${counter_2} and y ${this.y} and x ${this.x}`);    
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt, tileArray) {
		//console.log(this.tileArray);
		//console.log(dt);
		
        speed_Random * dt;
        addingX_1 * dt;
        addingX_2 * dt;	

		if(speed_Random <= 600) {
			
			//this.x = speed_Random;		
        }
        if(speed_Random >= 600) {
            speed_Random = -100;
        }
        speed_Random += 1;
		
// speed
		if(speed_Random_2 <= 600) {
			
			//this.x = speed_Random;		
        }
        if(speed_Random_2 >= 600) {
            speed_Random_2 = -100;
        }
        speed_Random_2 += 0.75;

        if(counter_1 == 1){
            counter_1++;
            if(speed_Random_2 <= 600 || speed_Random_2 >= -100) {
                if(this.y == 61) {
                    
                    this.x = addingX_1;
                    
                }
                if(this.y == 141) {
                    this.x = speed_Random;
                }
                if(this.y == 221) {
                
                    this.x = speed_Random_2;
                
                }
            //    this.x = addingX_1;
            }
            if(addingX_1 >= 600 || addingX_1 <= -100) {
                //addingX_1 = -100;
                if(this.y  == 61) {
                    
                }
                if(this.y == 141) {
            
				}
				if(this.y == 221) {
					
				}
            }
			addingX_1 += 0.5;
			
        }else if(counter_1 == 2){
            counter_1--;
            if(addingX_1 <= 600 || addingX_1 >= -100) {
                if(this.y == 61) {
                    this.x = addingX_1;
                }
                if(this.y == 141) {
                    this.x = speed_Random;
                }
                if(this.y == 221) {
                    this.x = speed_Random_2;
                }
                //this.x = speed_Random;
            }
            if(addingX_1 >= 600) {
				addingX_1 = -100;
				if(this.y  == 61) {
              
                }
                if(this.y == 141) {
                    
				}
				if(this.y == 221) {
					
				}
            }
            addingX_1 += 0.5;
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
		pos_person = [[404],[404]];
        //this.x = pos_person[0];
        //this.y = pos_person[1];
        // Variables applied to each of our instances go here,
        this.personPosArray = [
			[1,101,202,303,404],[1,101,202,303,404]
		];
		
        this.sprite = 'images/char-boy.png';
    }
    // Update, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt, tileArray) {
	
        speed_Random_3 * dt;
        

        if(speed_Random_3 >= 500) {
            this.x = delta_v_x;
            this.y = delta_v_y;
// on screen display
        }else if(speed_Random_3 <= 500) {
            speed_Random_3 = -100;
// border cases
        }
        speed_Random_3 += 1;
		

        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    handleInput(evt) {
        if(evt == "left") {
            this.x = delta_v_x += 100;
            console.log(this.delta_v_x);
        }
        if(evt == "right") {
            this.x = delta_v_x += -100;
        }
        if(evt == "up") {
            this.y = delta_v_y += 100;
        }
        if(evt == "down") {
            this.y = delta_v_y =+ -100;
        }
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
 
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
 
//allEnemies.push(enemy);
console.log(...allEnemies);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(evt) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[evt.keyCode]);
});

function MakeEnemiesFunction() {
	enemy = new Enemy();
	allEnemies.push(enemy);
}



