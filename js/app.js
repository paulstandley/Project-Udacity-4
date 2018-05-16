const allEnemies = [];
let player;
let random_location;
let pos_enemy = [], pos_person = [];
let addingX = 1, addingX_1 = 1, addingX_2 = 1, addingX_3 = 1, addingX_4 = 1, addingX_5 = 1, addingX_6 = 1;
let counter_1 = 1, counter_2 = 1;
let width = 1, height = 1;
let delta_v_x = 202,delta_v_y = 400;
let playerScore = 20,playersLives = 100; 
const h3score = document.getElementById("displayScore");
const h3lives = document.getElementById("displayLives");
const fullbodydiv = document.getElementById("fullBody");
const modal = document.getElementById("modalId");
class Enemy {
    constructor() {
        this.width = 80;
        this.height = 70;
        addingX = Math.floor(Math.random()*500);
        pos_enemy = [[addingX] ,[61,141,221]];
        // Variables applied to each of our instances go here,	

		if(counter_1 == 1) {
            this.y = 61;
        }
		if(counter_1 == 2) {
            this.y = 141;
		}
		if(counter_1 == 3) {
            this.y = 221;
		}
		if(counter_1 >= 4 && counter_1 <= 6) {
            
            if(counter_1 == 6) { 
                counter_1 = 1;
            }
			random_location = Math.floor(Math.random() * 3);
            this.y = pos_enemy[1][random_location];
		}
        counter_1++;
    
        this.x = pos_enemy[0][addingX];
        
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks

    update(dt) {

        this.displayMethod(dt);

        this.enemyCollMethod();
        
        this.displayOnPage();
    }

    displayOnPage() {
        h3lives.innerText = playersLives;
        h3score.innerText = playerScore;
        if(playersLives <= 0) {
            fullbodydiv.innerHTML = `<h2 id="h2lost">You got dead</h2>`; 
            player.sprite = "images/Heart.png";
            allEnemies.forEach(function(val){
            val.sprite = "images/Heart.png";
            });
            setTimeout(reLoadGame, 6000);
        }
        if(playerScore <= 0) {
            fullbodydiv.innerHTML = `<h2 id="h2win">Well Done</h2>`;
            player.sprite = "images/Star.png";
            allEnemies.forEach(function(val){
            val.sprite = "images/Star.png";
            });
            displayEndGameWin();
            setTimeout(reLoadGame, 6000);
        }
    }

    displayMethod(dt) {
        /* make enemys seam  randon  */
        if(counter_2 == 1) {
            addingX_1 * dt;
            if (addingX_1 <= 500 || addingX_1 >= -100) {
                this.x = addingX_1;
                if (addingX_1 >= 500) {
                    addingX_1 = -100;
            }
            addingX_1 += 5;
        }
        }else if(counter_2 == 2) {
            addingX_2 * dt;
            if (addingX_2 <= 600 || addingX_2 >= -300) {
                this.x = addingX_2;
                if (addingX_2 >= 600) {
                    addingX_2 = -300;
                }
                addingX_2 += 4.5;
            }
        }else if(counter_2 == 3) {
            addingX_3 * dt;
            if (addingX_3 <= 700 || addingX_3 >= -400) {
                this.x = addingX_3;
                if (addingX_3 >= 700) {
                    addingX_3 = -400;
                }
                addingX_3 += 4;
            }
        }else if(counter_2 == 4) {
            addingX_4 * dt;
            if (addingX_4 <= 950 || addingX_4 >= -150) {
                this.x = addingX_4;
                if (addingX_4 >= 950) {
                    addingX_4 = -150;
                }
                addingX_4 += 5.5;
            }
        }else if(counter_2 == 5) {
            addingX_5 * dt;
            if (addingX_5 <= 850 || addingX_5 >= -300) {
                this.x = addingX_5;
                if (addingX_5 >= 850) {
                    addingX_5 = -300;
                }
                addingX_5 += 3.5;
            }
        }else if(counter_2 == 6) {
            addingX_6 * dt;
            if (addingX_6 <= 800 || addingX_6 >= -200) {
                this.x = addingX_6;
                if (addingX_6 >= 800) {
                    addingX_6 = -200;
                }
                addingX_6 += 3;
            }
        }
        counter_2++;
        if(counter_2 > 6) {
            counter_2 = 1;
        }
    }

    enemyCollMethod() {
        for(let crash in allEnemies) {
            if(player.y == 80  && allEnemies[crash].y == 61) {
                if(allEnemies[crash].x <= player.x + 40 && allEnemies[crash].x >= player.x - 40) {
                    delta_v_x = 202;
                    delta_v_y = 400;
                    playersLives--;
                }
            }else if(player.y == 160 && allEnemies[crash].y == 141) {
                if(allEnemies[crash].x <= player.x + 40 && allEnemies[crash].x >= player.x - 40) {
                    delta_v_x = 202;
                    delta_v_y = 400;
                    playersLives--;
                }
            }else if(player.y == 240 && allEnemies[crash].y == 221) {
                if(allEnemies[crash].x <= player.x + 40 && allEnemies[crash].x >= player.x - 40) {
                    delta_v_x = 202;
                    delta_v_y = 400;
                    playersLives--;
                }
            }
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
/*    detect enemy   */
        this.personCollMethod();
    }

    playerMoveMethod(evt) {
        if(delta_v_x < 0) {
            delta_v_x = 0;
            this.x = delta_v_x;
        }
        else if(delta_v_x >= 0 && delta_v_x <= 404) {
            if(evt == "left") {
                if(delta_v_x === 0) {
                    // dont do anything
                }else{
                    this.x = delta_v_x += -101;
                }
            }
            if(evt == "right") {
                if(delta_v_x == 404) {
                    // dont do anything
                }else{
                    this.x = delta_v_x += 101;
                }
            }
            // set delta v x back to max             
        }
        else if(delta_v_x > 404) {
            delta_v_x = 404;
            this.x = delta_v_x;
        }
        /*    up and down controls and border detection  */               
        if(delta_v_y >= 0 && delta_v_y <= 400) {
            if (evt == "up") {
                if(delta_v_y == 80) {
                    delta_v_y = 400;
                    playerScore--;
                }else{
                    this.y = delta_v_y += -80;
                }
            }
            if(evt == "down") {
                if(delta_v_y == 400) {
                    // dont do anything 
                }else{
                    this.y = delta_v_y += 80;
                }
            }
            // set delta v y back to max             
        }else if(delta_v_y > 400) {
            delta_v_y = 400;
            this.y = delta_v_y;
        }
    }

    personCollMethod() {
        for(let i = 0; i < allEnemies.length; i++) {       
            if(allEnemies[i].x >= (this.x + this.width) || (allEnemies[i].x + allEnemies[i].width) <= this.x || allEnemies[i].y >= (this.y + this.height) || (allEnemies[i].y + allEnemies[i].height) <= this.y) {
            }else{
                delta_v_x = 202;
                delta_v_y = 400;
                playersLives--;
            }
        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

player = new Person();

MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
MakeEnemiesFunction();
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
displayEndGameWin();
function displayEndGameWin() {
    modal.innerHTML = `<h1 class="modal">You Win</h1>`; 
}

function reLoadGame() {
    window.location.reload(false);
}