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

// devo fare in modo di creare col e card dinamicamente raccogliendo i dati inseriti nel form

// 1) prendiamo dei riferimenti agli input
const petName = document.getElementById('name')
const ownerName = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const saveButton = document.querySelector('form button') // il tag button dentro il tag form

// 2) creo la mia rubrica in memoria
const data = [] // un array di oggetti inizialmente vuoto

// creo una classe Contact, per creare un oggetto a partire dai dati recuperati dal form
class Data {
    constructor(_petname, _ownername, _species, _breed){
        this.petName = _petname
        this.ownerName = _ownername
        this.species = _species
        this.breed = _breed
  }
}

const cards = function () {
  // devo creare delle cards a partire dall'array di oggetti "contacts"
  // 1) prendo un riferimento alla row
  const row = document.getElementById('data')
  // svuoto la lista prima di ricreare le col
  row.innerHTML = ''
  // 2) ciclo l'array contacts: per ogni contatto creo una col, creo una card e appendo il tutto
  data.forEach((data) => {
    const newCol = document.createElement('div') // <div></div>
    newCol.classList.add('col') // aggiungo la classe col
    // riempio il contenuto della col
    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data.petName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.ownerName}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.species}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.breed}</h6>
            </div>
        </div>
        `
    // appendere la col alla row
    row.appendChild(newCol)
  })

  // svuoto il form ad operazione completata
  petName.value = ''
  ownerName.value = ''
  species.value = ''
  breed.value = ''
}

// 3) assegno un comportamento all'invio del form
const formSubmit = document.getElementsByTagName('form')[0]
formSubmit.addEventListener('submit', function (e) {
  e.preventDefault() // fermiamo la pagina dal refresh
  // raccolgo i dati dagli input, e ne creo un oggetto

  const dati = new Data(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )

  console.log('CARD CREATA', data)
  // riempio la rubrica
  data.push(dati)
  // popolare la seconda row della pagina con tante card quanti sono gli elementi di contacts
  cards()
})