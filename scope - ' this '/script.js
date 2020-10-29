//Scope


//===================================================================================
//Section 1
//===================================================================================

const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
            //(i=0) will print "running"
            //(i=1) will print "running"
            //(i=2) will print "running"
            //(i=3) will print "running"
            //(i=4) will print "running"
            //(i=5) will print "running"
            //(i=6) will print "running"
            //(i=7) will print "running" 
            //(i=8) is not true, exit the if statement
    }
    console.log("Finished running " + distance + " miles")
        // Will print 'Finished running 8 miles'
}


console.log("Damn, you see this gal? She ran " + distance + " miles")  // This log to the console might not work,cause distance is declared in the if SCOPE. 


    //===================================================================================//Section 2//===================================================================================

    
if (13 == "space") {
    let cowSound = "moo"
}
else {                                      
    console.log("Cow says " + cowSound) // Won't print what is here, cause cowSound is defined in the if scope, in addition to that, the IF statement is false.
}



//===================================================================================
//Section 3
//===================================================================================


const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) //Will print without problems, since specialOrder is defined inside.
    }

    console.log("Finished serving all the orders: " + orders) // Will console cause it inside the function block, and Since orders is defined in the function SCOPE it's OK.
}

const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)



//===================================================================================
//Section 4
//===================================================================================


const pot = "red pot with earth in it"  


const getSeed = function () {
  const seed = "brown seed"
}



const plant = function () {
    getSeed()

    console.log("Planting the " + seed + " inside a " + pot)
}



plant() // Will call the plant function, which calling the getSeed function, but won't be able to access seed variable since its in a different SCOPE.



//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================


const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
            
        }
        
    }
    return found // This return refers to the grandchild declaration of the IF statement, Therefore it's another SCOPE so nothing to return.
}


const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}



//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================


let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        // i=0, but not >5
        //i=1 but not >5
        //i=2 but not >5
        //i=3 but not >5
        //i=4 but not >5
        // i=5 but not >5
        //i=6 so will get in the IF, but since it's already declared in the global Scope, with a const it's can't be reassign.
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...") 
    
}

this

Exercise 1

const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) { 
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() 
  

//   Exercise 2


 const pump = function (amount) {
        this.liters += amount;
        console.log('You put ' + amount + ' liters in ' + this.name);
    };

  
  const garage = {

   
        
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  

// Exercise 3


  
const pumpFuel = function (plane) {
    airplane.fuel += 1;
  };
  
  const airplane = {
     fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());
  


  //Exercise 4


  const tipJar = {

      stealCoins: function(number){
        this.coinCount -= number
        
      },
  
    coinCount: 20,

    tip: function () {
      this.coinCount += 1;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  