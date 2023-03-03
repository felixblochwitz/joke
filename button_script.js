const button = document.querySelector("button");

function insult(params) {
    const name = prompt("What's your name?");
    if (name === "" | name === null) {
        alert(`That's not a name you little bitch!`);
    }
    else {
        alert(`${name}, you little cunt. Fuck off!`);
    }
    
}

button.addEventListener("click", insult)
