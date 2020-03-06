//create player
const name = 'Constantine',
    civilization = 'Bizantine',
    players = [{
        name: 'Edward',
        civilization: 'English',
        pikeman: 10,
        archer: 10,
        knight: 10,
        treasure: 1000
    }];
const createPlayer = (name, civilization) => {
    console.log(`Today will born new leader ${name} from the ${civilization}`);
    switch (civilization) {
        case 'English':
            players.push({
                name,
                civilization,
                pikeman: 10,
                archer: 10,
                knight: 10,
                treasure: 1000
            })
            break;
        case 'Chinese':
            players.push({
                name,
                civilization,
                pikeman: 2,
                archer: 25,
                knight: 2,
                treasure: 1000
            })
            break;
        case 'Bizantine':
            players.push({
                name,
                civilization,
                pikeman: 5,
                archer: 8,
                knight: 15,
                treasure: 1000
            })
            break;

    }
    console.log('Initial players', players);
};
const trainningArmy = (name, trainningSelect, trainingForCapital) => {
    let buyer = players.filter(player => player.name === name),
        pikemanCost = 10,
        archerCost = 20,
        knightCost = 30;

    //Si el mi tesoro permite entrenar alguna unidad
    if (buyer[0].treasure >= pikemanCost || buyer[0].treasure >= archerCost || buyer[0].treasure >= knightCost) {
        //si selecciono piquero
        if (trainningSelect === "Pikeman") {

            if (trainingForCapital % pikemanCost == 0) {

                buyer[0].pikeman += trainingForCapital / pikemanCost;
                buyer[0].treasure -= trainingForCapital;
                console.log('new pikemens', trainingForCapital / pikemanCost, ' was recruit by',name);
            }
        }

        if (trainningSelect == "Archer") {
            if (trainingForCapital % archerCost == 0) {
                buyer[0].archer += trainingForCapital / archerCost;
                buyer[0].treasure -= trainingForCapital;
                console.log('new archers ', trainingForCapital / archerCost, ' was recruit by',name);
            }
        }
        if (trainningSelect == "Knight") {
            if (trainingForCapital % knightCost == 0) {
                buyer[0].knight += trainingForCapital / knightCost;
                buyer[0].treasure -= trainingForCapital;
                console.log('new knight', trainingForCapital / knightCost, ' was recruit by',name )  ;
            }
        }
    }



};
const upgradeUnit = (playerSelect, unitToUpgrade, costToUpgrade) => {
    let buyer = players.filter(player => player.name === playerSelect),
        pikemanCost = 30,
        archerCost = 40;
    if (unitToUpgrade === 'Knight') {
        console.log('Sorry, the  knights can not  trained up more');
    } else {
        if (buyer[0].treasure >= pikemanCost || buyer[0].treasure >= archerCost || buyer[0].treasure >= knightCost) {
            //si selecciono piquero
            if (unitToUpgrade === "Pikeman") {

                if (costToUpgrade % pikemanCost == 0) {
                    let toArcher = buyer[0].pikeman,
                        archers = buyer[0].archer;
                    newArcher = costToUpgrade / pikemanCost;
                    buyer[0].archer += newArcher;
                    buyer[0].pikeman -= newArcher;
                    buyer[0].treasure -= costToUpgrade;
                    console.log('New archer ', newArcher, ` Was upgrade by ${playerSelect}` );
                }
            }

            if (unitToUpgrade === "Archer") {
                if (costToUpgrade % archerCost == 0) {

                    newKnight = costToUpgrade / archerCost;
                    buyer[0].archer += newKnight;
                    buyer[0].pikeman -= newKnight;
                    buyer[0].treasure -= costToUpgrade;
                    console.log('New knight', newKnight, ` Was upgrade by ${playerSelect}`);
                }
            }
        }

    }

};
const battlePlayers = (player1, player2) => {
    let attacker = players.filter(player => player.name === player1),
        defender = players.filter(player => player.name === player2),
        pikemanAttack = 5,
        archerAttack = 10,
        knightAttack = 20,
        attackerLife=attacker[0].archer*archerAttack+attacker[0].pikeman*pikemanAttack+attacker[0].knight*knightAttack,
    defenderLife = defender[0].archer * archerAttack + defender[0].pikeman * pikemanAttack + defender[0].knight * knightAttack;
    
    if (attackerLife>defenderLife) {
        console.log(`${player1} you army win this battle, claim your reward, 100 gold coin`)
        attacker[0].treasure+=100
        defender[0].treasure-=100
        if (defender[0].pikeman>defender[0].archer) {
            defender[0].pikeman-=2
        } else if(defender[0].pikeman<defender[0].archer){
            defender[0].archer-=2
        }else if(defender[0].archer>defender[0].knight){
            defender[0].archer-=2
        }else if(defender[0].archer<defender[0].knight){
            defender[0].knight-=2
        }

} else {
    console.log(`${player1} you army lost this battle, lost`)
    attacker[0].treasure-=100
    defender[0].treasure+=100
    if (attacker[0].pikeman>attacker[0].archer) {
        attacker[0].pikeman-=2
    } else if(attacker[0].pikeman<attacker[0].archer){
        attacker[0].archer-=2
    }else if(attacker[0].archer>attacker[0].knight){
        attacker[0].archer-=2
    }else if(attacker[0].archer<attacker[0].knight){
        attacker[0].knight-=2
    }
}
    


    console.log(players)


};


//create player
createPlayer(name, civilization);


//trainning  players
trainningArmy(name, 'Pikeman', 20);
trainningArmy(players[0].name, 'Knight', 30);


//upgrade Unit
upgradeUnit(name, 'Pikeman', 30);


//war unit
battlePlayers(name, players[0].name);