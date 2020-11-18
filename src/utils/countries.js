import EarthFlag from "../assets/images/un-flag.png";

export const Countries = [
  { id: 0, name: "World", flag: EarthFlag },
  { id: 1, name: "USA", flag: "https://www.countryflags.io/us/shiny/64.png" },
  { id: 2, name: "India", flag: "https://www.countryflags.io/in/shiny/64.png" },
  {
    id: 3,
    name: "Brazil",
    flag: "https://www.countryflags.io/br/shiny/64.png",
  },
  {
    id: 4,
    name: "Russia",
    flag: "https://www.countryflags.io/ru/shiny/64.png",
  },
  {
    id: 5,
    name: "France",
    flag: "https://www.countryflags.io/fr/shiny/64.png",
  },
  { id: 6, name: "Spain", flag: "https://www.countryflags.io/es/shiny/64.png" },
  {
    id: 7,
    name: "Argentina",
    flag: "https://www.countryflags.io/ar/shiny/64.png",
  },
  {
    id: 8,
    name: "Colombia",
    flag: "https://www.countryflags.io/co/shiny/64.png",
  },
  { id: 9, name: "UK", flag: "https://www.countryflags.io/gb/shiny/64.png" },
  {
    id: 10,
    name: "Mexico",
    flag: "https://www.countryflags.io/mx/shiny/64.png",
  },
  { id: 11, name: "Peru", flag: "https://www.countryflags.io/pe/shiny/64.png" },
  {
    id: 12,
    name: "South Africa",
    flag: "https://www.countryflags.io/za/shiny/64.png",
  },
  {
    id: 13,
    name: "Italy",
    flag: "https://www.countryflags.io/it/shiny/64.png",
  },
  { id: 14, name: "Iran", flag: "https://www.countryflags.io/ir/shiny/64.png" },
  {
    id: 15,
    name: "Germany",
    flag: "https://www.countryflags.io/de/shiny/64.png",
  },
  {
    id: 16,
    name: "Chile",
    flag: "https://www.countryflags.io/cl/shiny/64.png",
  },
  { id: 17, name: "Iraq", flag: "https://www.countryflags.io/iq/shiny/64.png" },
  {
    id: 18,
    name: "Belgium",
    flag: "https://www.countryflags.io/be/shiny/64.png",
  },
  {
    id: 19,
    name: "Indonesia",
    flag: "https://www.countryflags.io/id/shiny/64.png",
  },
  {
    id: 20,
    name: "Bangladesh",
    flag: "https://www.countryflags.io/bd/shiny/64.png",
  },
  {
    id: 21,
    name: "Ukraine",
    flag: "https://www.countryflags.io/ua/shiny/64.png",
  },
  {
    id: 22,
    name: "Philippines",
    flag: "https://www.countryflags.io/ph/shiny/64.png",
  },
  {
    id: 23,
    name: "Poland",
    flag: "https://www.countryflags.io/pl/shiny/64.png",
  },
  {
    id: 24,
    name: "Turkey",
    flag: "https://www.countryflags.io/tr/shiny/64.png",
  },
  {
    id: 25,
    name: "Netherlands",
    flag: "https://www.countryflags.io/nl/shiny/64.png",
  },
  {
    id: 26,
    name: "Saudi Arabia",
    flag: "https://www.countryflags.io/sa/shiny/64.png",
  },
  {
    id: 27,
    name: "Czechia",
    flag: "https://www.countryflags.io/cz/shiny/64.png",
  },
  {
    id: 28,
    name: "Pakistan",
    flag: "https://www.countryflags.io/pk/shiny/64.png",
  },
  {
    id: 29,
    name: "Israel",
    flag: "https://www.countryflags.io/il/shiny/64.png",
  },
  {
    id: 30,
    name: "Sierra Leone",
    flag: "https://www.countryflags.io/sl/shiny/64.png",
  },
  {
    id: 31,
    name: "China",
    flag: "https://www.countryflags.io/cn/shiny/64.png",
  },
  {
    id: 32,
    name: "Nigeria",
    flag: "https://www.countryflags.io/ng/shiny/64.png",
  },
  {
    id: 33,
    name: "Uruguay",
    flag: "https://www.countryflags.io/uy/shiny/64.png",
  },
  {
    id: 34,
    name: "Australia",
    flag: "https://www.countryflags.io/au/shiny/64.png",
  },
  {
    id: 35,
    name: "Austria",
    flag: "https://www.countryflags.io/at/shiny/64.png",
  },
];

export function flagFinder(country) {
  switch (country) {
    case "World":
      return Countries[0];
    case "USA":
      return Countries[1];
    case "India":
      return Countries[2];
    case "Brazil":
      return Countries[3];
    case "Russia":
      return Countries[4];
    case "France":
      return Countries[5];
    case "Spain":
      return Countries[6];
    case "Argentina":
      return Countries[7];
    case "Colombia":
      return Countries[8];
    case "UK":
      return Countries[9];
    case "Mexico":
      return Countries[10];
    case "Peru":
      return Countries[11];
    case "South Africa":
      return Countries[12];
    case "Italy":
      return Countries[13];
    case "Iran":
      return Countries[14];
    case "Germany":
      return Countries[15];
    case "Chile":
      return Countries[16];
    case "Iraq":
      return Countries[17];
    case "Belgium":
      return Countries[18];
    case "Indonesia":
      return Countries[19];
    case "Bangladesh":
      return Countries[20];
    case "Ukraine":
      return Countries[21];
    case "Philippines":
      return Countries[22];
    case "Poland":
      return Countries[23];
    case "Turkey":
      return Countries[24];
    case "Netherlands":
      return Countries[25];
    case "Saudi Arabia":
      return Countries[26];
    case "Czechia":
      return Countries[27];
    case "Pakistan":
      return Countries[28];
    case "Israel":
      return Countries[29];
    case "Sierra Leone":
      return Countries[30];
    case "China":
      return Countries[31];
    case "Nigeria":
      return Countries[32];
    case "Uruguay":
      return Countries[33];
    case "Australia":
      return Countries[34];
      case "Austria":
        return Countries[35];
    default:
      return { id: 999, name: "None", flag: EarthFlag };
  }
}
