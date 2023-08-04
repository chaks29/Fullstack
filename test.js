// a=20
// console.log("the ans is",a)
// {
//     a=26
//     console.log("the ans aft update",a)
// }

// let a=20

// console.log("the ans is",a)
// {
//     let a=26
//     console.log("the ans aft update",a)
// }
// let b=50
// console.log("the ans is",b)
// const c=20
// console.log("the ans is",c)
// const c=50
// console.log("the ans is",c)
// -----------------------------------------------------------------------------------------------------------------------------------------
// IF&ELSE
// a=26
// if(a>0){
//    console.log("positive")
// }
// else if(a==0){
//     console.log("zero!!")
//  }
// else {
//     console.log("negative")
//  }

//  let a=0
//  if(a>0){
//     console.log("positive")
//  }
//  else if(a==0){
//      console.log("zero!!")
//      a=a+1
//   }
// console.log(a)
//  else {
//      console.log("negative")
//   }
// -------------------------------------------------------------------------------------------------------------------------------------
// FOR
// a=5
// for (i=0; i<a;i++){
//     console.log(i)
// }

// // WHILE
// i=0
// while(i<=a){
//     console.log(i)
//     i++
// }

// array = [10,20]
// array.forEach(element => console.log(element));
// -----------------------------------------------------------------------------------------------------------------------------------

// ARRAY
// const arr=[12,45,"hello",2.5,Date()]
// console.log("before change")
// for (var i in arr){
//     console.log(arr[i])
// }
// console.log("aft change")
// arr.push("3rd yr")
// for(var i of arr){
//     console.log(i)
// }
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log("after pop",arr)

// arr.push(365)
// arr.push("khi")
// console.log("after push",arr)
// arr.pop()
// arr.pop()
// arr.pop()
// console.log("after pop",arr)

// if (arr.length==0){
//     console.log("no element found in arr")
// }

// else {
//     console.log("element found in array r ",arr)
       
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// OBJECTS
// car={
//     car:"skoda",
//     year:2019,
//     speed:"210 kmph",
//     km:"50k"
// }

// car.cam={isPresent:"no",exter:"no"}
// car.sensor={isPresent:"yes",exter:"yes"}


// console.log("speed",car.speed)
// console.log(car["year"])
// console.log(car)
// console.log(car.cam)
// console.log("camera",car.cam.isPresent)
// console.log("sensor",car.sensor.isPresent)
// for (var i in car){
//     console.log(i+":"+car[i])
//     if(typeof car[i]=="object")
//     {
//         for (var j in car[i]){
//             console.log(j+":"+car[i][j])
//         } 
//     }
// }