import { globalState, globalRange } from "../../scripts/filtermenu.js";
import { products, categories } from "../pages/home/productsData.js";

export function renderProducts(array, node) {
  let renderArray = []
  if (globalState === 0) {
    renderArray = array.filter(element => element.price <= globalRange)
    renderArray.forEach(element => {
      node.insertAdjacentHTML("beforeend",
        `<li class="album-element" data-id="${element.id}" id="album${element.id}">
        <img class="album-img" src="${element.img}">
        <div class="album-data">
          <div class="band-year">
            <small>${element.band}</small>
            <small>${element.year}</small>
          </div>
          <h3 class="text1-normal">${element.title}</h3>
          <div class="album-buy">
            <h4 class="text1-normal">
              R$ ${element.price}
            </h4>
            <button class="buy-button font-button">
              comprar
            </button>
          </div>
        </div>
      </li>`)
    });
  }
  else {
    renderArray = array.filter(element => element.category === globalState).filter(element => element.price <= globalRange)
    renderArray.forEach(element => {
      node.insertAdjacentHTML("beforeend",
        `<li class="album-element" data-id="${element.id}" id="album${element.id}">
        <img class="album-img" src="${element.img}">
        <div class="album-data">
          <div class="band-year">
            <small>${element.band}</small>
            <small>${element.year}</small>
          </div>
          <h3>${element.title}</h3>
          <div class="album-buy">
            <h4>
              R$ ${element.price}
            </h4>
            <button class="buy-button font-button">
              comprar
            </button>
          </div>
        </div>
      </li>`)
    });

  }
}