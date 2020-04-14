//array-
const numbers = [3, 4, 5, 6, 7, 8];

// //using loop:find square number     
//     const output = [];
    
//     for (let i = 0;  i< numbers.length; i++) {
//         const element = numbers[i];
//         const result = element * element;
//         output.push(result); 
//     }
//     console.log(output);


// //Using Map:show element
//     numbers.map(function(element){
//         console.log(element);
//     });


// //Using Map:show element,index of array,full array
//     numbers.map(function(element,index,arr){
//         console.log(element,index,arr);
//     });


// //Using Map:square of the element of a array
//     const result = numbers.map(function(element){
//         return element * element;
//     });    
//     console.log(result);


// //Using Map:Find square with Array function
//     const result = numbers.map(x => x * x);    
//     console.log(result);


// //Filter:checks condition(1)
//     const bigger = numbers.filter(x => x > 5);    
//     console.log(bigger);

// //Filter:checks condition(2)
//     const smaller = numbers.filter(x => x < 5);    
//     console.log(smaller);


//Find:it only takes first single value
    const isThere = numbers.find(x => x > 5);    
    console.log(isThere);

