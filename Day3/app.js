import {Product} from "./product";
function getProduct(){
    let p = new Product();
    p.Id = "1";
    p.Price = 100;
    p.Title = "Cricket";
    p.inStock = true;
    return p;
}
let p = getProduct();
console.log(p);