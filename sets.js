//SETS

function mySet(){
    let collection = [];

    this.has = function(element){
        return collection.indexOf(element) !== -1 ;
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return collection.length;
    }

    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(e => {
            unionSet.add(e);
        });

        secondSet.forEach(e => {
            unionSet.add(e);
        });
        return unionSet;
    }

    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    this.subset = function(otherSet){
        let firstSet = this.values();
            return firstSet.every(value => {
                return otherSet.has(value);
            });
        }
}


let set1 = new mySet();
let set2 = new mySet();
set1.add('a');
set1.add('b');
set2.add('a');
set2.add('c');
console.log(set1.subset(set2));
console.log(set1.intersection(set2).values());

//ES6 SETS inbuilt Object

let set3 = new Set();
let set4 = new Set();

set3.add('a');
set3.add('b');
set4.add('a');
set4.add('b');

console.log(set3.values());
set4.delete('b');
console.log(set4.has('b'));
