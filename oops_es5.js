// const e= 'prakad';
// console.log(typeof e); 

// const  s = new String('praveen');
// console.log(typeof s);

//Object Literal

// const book1 = {
//     title:'Javascript',
//     author:'John Doe',
//     year:'2013',
//     getSummary: function () { 
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//         }
// };

// const book2 = {
//     title:'Java',
//     author:'Jane Doe',
//     year:'2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//         }
// };

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book2));

//Constructor
// const book = function (title, author, year){
//     this.title =  title;
//     this.author = author;
//     this.year = year;
// }

//Prototyping the objects
// book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }
// book.prototype.ages = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`
// }
// book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }

// const book1 = new book('Js stater', 'Prakad', '2013');
// const book2 = new book('Js star', 'Praveen', '2015');
// book2.revise('2018');
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book1.ages());
// console.log(book2);
// console.log(book1);


//Inheritance

// const Book = function (title, author, year){
//     this.title =  title;
//     this.author = author;
//     this.year = year;
// }

// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

//Magazine Constructor

// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year); 
//     this.month = month;
// }

//Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

//Initiate
// const mag1 = new Magazine('ponniyan selvan', 'kalki', '2000', 'Jan');

//Using Magazine Construtor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);
// console.log(mag1.getSummary());


//Object Create

const bookProtos = {
    
    getSummary : function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
        },

    ages : function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
        }
}

//Create Object

//Type 1:

// const book1 = Object.create(bookProtos);
// book1.title = 'Ponii';
// book1.author = 'John Doe';
// book1.year = '2018';

//Type 2:

const book1 = Object.create(bookProtos, {
    title: {value: 'Pniyin'},
    author: {value: 'Kalki'},
    year: {value: '2000'}
});

console.log(book1);



    