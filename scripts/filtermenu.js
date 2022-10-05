import { renderProducts } from "./renderalbums.js";
import { products } from "../productsData.js";
import {albumList} from "../index.js"
export let globalState = 0;
export let globalRange = document.getElementById("myRange").value;
/* ----------------------------- slider de range ---------------------------- */
document.getElementById("show-range").innerText = `até ${document.getElementById("myRange").value}`
document.getElementById("myRange").oninput = ()=>{
    globalRange = document.getElementById("myRange").value;
    document.getElementById("show-range").innerText = `até ${globalRange}`
    document.getElementById("album-list").innerHTML=""
    renderProducts(products, albumList)
}
/* -------------------------------------------------------------------------- */
export function createMenuButtons(arr, menu,callback){
    arr.forEach((element,index,array)=> {
        menu.insertAdjacentHTML("beforeend",
        `<button type="button" id="filter${array.indexOf(element)}" class="filter-button font-button" data-id="${array.indexOf(element)}">${element}</button>`)
        
        document.getElementById(`filter${index}`).addEventListener("click",(event)=>{
            filterActive(element,index,array)
        })
    });
}

export function filterActive(element, index,array){
    const previousState = globalState
    globalState = index;
    
    document.getElementById(`filter${previousState}`).classList.remove("filter-button-toggled")
    document.getElementById(`filter${globalState}`).classList.add("filter-button-toggled")
    document.getElementById("album-list").innerHTML=""
    renderProducts(products, albumList)

}

