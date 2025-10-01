import '../main';
import { getCars } from './data-imports';
import { classByCarStatus } from './data-procesing';

const carsList = document.querySelector('.popular-cars-list');
const statusOptionsContainer = document.querySelector('.popular-status-box');
const pagesList = document.querySelector('.pagination-list');

let filter = {};
let cars_total = 7;
let cars_per_page = 3;
let cars_page = 1;

function getPages(total, per_page) {
  return Math.ceil(total / per_page);
}

function loadFirstCars() {
  cars_page = 1;
  carsList.innerHTML = '';

  loadCars(carsList);
}

function loadCars() {
  try {
    const cars = getCars(filter, cars_page, cars_per_page);
    carsList.insertAdjacentHTML(
      'beforeend',
      cars
        .map(
          car => `<li class="popular-cars-item">
          <div class="popular-cars-box">
            <div class="popular-cars-main">
              <picture class="popular-cars-image">
                <source media="(min-width: 1280px)" srcset="${car.img} 1x, ${
            car.img
          } 2x">
                <source media="(max-width: 1279px)" srcset="${car.img} 1x, ${
            car.img
          } 2x">
                <img class="popular-cars-photo" src="${car.img}" alt="${
            car.model
          }">
              </picture>
              <div class="popular-cars-alone">
                <h3 class="popular-cars-title">
                  <a class="popular-cars-link" href="">${car.model}</a>
                </h3>
                <ul class="popular-cars-tech">
                  <li class="cars-tech-property">
                    <span>Об'єм двигуна</span> ${car.power} к.с.
                  </li>
                  <li class="cars-tech-property"><span>Рік</span> ${
                    car.year
                  } р.</li>
                  <li class="cars-tech-property">
                    <span>Пробіг</span> ${car.mileage} км
                  </li>
                  <li class="cars-tech-property">Під повне мито</li>
                </ul>
              </div>
            </div>
            <ul class="popular-cars-transmission">
              <li class="cars-transmission-property">
                <span>Привід</span> ${car.drive}
              </li>
              <li class="cars-transmission-property">
                <span>КПП</span> ${car.tx}
              </li>
            </ul>
          </div>
          <div class="popular-cars-shop">
            <p class="cars-shop-city">Вартість у Києві</p>
            <p class="cars-shop-price">${car.price} ₴</p>
            <p class="cars-shop-status ${classByCarStatus(car.status)}">${
            car.status
          }</p>
          </div>
        </li>`
        )
        .join('')
    );
  } catch (error) {
    console.log(error);
  }
}

function loadPages(pages = getPages(cars_total, cars_per_page)) {
  // is-current
  pagesList.innerHTML = Array.from({ length: pages }, (_, i) => i + 1)
    .map(
      page => `<li class="pagination-item">
          <a class="pagination-link" href="">${page}</a>
        </li>`
    )
    .join('');
  pagesList.children[0].children[0].classList.add('is-current');
}

statusOptionsContainer.addEventListener('click', event => {
  if (!event.target.name === 'INPUT') {
    return;
  }
  let pagesOnStatus = 3;

  switch (event.target.value) {
    case 'all':
      filter.status = 'all';
      pagesOnStatus = 3;
      break;
    case 'access': // in-stock
      filter.status = 'in-stock';
      pagesOnStatus = 2;
      break;
    case 'order': //to-order
      filter.status = 'to-order';
      pagesOnStatus = 1;
      break;
  }
  loadPages(pagesOnStatus);
  cars_page = 1;
  loadFirstCars(filter, cars_page, cars_per_page);
});

pagesList.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.name === 'A' && event.target.text) {
    return;
  }

  for (const pageElement of pagesList.children) {
    pageElement.children[0].classList.remove('is-current');
  }
  event.target.classList.add('is-current');
  carsList.innerHTML = '';
  cars_page = Number(event.target.text);
  loadCars(carsList);
});

loadPages();
