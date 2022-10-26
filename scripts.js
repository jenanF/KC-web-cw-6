
alert('welcome to my website which is gonna calculate your grades')
let grade = prompt('enter your grade')
console.log(grade)

if(grade>=90 && grade<=100){

    console.log('your grade is A')
}
else if(grade>=80 && grade<=89){

    console.log('your grade is B')
}
else if(grade>=70 && grade<=79){

    console.log('your grade is C')
}
else if(grade>=60 && grade<=69){

    console.log('your grade is D')
}
else if(grade>=50 && grade<=59){

    console.log('your grade is E')
}
else{
    console.log('%c you failed ', ' color: red');
    
}

//javascript is not java