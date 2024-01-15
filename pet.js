class Pet{
    constructor(_petname, _ownername, _species, _breed){
this.petName = _petname
this.ownerName = _ownername
this.species = _species
this.breed = _breed
    }
    idem(){
        if(pet1.ownerName===pet2.ownerName){
            return true
        }
        else{
            return false
        }
    }
}
const pet1 = new Pet("Gigio", "Matteo", "cat", "Siamese")
const pet2 = new Pet("Fufy", "Giovanni", "dog", "Labrador")
console.log(pet1.idem())