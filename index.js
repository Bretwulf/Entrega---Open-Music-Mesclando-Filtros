import { createMenuButtons,filterActive,globalState,globalRange } from "/scripts/filtermenu.js";
import { categories,products } from "/productsData.js";
import { renderProducts } from "/scripts/renderalbums.js";

console.log(createMenuButtons)
console.log(categories)

const menu = document.getElementById("filter-menu")

createMenuButtons(categories, menu, filterActive)

export const albumList = document.getElementById("album-list")

renderProducts(products, albumList)