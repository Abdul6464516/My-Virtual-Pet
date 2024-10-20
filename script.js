var pet = {
    name:"",
    type:"",
    age:0,
    happiness:50,
    hunger:50,
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
        pet.happiness = pet.happiness + 20;
        alert(`You played with ${this.name}. Happiness is now ${this.happiness}`)
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

pet.name = prompt("Enter your pet name?")
pet.type = prompt("Enter your pet type such as cat, dog, goat etc.")
pet.age = +prompt("How old your pet is?")

while(true){
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
}