var allEnemies = [];
var player;
var speed_Random = 1,speed_Random_1 = 1,speed_Random_2 = 1,speed_Random_3 = 1;
var random_location;
var pos_enemy = [], pos_person = [];
var addingX = 1, addingX_1 = 1, addingX_2 = 1, addingX_3 = 1, addingX_4 = 1, addingX_5 = 1, addingX_6 = 1;
var counter_1 = 1, counter_2 = 1, counter_3 = 1;
var width = 1, height = 1;
var enemyCurrentPos = [];
var enemyLastPos = 1;
var tileArray;
var tileCount_x = 0, tileCount_y = 0;
var delta_v_x = 202,delta_v_y = 400;
var playerScore = 0,playersLives = 3; 
class Enemy {
    constructor() {
        this.width = 80;
        this.height = 70;
        addingX = Math.floor(Math.random()*500);
        pos_enemy = [[addingX] ,[61,141,221]];
		// Variables applied to each of our instances go here,
		
		if(counter_2 == 1) {
            this.y = 61;
        }
		if(counter_2 == 2) {
            this.y = 141;
		}
		if(counter_2 == 3) {
            this.y = 221;
		}
		if(counter_2 == 4) {
			counter_2 = 1;
			random_location = Math.floor(Math.random() * 3);
            this.y = pos_enemy[1][random_location];
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
	
        speed_Random * dt;
        speed_Random_2 * dt;  
        addingX_1 * dt;
        addingX_2 * dt;	
        addingX_3 * dt;
        addingX_4 * dt;
        addingX_5 * dt;
        addingX_6 * dt;

        this.displayMethod();

        this.enemyCollMethod();        
    }

    displayMethod() {
        if(counter_3 == 1) {
        if (addingX_1 <= 500 || addingX_1 >= -100) {
            this.x = addingX_1;
            if (addingX_1 >= 500) {
                addingX_1 = -100;
            }
            addingX_1 += 4;
        }
    }else if(counter_3 == 2) {
        if (addingX_2 <= 600 || addingX_2 >= -300) {
            this.x = addingX_2;
            if (addingX_2 >= 600) {
                addingX_2 = -300;
            }
            addingX_2 += 4.5;
        }
    }else if(counter_3 == 3) {
        if (addingX_3 <= 700 || addingX_3 >= -400) {
            this.x = addingX_3;
            if (addingX_3 >= 700) {
                addingX_3 = -400;
            }
            addingX_3 += 3;
        }
    }else if(counter_3 == 4) {
        if (addingX_4 <= 650 || addingX_4 >= -150) {
            this.x = addingX_4;
            if (addingX_4 >= 650) {
                addingX_4 = -150;
            }
            addingX_4 += 2;
        }
    }else if(counter_3 == 5) {
        if (addingX_5 <= 550 || addingX_5 >= -300) {
            this.x = addingX_5;
            if (addingX_5 >= 550) {
                addingX_5 = -300;
            }
            addingX_5 += 3.5;
        }
    }else if(counter_3 == 6) {
        if (addingX_6 <= 600 || addingX_6 >= -200) {
            this.x = addingX_6;
            if (addingX_6 >= 600) {
                addingX_6 = -200;
            }
            addingX_6 += 2.5;
        }
    }
    counter_3++;
    if(counter_3 > 6) {
        counter_3 = 1;
    }
    }

    enemyCollMethod() {
        
        if (false) {
            //console.log("booom");
        }
        else {

            //console.log("bang");
            //alert(player.x);
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Person {
    constructor() {
		pos_person = [[404],[404]];
        this.x = pos_person[0];
        this.y = pos_person[1];
        this.width = 60;
        this.height = 70;
        // Variables applied to each of our instances go here,
        this.personPosArray = [
			[1,101,202,303,404],[1,101,202,303,404]
		];
		
        this.sprite = 'images/char-boy.png';
    }
    // Update, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        
        this.x = delta_v_x;
        this.y = delta_v_y;
        
    }

    handleInput(evt) {    
/* up down left and right controls and border detection  */
       
        this.playerMoveMethod(evt); 
/*    detct enemy   */
        this.personCollMethod();
    }
    playerMoveMethod(evt) {
        if (delta_v_x < 0) {
            delta_v_x = 0;
            this.x = delta_v_x;
        }
        else if (delta_v_x >= 0 && delta_v_x <= 404) {
            if (evt == "left") {
                if (delta_v_x == 0) {
                    // dont do anything
                }
                else {
                    this.x = delta_v_x += -101;
                }
            }
            if (evt == "right") {
                if (delta_v_x == 404) {
                    // dont do anything
                }
                else {
                    this.x = delta_v_x += 101;
                }
            }
            // set delta v x back to max             
        }
        else if (delta_v_x > 404) {
            delta_v_x = 404;
            this.x = delta_v_x;
        }
        /*    up and down controls and border detection  */        
        if (delta_v_y < 0) {
            // score or win            
            delta_v_y = 0;
            //this.y = delta_v_y + 400;
        }
        else if (delta_v_y >= 0 && delta_v_y <= 400) {
            if (evt == "up") {
                if (delta_v_y == 0) {
                    // score or win 
                    this.y = delta_v_y + 400;
                    playerScore++;
                    if (playerScore == 9) {
                        // reset game make a modal 
                    }
                }
                else {
                    this.y = delta_v_y += -80;
                }
            }
            if (evt == "down") {
                if (delta_v_y == 400) {
                    // dont do anything 
                }
                else {
                    this.y = delta_v_y += 80;
                }
            }
            // set delta v y back to max             
        }
        else if (delta_v_y > 400) {
            delta_v_y = 400;
            this.y = delta_v_y;
        }
    }

    personCollMethod() {
        for (let i = 0; i < allEnemies.length; i++) {       
            if (allEnemies[i].x >= (this.x + this.width) || (allEnemies[i].x + allEnemies[i].width) <= this.x || allEnemies[i].y >= (this.y + this.height) || (allEnemies[i].y + allEnemies[i].height) <= this.y) {
            }
            else {
                console.log("bang");
                //alert(`this.x ${this.x} this.y ${this.y}`);
            }
        }
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

MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
//allEnemies.push(enemy);

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



