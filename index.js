const civilizations = ['Chinese', 'English', 'Bizantine'],
    player1 = document.querySelector('form#player1'),
    player2 = document.querySelector('form#player2'),
    formTraining = document.querySelector('form#formTraining'),
    playerInputValue = document.querySelector('select#playerForTrainnig'),
    players = [];



const createPlayer = (name, civilization) => {
    console.log(name, civilization)
    switch (civilization) {
        case 'English':
            players.push({
                name,
                civilization,
                pikeman: 10,
                archer: 10,
                knight: 10,
                teasure: 1000
            })
            break;
        case 'Chinese':
            players.push({
                name,
                civilization,
                pikeman: 2,
                archer: 25,
                knight: 2,
                teasure: 1000
            })
            break;
        case 'Bizantine':
            players.push({
                name,
                civilization,
                pikeman: 5,
                archer: 8,
                knight: 15,
                teasure: 1000
            })
            break;

    }

};
const chargeTrainnig = () => {
    let trainingName = document.querySelector('select#playerForTrainnig'),
        html = '';
    players.map(player => {
        //console.log(player)
        html += `<option value="${player.name}">${player.name}</option>`;
    });
    trainingName.innerHTML = html;
};
const ShowSkill=(player)=>{
  console.log(player)
  let pikeman = document.querySelector('input#pikeman'),
      archertraining = document.querySelector('input#archertraining'),
      archer = document.querySelector('input#archer'),
      knightTraining = document.querySelector('input#knightTraining'),
      treaseure = document.querySelector('input#treaseurecost');

      pikeman.value=player.pikeman;
      archer.value=player.archer;
      treaseure.value = player.teasure;
      

};


//event
player1.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('input#player1').value,
        civilization = document.querySelector('select#civilization-player1').value,
        player2Select = document.querySelector('select#civilization-player2'),
        otherOptions = civilizations.filter(otherOption => otherOption != civilization),
        html = '';
    html += '<option value="">Select your civilization</option>';
    otherOptions.map((option, i) => {
        console.log(option);
        html += `<option value="${option}">${option}</option>`;

    });
    player2Select.innerHTML = html;


    createPlayer(name, civilization);

})
player2.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('input#player2').value,
        civilization = document.querySelector('select#civilization-player2').value;
    createPlayer(name, civilization);
    chargeTrainnig()

});
formTraining.addEventListener('submit', (e) => {
    e.preventDefault();
    let trainingName = document.querySelector('select#playerForTrainnig').value,
    pikeman= document.querySelector('input#pikeman'),
    archertraining= document.querySelector('input#archertraining'),
    archer = document.querySelector('input#archer'),
    knightTraining = document.querySelector('input#knightTraining'),
     treaseure = document.querySelector('input#treaseurecost'),
     playerSelect = players.filter(player => player.name === trainingName),
     buy = { };

     buy={
         name:playerSelect[0].name,
         civilization: playerSelect[0].civilization,
         pikeman: 5,
             archer: 8,
             knight: 15,
             teasure: 1000
     }
   // playerSelect = players.filter(player => player.name === playerInputValue);
   // console.log(playerSelect);


    


});
formTraining.addEventListener('change', () => {
  
    let trainingName = document.querySelector('select#playerForTrainnig').value,
        pikeman = document.querySelector('input#pikeman'),
        archertraining = document.querySelector('input#archertraining'),
        archer = document.querySelector('input#archer'),
        knightTraining = document.querySelector('input#knightTraining'),
        playerSelect = players.filter(player => player.name === trainingName);
   // console.log(playerSelect);
    ShowSkill(playerSelect[0]);



});