currentResult = 128122

if (currentResult.toString().length > 5) {
    console.log('yes')
} else {
    console.log('no')
}



// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });


// let currentResult = ''
// allNumbers = '100'

// if (currentResult == '') {
//     currentResult = -0
// }
// currentResult = currentResult - Number(allNumbers)

// console.log(currentResult)



// // let str = '45.55555-5.44445'
// // let numA = parseFloat(str)
// // let lengthOfNumA = (numA).toString().length
// // let action = str[lengthOfNumA]
// // let numB = str.slice(lengthOfNumA+1)
// // let result = +numA + +numB

// // console.log(str, lengthOfNumA, numA, action, numB, result)


// let arr = [1,0,0,'.',1,0,'-',1,0,'.',3,'+',1,0,0]
// let str = '100.10-10.3+100'
// let arrayOfAction = []

// // получили массив действий и их места в исходном массиве
// for (let i = 0; i < arr.length; i++) {
//     if (!isFinite(arr[i]) && arr[i] !== '.') {
//         arrayOfAction.push([arr[i],i])
//     }
// }
// let arrayOfNumbers = []

// for (let i = arrayOfAction.length - 1; i > 0; i--) {
//     let a
//     arrayOfNumbers.push(arr.splice(arrayOfAction[i][1] + 1, arr.length - arrayOfAction[i][1] - 1))
//     console.log(arrayOfNumbers)
// }

// console.log(arrayOfNumbers)
// // убирает знаки вначале элементов со 2-го
// // for (let i = 1; i < arrayOfNumbers.length; i++) {
// //     arrayOfNumbers[i].splice(0,1)  
// // }



// //  значит у нас два действия (arrAction.length ) и три числа (arrAction.length+1) 

// console.log(arrayOfAction)