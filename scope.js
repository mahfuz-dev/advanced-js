// Local scope
    function sum(first,second){
        let result = first + second;
        return result;
    }
    //can't access the local 'result from outside
    // console.log(result);

    const output = sum(6,5);
    console.log(output);

//Global scope
    let bonus =20;
    function add(first,second){
        console.log(bonus);
        let result = first + second+ bonus;
        return result;
    }

    console.log(bonus);

    const output1 = add(6,5);
    console.log(output1);