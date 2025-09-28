import {
  getCars,
  getCarInfo,
  getReviews,
  getTestimonials,
} from './data-imports';

const carsList = document.querySelector('.popular-cars-list');
const testimonialsList = document.querySelector('.comments-list');
const reviewsList = document.querySelector('.reviews-list');

const carsListMoreBtn = document.querySelector('.popular-cars-more');
let TOTAL_CARS = 7;
let cars_per_page = 3;
let page = 1;

function classByCarStatus(carStatus) {
  switch (carStatus) {
    case 'В наявності':
      return 'in-stock';
    case 'Під замовлення':
      return 'to-order';
  }
}

function loadCars() {
  try {
    page = 1;
    carsListMoreBtn.style.display = 'block';
    const cars = getCars('', page, cars_per_page);
    carsList.innerHTML = cars
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
      .join('');
  } catch (error) {
    console.log(error);
  }
}

// ToDo: adopt to testimonials
function loadTestimonials() {
  try {
    const testimonials = getTestimonials();
    testimonialsList.innerHTML = testimonials
      .map(
        review => `<li class="review">
        <div class="review-image-container">
          <img
            class="review-image"
            src="${review.prev}"
            alt="${review.title}"
          />
        </div>
        <div class="review-desc">
          <h3 class="review-title">${review.title}</h3>
          <ul class="review-info-list">
            <li class="review-info">${review.views} просмотр</li>
            <li class="review-info">${review.ago}</li>
          </ul>
        </div>
      </li>`
      )
      .join('');
  } catch (error) {
    console.log(error);
  }
}

function loadReviews() {
  try {
    const reviews = getReviews();
    reviewsList.innerHTML = reviews
      .map(
        review => `<li class="review">
        <div class="review-image-container">
          <img
            class="review-image"
            src="${review.prev}"
            alt="${review.title}"
          />
        </div>
        <div class="review-desc">
          <h3 class="review-title">${review.title}</h3>
          <ul class="review-info-list">
            <li class="review-info">${review.views} просмотр</li>
            <li class="review-info">${review.ago}</li>
          </ul>
        </div>
      </li>`
      )
      .join('');
  } catch (error) {
    console.log(error);
  }
}

function loadMoreCars() {
  page++;

  if (page > TOTAL_CARS / cars_per_page) {
    carsListMoreBtn.style.display = 'none';
  }

  try {
    const cars = getCars('', page, 3);
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

carsListMoreBtn.addEventListener('click', event => {
  loadMoreCars();
  console.log(page);
});

loadReviews();
loadCars();
