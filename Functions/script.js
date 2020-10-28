// //     // Exercise 1

// // const calcAge = function(currentYear, bornYear){
// //    return currentYear-bornYear
// // }

// // const age = calcAge(2017, 1989)
// // console.log(age)


// // //Exercise 2


// // const calcAbout = function (currentYear, bornYear) {
// //     return currentYear-bornYear
// //  }
 
// //  const age = calcAbout(2020,1995 )
// //  const ageMinus1 = age -1
// //  console.log("You are either " + age + ", Or " + ageMinus1 + " Years old.")


// // Exercise 3

// const isEven = function(number) {

//     if (number%2 === 0) {
//         return true
//     } else {
//         return false
//     }

// }
// const boolCheck = isEven(19)
// console.log(boolCheck)


// Exercise 4



// const isOdd = function(number) {

//     for (let num of number){
//         if (num%2 !== 0) {

//                 console.log(num)
            
    
//         } 
     
//      }
   
// }

// const numbers = [4, 16, 3, 12, 9]
// isOdd (numbers)



//Exercise 5


const checkExists = function (arrParameter, number){

    let start = arrParameter[0]

    for(let num of arrParameter){

            if (num === number) {

                return true
                
            } 
        
    }
    return false

}

let result = checkExists ([0, 1, 2, 3], 2)
console.log(result)



