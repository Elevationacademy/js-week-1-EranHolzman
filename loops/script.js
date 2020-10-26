//Loops

    //Exercise 1

let names = ['Bob', 'Richard', 'Tom']
let ages = [ '10', '20', '30']

for (const keyIndex in names) {
    
        console.log( names[keyIndex]  + " is " + ages[keyIndex] + " years old.")
        
} 


    //Exercise 2

let numbers = [5, 10, 15, 20]

let sum = 0

for (let company of numbers) {

    sum += company
    
    
}
console.log(sum);


    //Exercise 3

 sumAverage = (sum / numbers.length )
 console.log(sumAverage)

    //Exercise 4

let nums = []

for(i=1; i<101; i++){

    nums.push(i)
}
console.log(nums)


    //Exercise 5

for(let odd of nums){

    if(odd%2 !=0){

        console.log(odd)

    }
}

    //Exercise 6

let longArray = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let numIndex of longArray){

    if(numIndex == 709){

        console.log(longArray.indexOf(709))
    }
}