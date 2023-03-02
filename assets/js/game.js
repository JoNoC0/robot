// prompt to enter robot's name
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"
var fight = function(enemyName) {
// repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // Prompt to fight or skip battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter `Fight` or `SKIP` to choose.");
    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        
        // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
    var confirmSKip = window.confirm("Are you sure you'd like to quit?");
            
            // if yes(true), leave fight
    if (confirmSKip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                // subtract money from player money for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth -playerAttack;
              // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
                
        break;
        }
    
        // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        break;

    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
        console.log (enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

        break;

    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
 
        
    } else {
        fight();
    }
}
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);

if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    fight(pickedEnemyName);
} 

else {
    window.alert("You have lost your robot in battle! Game Over!");
    
    break;
}
}
