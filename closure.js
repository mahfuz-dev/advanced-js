//closure:return a function
    function stopWatch(){
        let count = 0;
        return function(){
            count++;
            return count;
        }
    }

    const clock = stopWatch();
    //the 'stopWatch()' function returns the inside function
    console.log(clock);

    //Now,call the anonymous function that has return within the 'stopWatch()'
    let clock1 = stopWatch();
    console.log(clock1()); //1
    console.log(clock1()); //2
    console.log(clock1()); //3
    console.log(clock1()); //4

    //Call it with another variable and it starts from initial
    let clock2 = stopWatch();
    console.log(clock2()); //1
    console.log(clock2()); //2
    console.log(clock2()); //3

    //call the last variable 'clock1',it starts counting from it's last position
    console.log(clock1()); //5
    console.log(clock1()); //6
