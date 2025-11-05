import cars from './db.json' with { type: 'json' };

const listCars = document.querySelector('.popular-cars-list');
function createCarTemplate(car) {
  const { src, brand, model, specifications, year, mileage, custom, price, stock, rating } = car;
  const { drive_type, transmission, engine, country_of_origin } = specifications;
  return `<li class="popular-cars-item">
          <div class="popular-cars-box">
            <div class="popular-cars-main">
              <picture class="popular-cars-image">
                <source
                  media="(min-width: 1280px)"
                  srcset="
                    ${src}
                  "
                />
                <source
                  media="(max-width: 1279px)"
                  srcset="
                    ${src}
                  "
                />
                <img
                  class="popular-cars-photo"
                  src="${src}"
                  alt="${brand} ${model}"
                />
              </picture>
              <div class="popular-cars-alone">
                <h3 class="popular-cars-title">
                  <a class="popular-cars-link" href="">${brand} ${model}</a>
                </h3>
                <ul class="popular-cars-tech">
                  <li class="cars-tech-property">
                    <span>Об'єм двигуна</span> ${engine.volume_l} л.
                  </li>
                  <li class="cars-tech-property"><span>Рік</span> ${year}</li>
                  <li class="cars-tech-property">
                    <span>Пробіг</span> ${mileage} км.
                  </li>
                  <li class="cars-tech-property">${custom}</li>
                </ul>
              </div>
            </div>
            <ul class="popular-cars-transmission">
              <li class="cars-transmission-property">
                <span>Привід</span> ${drive_type}
              </li>
              <li class="cars-transmission-property">
                <span>КПП</span> ${transmission}
              </li>
            </ul>
          </div>
          <div class="popular-cars-shop">
            <p class="cars-shop-city">Країна: ${country_of_origin}</p>
            <p class="cars-shop-price">${price.toLocaleString()} &dollar;</p>
            <p class="cars-shop-status ${
              stock === 'В наявності' ? 'in-stock' : 'to-order'
            }">${stock}</p>
          </div>
        </li>`;
}
function createCarsTemplate(cars) {
  return cars.map(createCarTemplate).join('');
}
const markup = createCarsTemplate(cars);
listCars.innerHTML = markup;
