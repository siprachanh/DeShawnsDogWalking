import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (Pet, allWalkers) => {
    let currentpetWalker = null
    

    for (const walker of allWalkers) {
        if (walker.id === Pet.walkerId) {
            currentpetWalker = walker
        }
    }

    return currentpetWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const Pet of pets) {
        const petWalker = findPetWalker(Pet, walkers)
        assignmentHTML += `
            <li>
                ${Pet.name} is being walked by
                ${petWalker.name} in ${petWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

