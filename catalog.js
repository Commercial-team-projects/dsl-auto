import"./assets/main-vfsnpgIP.js";import{c as $}from"./assets/db-MuaPowCb.js";const h=document.querySelector(".popular-cars-list");function y(s){const{src:a,brand:r,model:c,specifications:l,year:i,mileage:o,custom:t,price:e,stock:p,rating:f}=s,{drive_type:n,transmission:u,engine:m,country_of_origin:d}=l;return`<li class="popular-cars-item">
          <div class="popular-cars-box">
            <div class="popular-cars-main">
              <picture class="popular-cars-image">
                <source
                  media="(min-width: 1280px)"
                  srcset="
                    ${a}
                  "
                />
                <source
                  media="(max-width: 1279px)"
                  srcset="
                    ${a}
                  "
                />
                <img
                  class="popular-cars-photo"
                  src="${a}"
                  alt="${r} ${c}"
                />
              </picture>
              <div class="popular-cars-alone">
                <h3 class="popular-cars-title">
                  <a class="popular-cars-link" href="">${r} ${c}</a>
                </h3>
                <ul class="popular-cars-tech">
                  <li class="cars-tech-property">
                    <span>Об'єм двигуна</span> ${m.volume_l} л.
                  </li>
                  <li class="cars-tech-property"><span>Рік</span> ${i}</li>
                  <li class="cars-tech-property">
                    <span>Пробіг</span> ${o} км.
                  </li>
                  <li class="cars-tech-property">${t}</li>
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
        </li>`}function v(s){return s.map(y).join("")}const g=v($);h.innerHTML=g;
//# sourceMappingURL=catalog.js.map
