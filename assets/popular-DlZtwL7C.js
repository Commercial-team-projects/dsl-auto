import{c as $}from"./db-MuaPowCb.js";const h=document.querySelector(".popular-cars-list");function g(c){const{src:s,brand:a,model:r,specifications:i,year:l,mileage:t,custom:o,price:e,stock:p,rating:f}=c,{drive_type:n,transmission:u,engine:m,country_of_origin:d}=i;return`<li class="popular-cars-item">
          <div class="popular-cars-box">
            <div class="popular-cars-main">
              <picture class="popular-cars-image">
                <source
                  media="(min-width: 1280px)"
                  srcset="
                    ${s}
                  "
                />
                <source
                  media="(max-width: 1279px)"
                  srcset="
                    ${s}
                  "
                />
                <img
                  class="popular-cars-photo"
                  src="${s}"
                  alt="${a} ${r}"
                />
              </picture>
              <div class="popular-cars-alone">
                <h3 class="popular-cars-title">
                  <a class="popular-cars-link" href="">${a} ${r}</a>
                </h3>
                <ul class="popular-cars-tech">
                  <li class="cars-tech-property">
                    <span>Об'єм двигуна</span> ${m.volume_l} л.
                  </li>
                  <li class="cars-tech-property"><span>Рік</span> ${l}</li>
                  <li class="cars-tech-property">
                    <span>Пробіг</span> ${t} км.
                  </li>
                  <li class="cars-tech-property">${o}</li>
                </ul>
              </div>
            </div>
            <ul class="popular-cars-transmission">
              <li class="cars-transmission-property">
                <span>Привід</span> ${n}
              </li>
              <li class="cars-transmission-property">
                <span>КПП</span> ${u}
              </li>
            </ul>
          </div>
          <div class="popular-cars-shop">
            <p class="cars-shop-city">Країна: ${d}</p>
            <p class="cars-shop-price">${e.toLocaleString()} &dollar;</p>
            <p class="cars-shop-status ${p==="В наявності"?"in-stock":"to-order"}">${p}</p>
          </div>
        </li>`}function y(c){return c.toSorted((a,r)=>r.rating-a.rating).slice(0,3).map(g).join("")}const v=y($);h.innerHTML=v;
//# sourceMappingURL=popular-DlZtwL7C.js.map
