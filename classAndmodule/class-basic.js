// class Test { //create class 

// }

// const test = new Test() //create instance

// class Circle {
// // declare property PI w/o const, let, var 
//     PI = 3.141 //const let var cant use for declare
//     constructor(radius){ // use for keep value from instance for ค่าที่จะเปลี่ยนแปลงตาม instance
//         this.radius = radius // or use 'this' replace Circle
//     }
// }

// let c = new Circle(10)

// c.PI = 3.141592
// console.log(c.radius);
// console.log(Circle);

// class Person {
//     constructor(name, career, yearBorn, nationality = "Thai"){
//         this.name = name
//         this.career = career
//         this.age = new Date().getFullYear() - yearBorn 
//         this.nationality = nationality
//     }
// }

// const person = new Person('Somsri', 'Accountant', 1990)
// console.log(person.name)
// person.career = 'Secretary'
// console.log(person.career)
// console.log(person.age)
// console.log(person.yearBorn); // person.yearBorn is empty

/********************** class method practice ******************************/
// class ThaiDate {
//     constructor(year, month, date){
//         this.year = year
//         this.month = month
//         this.date = date
//     }
//     //*to create class's method | w/o function*/

//     getShotDate() {
//         return `${this.date} / ${this.month} / ${this.year + 543}`
//     }

//     getLongDate() {
//         const m = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม','มิถุนายน',
//             'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
//         return `${this.date}  ${m[this.month - 1]}  ${this.year + 543}`
//     }
// }

// const thDate = new ThaiDate(2020, 8, 3)
// console.log(thDate.getShotDate())
// console.log(thDate.getLongDate())


/**********************Static Method ***********************/

class Random {
    static getFloat() {
        return Math.random()
    }

    static getInteger(min, max) {
        let x = (max - min) + 1
        let number = Math.random()
        let result = min + Math.floor(number * x)
        return result
    }

    static getBoolean() {
        let r = this.getInteger(1, 10)
        return (r >= 5) ? true : false 
    }
}

// console.log(Random.getFloat())
// console.log(Random.getInteger(1, 10))
// console.log(Random.getBoolean())// return number diff. from above()


/**************class Subclass extends Superclass**************** */
class SimpleDate { //Superclass //abstract class
    constructor(year, month, date){
        this.year = year
        this.month = month
        this.date = date
    }

    getShortDate(){
        return `${this.date} / ${this.month} / ${this.year + 543}`
    }
}

class ThaiDate extends SimpleDate {
    getLongDate(){ //extended method
        const m = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม','มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ]
        return `${this.date} ${m[this.month - 1]} ${this.year + 543}`
    }

    isLeapYear(){
        let y = this.year // have to christian year
        if((y % 400 === 0) || ((y % 4 === 0) && (y % 100 !== 0))){
            return true
        }
        return false
    }
}

const thDate = new ThaiDate(2020, 8, 4)
//console.log(thDate.getShortDate());
console.log(thDate.getLongDate());
console.log(thDate.isLeapYear())

