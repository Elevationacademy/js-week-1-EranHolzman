//Arrays

 const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];

[genes[2], genes[4]] = [genes[4], genes[2]]

let genesNew = [genes[0],genes[1], genes[2], genes[3], genes[4]];

genesNew.push(genesNew[3])
genesNew.push(genesNew[3])
genesNew.splice(3,1);  

genesNew.unshift("FXT")

console.log(genesNew)
 

 //Objects

    // Exercise 1

  let p1 = {

    name: "Jill",
    age: "29",
    city: "Tel aviv"
 }

 let p2 = {

    name: "Robert",
    age: "29",
    city: "Haifa"

}


if (p1.age == p2.age) {

    if (p1.city == p2.city) {
    
        console.log(p1.name + " wanted to date " + p2.name)
   
    }
    
 else {

    console.log (p1.name + " wanted to date " + p2.name + ", but couldn't")

    }

}
  
 
    //Exercise 2


let myList = [

    {name:"Eran", lastName: "Holzman", city:"telAviv"},
    {name:"Or", lastName: "Cohen", city:"Haifa"}
]

myList[0].city = "Jerusalem"
myList.splice(1,1)

console.log(myList)


    //Exercise 3


let myNames = [

    {name:"Liran", lastName: "Levi", city:"RamatHasharon"},
     {name:"Ido", lastName: "Lev", city:"Herzlia"}
 ]

 myList.push(...myNames)

 console.log(myList)


//Exercise 4


let libary = {

    books: [

        {title: "HarryPotter", author: "jkRolling"},
        {title: "book2", author: "unKnown"}
    ]
}

myList.push(...libary.books)

console.log(myList)