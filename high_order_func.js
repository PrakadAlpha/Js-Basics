const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Purchase', start: 1980, end: 2001},
    {name: 'company 3', category: 'Market', start: 1977, end: 2011},
    {name: 'company 4', category: 'Tech', start: 1976, end: 2018},
    {name: 'company 5', category: 'Market', start: 1981, end: 2000},
    {name: 'company 6', category: 'Design', start: 1985, end: 2002},
    {name: 'company 7', category: 'Market', start: 1989, end: 2001}
];

const ages = [22,23,34,52,56,43,34,,43,34,45,45,47,59];


// For
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// ForOf()
// const name="Dylan prakad alpha"
// for (const char of name) {
//     console.log(char);        
// }

// ForEach
// companies.forEach(function(company){
//     console.log(company.name);
// });


// Filtering

// let canDrink = [];
// for(i=0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);


// const canDrink = ages.filter(function(age) {
//    if(age >= 21){
//        return true;
//    } 
// });
// console.log(canDrink);

//ES6

// const canDrink = ages.filter (age => age>=21); 
// console.log(canDrink);

// const compan = companies.filter(company => company.category === 'Market');
// console.log(compan);

