const button = document.querySelector("button");

function questionsToEnter() {

    let askName = prompt("What's your name?");
    alert(`Hello! Nice to meet you ${askName}`)
    let askAge = +prompt("What's your age?");
    let askRegion = prompt("You're from LATAM? y/n");


    if (askAge >= 18 && askRegion === "y") {
        alert(`Great ${askName}! You can enter to the community! Welcome and enjoy!`);
    } else {
        if ( askAge >= 18 && askRegion === "n") {
        alert(`Sorry ${askName}, you can't enter to the community.`);
        }  else {
            if (askAge < 18) {
                alert(`Sorry ${askName}, you can't enter to the community.`);
            } else {
                alert("Please, put a valid value.");
            }
        }
    }

}

button.addEventListener("click", questionsToEnter);
