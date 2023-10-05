

class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }

    print(){
        console.log(`The ${this.type} ${this.attack}`)
        console.log(`The hero ${this.type} by the name of ${this.name}, defeated the foe`)
    }

}

let mage = new hero ("Gandalf", 300, "Mage", "Attack using Magic")
let warrior = new hero ("Ragnar", 35, "Warrior", "Attack using his Sword")
let monk = new hero ("Grand", 47, "Monk", "Attack using Martial Arts")
let ninja = new hero ("Kakashi", 27, "Ninja", "Attack throwing his Shurikens")

mage.print()
warrior.print()
monk.print()
ninja.print()