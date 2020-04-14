//arguments(1)
    // function add(num1,num2){
    //     //check the keys of the array
    //     //console.log(arguments);
    //     console.log(...arguments);

    //     return num1+num2+arguments[2];

    // }

    // const result =  add(2,3,4,5);
    // console.log(result);

//arguments(2)
    function add(num1,num2){
        //array-like to real array
        console.log([...arguments]);
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            sum = element + sum;
            
        }
        return sum;
    }

    const result =  add(2,3,4,5);
    console.log(result);