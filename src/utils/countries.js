import EarthFlag from "../assets/images/un-flag.png"

export const Countries = [
    { id: 0, name: "World", flag: EarthFlag },
    { id: 1, name: "USA", flag: "https://www.countryflags.io/us/shiny/64.png" },
    { id: 2, name: "India", flag: "https://www.countryflags.io/in/shiny/64.png" },
    { id: 3, name: "Brazil", flag: "https://www.countryflags.io/br/shiny/64.png" },
    { id: 4, name: "Russia", flag: "https://www.countryflags.io/ru/shiny/64.png" },
    { id: 5, name: "France", flag: "https://www.countryflags.io/fr/shiny/64.png" },
    { id: 6, name: "Spain", flag: "https://www.countryflags.io/es/shiny/64.png" },
    { id: 7, name: "Argentina", flag: "https://www.countryflags.io/ar/shiny/64.png" },
    { id: 8, name: "Colombia", flag: "https://www.countryflags.io/co/shiny/64.png" },
    { id: 9, name: "UK", flag: "https://www.countryflags.io/gb/shiny/64.png" },
    { id: 10, name: "Mexico", flag: "https://www.countryflags.io/mx/shiny/64.png" },
    { id: 10, name: "Peru", flag: "https://www.countryflags.io/pe/shiny/64.png" },

]

export function flagFinder(country) {
    switch (country) {
        case 'World':
            return Countries[0]
        case 'USA':
            return Countries[1]
        case 'India':
            return Countries[2]
        case 'Brazil':
            return Countries[3]
        case 'Russia':
            return Countries[4]
        case 'France':
            return Countries[5]
        case 'Spain':
            return Countries[6]
        case 'Argentina':
            return Countries[7]
        case 'Colombia':
            return Countries[8]
        case 'UK':
            return Countries[9]
        case 'Mexico':
            return Countries[10]
        case 'Peru':
            return Countries[11]
        default:
            break;
    }
}

