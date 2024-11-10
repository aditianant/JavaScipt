const accountId=14423                   //const keyword does not allow any changes in accountId, other three can be changed
let accountEmail="aditi@google.com"
var accountPassword="12345"             //var is not so much used in Javascript bcz of issue in block and functional scope; instead let is used
accountCity="Patna"                     //Dont use varibales without any keyword specified


accountId=125                           //not allowed
accountEmail="addadd@add.com"
accountPassword="78945"
accountCity="Bangalore"

// {}--these are known as scope (block or functional)
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
