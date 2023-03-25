// use local storage to manage cart data 
const addToDb = id =>{
    let shopingCart;
    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shopingCart = JSON.parse(storedCart);
    }
    else{
       shopingCart ={} 
    }
    // add quantity
    const quantity  = shopingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
        // localStorage.setItem( id ,newQuantity);
    }
    else{
        shopingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shopingCart))
}


const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }

}






export {addToDb , removeFromDb}
