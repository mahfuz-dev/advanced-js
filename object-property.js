//Array with objects
    const students = [
        {id: 3, name:'kuddus'},
        {id:12, name:'Alim Uddin'},
        {id:22, name:'Lahin Uddin'},
        {id:18, name:'Syntia Ahmed'}
    ];

//Map:array object
    const names = students.map(nam => nam.name);
    console.log(names);

    const id = students.map(roll => roll.id);
    console.log(id);

//Filter:Condition
    bigger = students.filter(roll => roll.id>12);
    console.log(bigger);

//Find:take only first element
firstBigger = students.find(roll => roll.id>12);
console.log(firstBigger);
