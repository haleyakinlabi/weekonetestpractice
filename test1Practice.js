//Problem 1
// Create an array that holds the numbers 100-200
let numArr = []
let i = 99
console.log(numArr)
 while (i < 200 ){
    console.log(i);
    i++
    numArr.push(i)
 }
console.log(numArr)

//Problem 2
//loop through array. For numbers that are divisible by 5 print 'haley'. For numbers that are divisible by 6 print 'sue'. For numbers that are divisible by 8
//print 'haley sue' 

for (i = numArr[0]; i < numArr[numArr.length - 1]; i++){
    if (i % 5 === 0){
        console.log('haley')
    } else if (i % 6 === 0){
        console.log('sue')
    } else if (i % 8 === 0){
        console.log('haleysue')
    }
}
//Problem 3
// loop over the number values in numArr then
// 1. print 'haley' if divisible by 4
// 2. print 'sue' if divisible by 8
// 3. print 'haleysue' if divisible by both

for (i = numArr[0]; i < numArr[numArr.length - 1]; i++){
    if (i % 8 ===0 && i % 4 === 0){
        console.log('haleysue', i)
    } else if (i % 8 === 0){
        console.log('sue', i)
    } else if (i % 4 === 0){
        console.log('haley', i)
    } 
}
//Problem 4 
//create a basic for-loop

for (let k = 0; k < 5; k++){
    console.log(k)
}

//Problem 5
//create a basic while loop

let l = 10 
while (l < 50){
    console.log('x is small', l);
    l++
}

//use the following array for problems 6-7
let NumberArr = [1,2,3,4,5,6,7,8,9,10]
//Problem 6
//create a var named 'itemOne' and set it equal to the first value of the NumberArr. 

itemOne = NumberArr[0]
console.log(itemOne)

//Problem 7
//remove the last item from NumberArr and store it in a var named 'lastItemremoved' 

let lastItemremoved = (NumberArr.pop())
console.log(NumberArr)
console.log(lastItemremoved)

//Problem 8
let siblingArr = ['Jordan', 'Kyle','Ari', 'Tyler']
//Loop through siblingArr and console.log every item 

for (let s = 0; s < siblingArr.length; s++){
    console.log(siblingArr[s])
}
//Problem 9 
// dynamically create a number array with the values of 5 - 25 in (divisible) steps of 5
let List = []
n = 5
while (List.length ===0 || List[List.length - 1] < 25){
    if (n % 5 ===0){
            List.push(n)
            console.log(List)
        } 
        n += 1 
    }
