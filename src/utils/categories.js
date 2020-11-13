export const Categories = [
    {category:"country"},
    {category:"cases"},
    {category:"todayCases"},
    {category:"deaths"},
    {category:"todayDeaths"},
    {category:"recovered"},
    {category:"active"},
    {category:"critical"},
    {category:"casesPerOneMillion"},
    {category:"deathsPerOneMillion"},
    {category:"totalTests"},
    {category:"testsPerOneMillion"},
];

export function categoryFinder(category) {
    switch (category) {
        case 'country':
            return 0
        case 'cases':
            return 1
        case 'todayCases':
            return 2
        case 'deaths':
            return 3
        case 'todayDeaths':
            return 4
        case 'recovered':
            return 5
        case 'active':
            return 6
        case 'critical':
            return 7
        case 'casesPerOneMillion':
            return 8
        case 'deathsPerOneMillion':
            return 9
        case 'totalTests':
            return 10
        case 'testsPerOneMillion':
            return 11
        default:
            return 12
    }
}