const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];

[genes[2], genes[4]] = [genes[4], genes[2]]

let genesNew = [genes[0],genes[1], genes[2], genes[3], genes[4]];

genesNew.push(genesNew[3])
genesNew.push(genesNew[3])
genesNew.splice(3,1);  

genesNew.unshift("FXT")

console.log(genesNew)
