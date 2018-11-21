// Classes
// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary(){
//       return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge(){
//     return `${this.title} is ${years} years old`;
//     }

//     revise(newYear){
//     this.year = newYear;
//     this.revised = true;
//     }

//     static getTopBooks(){
//         return 'Barnes & Tirne'
//     }
// }
// const book1 = new  Book('Ponniyin Selvan', 'Kalki', '2000');
// book1.revise('1000');
// console.log(book1);
// console.log(Book.getTopBooks());

//SubClasses

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('Poniuin', 'Kalki', '2000', 'Jan');
console.log(mag1);
console.log(mag1.getSummary());
