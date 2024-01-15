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

const petName = document.getElementById('name')
const ownerName = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const saveButton = document.querySelector('form button')

const data = []

class Data {
    constructor(_petname, _ownername, _species, _breed){
        this.petName = _petname
        this.ownerName = _ownername
        this.species = _species
        this.breed = _breed
  }
}

const cards = function () {

  const row = document.getElementById('data')

  row.innerHTML = ''

  data.forEach((data) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')

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
    row.appendChild(newCol)
  })

  petName.value = ''
  ownerName.value = ''
  species.value = ''
  breed.value = ''
}

const formSubmit = document.getElementsByTagName('form')[0]
formSubmit.addEventListener('submit', function (e) {
  e.preventDefault()

  const dati = new Data(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )

  console.log('CARD CREATA', data)

  data.push(dati)

  cards()
})