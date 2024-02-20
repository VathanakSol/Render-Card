"use strict";
import { cardComponent } from "../component/cardComponent.js";
import { products } from "../data/products.js";
// let renderArea = document.querySelector("#render-area");
// console.log(products);
// renderArea.innerHTML = cardComponent

// products.map((product) => {
//     console.log(product)
// })

const renderArea = document.querySelector("#render-area");

products.map((product) =>{
    renderArea.innerHTML += cardComponent(product);
})