//Break
    const nums = [1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>3){
            break;
        }
        console.log(nums[i]);
    }

//Continue
    const num2 = [1,-2,3,4,-5,6,7,-8,-9,10];
    for (let i = 0; i < num2.length; i++) {
        if(num2[i]<0){
            //skips the negative number
            continue;
        }
        console.log(num2[i]);
    }