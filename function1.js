// function calcuLateAge (years){
//     return 2022 - years
// }
// //console.log(calcuLateAge (1997));

// function aboutMe (name, years){
//     let age = calcuLateAge(years)
// console.log("Mеня зовут " + name + " мне " + age + " лет.")
// }
// aboutMe("Марина", 1997);


function calcuLateAge (years){
    return 2022 - years
}
//console.log(calcuLateAge (1997));

function aboutMe (name, years){
    let age = calcuLateAge(years)
    if (age > 0){
     console.log("Mеня зовут " + name + " мне " + age + " лет.")
    }else{
        console.log("хмм,значит вы из будущего?")
    }

}
aboutMe("Марина", 2025);

