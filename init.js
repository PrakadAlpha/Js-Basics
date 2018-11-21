const companies = [
    {name:'company 1', category:'Product', start:'1980', end:'2010', ages:'21'},
    {name:'company 2', category:'Market', start:'1983', end:'2013',ages:'22'},
    {name:'company 3', category:'Product', start:'1977', end:'2020',ages:'23'},
    {name:'company 4', category:'Market', start:'1976', end:'2018',ages:'25'},
    {name:'company 5', category:'Finance', start:'1965', end:'2007',ages:'24'},
    {name:'company 6', category:'Market', start:'1967', end:'2009',ages:'26'}
];

const ages = [21,24,65,74,45,33,23,67,88,97,64,32,21,12,20];


// Map -- Gives the array of what is passed in like filtering the necessary things to get as an array

// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`
// })
// console.log(testMap);

// ES6
// const testMap = companies.map(company =>`${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const agesSqr = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age ** 2);

// console.log(agesSqr);

//Sort -- sorting

// const sortedComp = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedComp);

// ES6
// const sortedSet = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
// console.log(sortedSet);


// const sortedAge = ages.sort();
// const sortedAge = ages.sort((a,b) => a - b);
// const sortedAge = ages.sort((a,b) => b - a);
// console.log(sortedAge);


// Reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// })
// console.log(ageSum);

// ES6
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// },0);
// console.log(totalYears);

//ES6
// const ageSum = companies.reduce((total, company) => total + (company.end - company.start),0);
// console.log(ageSum);


//All Combined

// const combined = ages
// const combined = ages
//     .map( age =>  age * 2 )
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);

//     console.log(combined);
    


