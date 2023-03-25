const add = (first , second ) =>{
    return first + second;
}

const multiply = (first , second) =>{
    return first * second;
}



const getTotalPrice = product =>{
    const reducer = (previous, current) =>  previous + current.price;
    const total = product.reduce(reducer , 0);
    return total;

}


export {
    add, 
    multiply ,
    getTotalPrice as getTotal
    };