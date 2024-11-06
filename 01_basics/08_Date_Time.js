// ************************** Date and Time *******************
// Dates usually starts from 1 January 1970, UTC (as fom MDN)

let myDate= new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())      // different ways to convert a date
console.log(myDate.toLocaleString())

console.log(typeof myDate)      // it is of object data type

let mycreatedDate= new Date(2023, 0, 23)        // Month starts from 0 (Jan) and Day starts from 1 (Monday)
console.log(mycreatedDate.toDateString())

let mycreatedDateTime = new Date(2023, 0, 23, 5, 3); 
console.log(mycreatedDateTime.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp)      // in milliseconds
console.log(Math.floor(Date.now()/1000))        // in rounded off seconds value

let newDate = new Date()
console.log(newDate.getMonth() + 1) // Present Month (so that the month starts from 1)
console.log(newDate.getDay())   // Present Day

// Customizing toLocaleString property -->
newDate.toLocaleString('default', {
    weekday: "long"
})