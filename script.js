var exitBtn = document.querySelector("#exit");
var result = document.querySelector("#result");
var playBtn = document.querySelector("#play");
var feedBtn = document.querySelector("#feed");
var ageBtn = document.querySelector("#age");
console.log(playBtn)
exitBtn.addEventListener("click",function (event){
    event.preventDefault()
    window.close("index.html");
}
)

var pet = {
    name:"",
    type:"",
    age:0,
    happiness:0,
    hunger:0,
    feed: function(){
        if(pet.hunger > 0 && pet.hunger < 101){
        pet.hunger = pet.hunger - 20;
        alert(`You fed ${this.name}. Hunger is now ${this.hunger}`)
        }else{
            alert(`${this.hunger} must be between 1 - 100.`)
        }
    },
    play: function(){
        if(pet.happiness > 0 && pet.happiness < 101){
        pet.happiness = parseInt(pet.happiness)+ 20;
        result.innerHTML = `You played with ${this.name}. Happiness is now ${this.happiness}`;
        }
        else{
            alert(`${this.happiness} must be between 1 - 100.`)
        }
    },
    agePet: function(){
        this.age++;
        this.happiness - 5;
        this.hunger + 10;
        alert(`${pet.name} has aged. Age:${this.age}, Happiness: ${this.happiness}, Hunger:${this.hunger}`)
 
    }

};


    pet.name = document.querySelector("#petname").value;
    pet.type = document.querySelector("#pettype").value;
    pet.age = document.querySelector("#petage").value;
    pet.happiness = document.querySelector("#pethappiness").value;
    pet.hunger = document.querySelector("#pethunger").value;
    

if (playBtn) {
    console.log("play btn working")
    playBtn.addEventListener("click",   function (){
        pet.play();
    })
}else{
    console.log('done')
}

 
// pet.name = prompt("Enter your pet name?")
// pet.type = prompt("Enter your pet type such as cat, dog, goat etc.")
// pet.age = +prompt("How old your pet is?")
// pet.happiness = prompt("How happpy is your pet?")
// pet.hunger = prompt("How hunger is your pet?")
/*while(true){
    var request = +prompt(`What would you like to do with ${pet.name} \n 1. Feed \n 2. Play \n 3. Age \n 4. Exit`)
    switch(request){
        case 1:
            pet.feed();
            break;
        case 2:
            pet.play();
            break;
        case 3:
            pet.agePet();
            break;
        case 4:
            alert(`Good bye, ${pet.name}`)
            exit();
        default:
            alert("Invalid request please try again...")
    }
}*/