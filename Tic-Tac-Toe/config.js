function openPlayerConfig(event){
    editedPlayerid = +event.target.dataset.playerid;      // + makes it a number as before it is a string 
    confiOverlay.style.display='block';
    backdropElement.style.display='block';

}

function closePlayerConfig(){
    confiOverlay.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    configError.textContent ="";
    formElement.firstElementChild.lastElementChild.value ='';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
console.log(enteredPlayername);
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        configError.textContent='please enter a valid input';
        return;
    }

    const updatedPlayerName = document.getElementById('player-'+editedPlayerid + '-data');
    updatedPlayerName.children[1].textContent = enteredPlayername;

    players[editedPlayerid -1].name = enteredPlayername;

    closePlayerConfig();

}

