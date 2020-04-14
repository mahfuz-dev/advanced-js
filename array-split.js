//Slice: don't change the original array
    const nums = [10,11,12,13,14,15,16,17];
    const part = nums.slice(3,6); //array index-'3'(13) to before '6'(15).
    console.log(part);

    console.log(nums);//main array remains the same
    
//Splice:change the original array
    const nums2 = [21,22,23,24,25,26,27];

    //array start index(2) then how many(3).Then add/insert elements
    const remove = nums2.splice(2,3,40,41);
    console.log(remove);

    //main array doesn't have 'splice' number.Also have added new elements
    console.log(nums2);

//Array join:separate
    //example-1
    const together = nums2.join(",");//separator
    console.log(together);

    //example-2
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    const allFruits = fruits.join(" and ");
    console.log(allFruits);


    