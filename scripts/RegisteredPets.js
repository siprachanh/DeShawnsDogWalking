import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers 

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id= pets --${pet.id}>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


