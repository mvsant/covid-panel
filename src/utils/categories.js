export const Categories = [
    { category: "cases" },
    { category: "todayCases" },
    { category: "deaths" },
    { category: "todayDeaths" },
    { category: "recovered" },
    { category: "active" },
    { category: "critical" },
    { category: "casesPerOneMillion" },
    { category: "deathsPerOneMillion" },
    { category: "totalTests" },
    { category: "testsPerOneMillion" },
];

export function categoryFinder(category) {
    switch (category) {
        case 'cases':
            return 0
        case 'todayCases':
            return 1
        case 'deaths':
            return 2
        case 'todayDeaths':
            return 3
        case 'recovered':
            return 4
        case 'active':
            return 5
        case 'critical':
            return 6
        case 'casesPerOneMillion':
            return 7
        case 'deathsPerOneMillion':
            return 8
        case 'totalTests':
            return 9
        case 'testsPerOneMillion':
            return 10
        default:
            return 11
    }
}