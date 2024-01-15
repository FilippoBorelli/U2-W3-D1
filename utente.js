class User{
    constructor(_firstname, _lastname, _age, _location){
this.firstName = _firstname
this.lastName = _lastname
this.age = _age
this.location = _location
    }
    paragone(){
        if(utente1.age>utente2.age){
            return utente1.firstName + " è più vecchio di " + utente2.firstName
        }
        else{
            return utente1.firstName + " è più giovane di " + utente2.firstName
        }
    }
}
const utente1 = new User("Paolo", "Rossi", 28, "Roma")
const utente2 = new User("Luca", "Verdi", 23, "Venezia")
console.log(utente1.paragone())