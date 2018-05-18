const allEnemies = [];
let player;
let random_location;
let pos_enemy = [],pos_person = [];
let addingX = 1,addingX_1 = 1,addingX_2 = 1,addingX_3 = 1,addingX_4 = 1,addingX_5 = 1, addingX_6 = 1;
let counter_1 = 1, counter_2 = 1;
let width = 1,height = 1;
let delta_v_x = 202,delta_v_y = 400;
let playerScore = 20,playersLives = 100; 
const h3score = document.getElementById("displayScore");
const h3lives = document.getElementById("displayLives");
const fullbodydiv = document.getElementById("fullBody");
const modal = document.getElementById("modalId");
/*  Enemy constuctor set width height and x posions switch to randomize  y values  */
class Enemy {
    constructor() {
        this.width = 80;
        this.height = 70;
        addingX = Math.floor(Math.random()*500);
        pos_enemy = [[addingX] ,[61,141,221]];
        switch(counter_1 <= 6) {
            case counter_1 == 1: this.y = 61;
            counter_1++;
            break;
            case counter_1 == 2: this.y = 141;
            counter_1++;
            break;
            case counter_1 == 3: this.y = 221;
            counter_1++;
            break;
            default: random_location = Math.floor(Math.random() * 3);
            this.y = pos_enemy[1][random_location];
            counter_1++;
        }
        this.x = pos_enemy[0][addingX];
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position by calling methods
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // sets movement
        this.displayMethod(dt);
        // checks for collisions
        this.enemyCollMethod();
        // display HTML
        this.displayOnPage();
    }
/* give player feed back on screen change sprites win and loss if lives are zero or scroe display html and reload in a timed out */
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
            player.sprite = "images/Star.png";
            allEnemies.forEach(function(val){
            val.sprite = "images/Star.png";
            });
    // displays modal when you win the game        
            setTimeout(displayEndGameWin, 4000);
            setTimeout(reLoadGame, 10000);
        }
    }
/* displayMethod uses dt and 6 variables to itarate at different speed, different clycles and one variable counter_2 too itrate throw the enemys displaying this.y on each one, to simulate movement */
    displayMethod(dt) {
        if(counter_2 == 1) {
            //re eslint this is your instuction 
            addingX_1 * dt;
            if (addingX_1 <= 500 || addingX_1 >= -100) {
                this.x = addingX_1;
                if (addingX_1 >= 500) {
                    addingX_1 = -100;
            }
            addingX_1 += 5;
        }
        }else if(counter_2 == 2) {
            //re eslint this is your instuction
            addingX_2 * dt;
            if (addingX_2 <= 600 || addingX_2 >= -300) {
                this.x = addingX_2;
                if (addingX_2 >= 600) {
                    addingX_2 = -300;
                }
                addingX_2 += 4.5;
            }
        }else if(counter_2 == 3) {
            //re eslint this is your instuction
            addingX_3 * dt;
            if (addingX_3 <= 700 || addingX_3 >= -400) {
                this.x = addingX_3;
                if (addingX_3 >= 700) {
                    addingX_3 = -400;
                }
                addingX_3 += 4;
            }
        }else if(counter_2 == 4) {
            //re eslint this is your instuction
            addingX_4 * dt;
            if (addingX_4 <= 950 || addingX_4 >= -150) {
                this.x = addingX_4;
                if (addingX_4 >= 950) {
                    addingX_4 = -150;
                }
                addingX_4 += 5.5;
            }
        }else if(counter_2 == 5) {
            //re eslint this is your instuction
            addingX_5 * dt;
            if (addingX_5 <= 850 || addingX_5 >= -300) {
                this.x = addingX_5;
                if (addingX_5 >= 850) {
                    addingX_5 = -300;
                }
                addingX_5 += 3.5;
            }
        }else if(counter_2 == 6) {
            //re eslint this is your instuction
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
/*   A for in loop to check if there are any enemys in the same place as the person object only 3 y posisions can be true then check the x values +- 40 px */
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
/*  A Person constructor to set start possion and sprit  */
class Person {
    constructor() {
		pos_person = [[404],[404]];
        this.x = pos_person[0];
        this.y = pos_person[1];
        this.width = 60;
        this.height = 70;
        this.sprite = 'images/char-boy.png';
    }
    // Update, delta_v_y delta_v_x
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x = delta_v_x;
        this.y = delta_v_y;
    }
/* moves player by keybord events */ 
    handleInput(evt) {          
        this.playerMoveMethod(evt); 
/*    detect enemy   */
        this.personCollMethod();
    }
/* up down left and right controls and border detection by using delta_v_x in steeps off +- 101 px and delta_v_y  +- 80 px, if past the border set player back to screen. up sets playScore-- */
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
/* for loop to itarate over all enemys array and check it agansd player possion if not true then playerLives-- */
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
// for loop to make 6 enemy objects
player = new Person();
for(let i = 0; i < 6; i++){
    MakeEnemiesFunction();
}
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
// make new enemys and push 
function MakeEnemiesFunction() {
	enemy = new Enemy();
	allEnemies.push(enemy);
}
// Display winner modal HTML
function displayEndGameWin() {
    modal.style.display = "block";
    modal.innerHTML = `<div class="modal">
    <div class="modalContent">
    <h1>You have won the Game "Winner!"</h1>
    <h2>Your Remaining LifeForce is ${playersLives}%</h2>
    </div>
    </div>`; 
}
// reload game 
function reLoadGame() {
    window.location.reload(false);
}