// kata 1

function add(x , y) {
    return x + y
}
console.log("kata1")
console.log (add(2, 4))
console.log (add(5, 9))

//Kata 2

function multiply(x , y){
    let total = x
    for (let i=1;i<y;i+=1){
        total=add(total,x)
    }

    return total
}
console.log("Kata2")
console.log(multiply(6,4))

//kata 3

function power(x,y){
    let total = x
    for (let i=1;i<y;i+=1){
    total=multiply(total,x)
    }
    return total
}
console.log("Kata3")
console.log(power(2,8))
console.log(power(3,4))

//kata 4

function factorial(y){
    let total = 1
    for (let i=1;i<y+1;i+=1){
        total =multiply(total, i)
    }
    return total
}
console.log("Kata4")
console.log(factorial(5))

//kata bonus


