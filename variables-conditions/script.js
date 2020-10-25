//Variables & Operators
//Exercise 1

const maxCapacity = 14
let surfTime = true
let bestStudent
const purposeInLife

console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
console.log(purposeInLife)

//Exercise 2

const isVariable = "Eating chips "
const result = isVariable + "is the best thing ever."
console.log(result)

// +=

let isVariable = "Eating chips "
isVariable += "is the best thing ever."
console.log(isVariable)


//Exercise 3

let password = "A123"
let confirmPassword = "A123"
passwordCheck(password==confirmPassword)

//Exercise 4

console.log(432 * 12)
console.log(802/2)
console.log((5+6) * 3 )

//Exercise 5


(5 > 2) && false // false
!("knife" === "sword") // true
(1 < 2) || (-1 > -1) || !false // true
"" // false
(31 % 5) == "1" // true
!!true // true
"5th Avenue" != "5th Avenue" // false
52 !== "52" // false
(undefined || null) // false


//Exercise 6

let a = 3
a = 4 //a=4
let c = 0 
let b = a //b=4
b = 2 //b=2
a = b //a=2
b = c //b=0
c = a //c=2
a = b //a=0, b=0, c=2






//Conditional Statements

//Exercise 1

let numChildren = prompt("How many kids do you have?")
const isCareful = true

if (isCareful) 
    
    numChildren ++

console.log(numChildren)


//Exercise2

const silverwareCount = 843

if (silverwareCount%2 !== 0) {
    
console.log("There is something missing") 
} /*prints the message...*/



//Exercise 3

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance) {
    
    salary +=stellarBonus

} else {
    
    salary += goodBonus
}


//Exercise 4


const isVIP = false
let cash = 500

if (isVip || cash>300) {
    
    console.log("You are welcome in")

} else {
    
    console.log("Maybe next time...")
}


//Exercise 5


const a = 3
let b = 2
let c = 0 || 12 // c= 12 (0 is false)
let d

b = c //b = 12
b++ //b = 13
if(d){
  b = a
}

d = a + (b * c) // d = 159
d++ 
b += 2 // a = 3, b = 15, c = 12, d = 160.


//Exercise 6

const gender = null
let profession = "business"

let sex = prompt("What is your gender?")

if (sex === "male") {
    
    console.log("You are a "+ profession +"man.")

} else if (sex === "female") {
    
    console.log("You are a "+ profession +"woman.")

} else {
    
    console.log("You are a "+ profession +"person.")

} 
    

//Exercise 7

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if (boughtTesla && isUSCitizen ) {
    
    console.log("When did you buy your Tesla?")
}   
    if ((currentYear - yearOfTeslaPurchase) >= 4 ) {
        
        console.log("Would you like to upgrade your car?")

    } else {
        
        console.log("Are you satisfied with the car?")
    }
    


