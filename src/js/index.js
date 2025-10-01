import '../main';
import { getCars, getReviews, getTestimonials } from './data-imports';
import { classByCarStatus } from './data-procesing';

const carsList = document.querySelector('.popular-cars-list');
const testimonialsList = document.querySelector('.comments-list');
const reviewsList = document.querySelector('.reviews-list');

const carsListMoreBtn = document.querySelector('.popular-cars-more');
const statusOptionsContainer = document.querySelector('.popular-status-box');

let filter = {};
let cars_total = 7;
let cars_per_page = 3;
let cars_page = 1;

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

function loadTestimonials() {
  try {
    const testimonials = getTestimonials();
    testimonialsList.innerHTML = '';
    testimonialsList.insertAdjacentHTML(
      'beforeend',
      testimonials
        .map(
          testimonial => `<li class="comments-list-item">
        <div class="comments-video-wrapper">
          <iframe width="202" height="134" src="${
            testimonial.url
          }" frameborder="0" title="Відео-відгук Тимура" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
          </iframe>
          <ul class="comments-stars-list">
            ${[1, 2, 3, 4, 5]
              .map(
                star => `<li class="comments-stars-item">
              <svg class="comments-star-icon" width="16" height="16">
                <use href="/img/main/sprite.svg#icon-star-fill"></use>
              </svg>
            </li>`
              )
              .join('')}
          </ul>
          <h3 class="comments-person-name">${testimonial.author}</h3>
          <p class="comments-car-type">${testimonial.car}</p>
        </div>
      </li>`
        )
        .join('')
    );
    // .map(
    //   review => `<li class="review">
    //   <div class="review-image-container">
    //     <img
    //       class="review-image"
    //       src="${review.prev}"
    //       alt="${review.title}"
    //     />
    //   </div>
    //   <div class="review-desc">
    //     <h3 class="review-title">${review.title}</h3>
    //     <ul class="review-info-list">
    //       <li class="review-info">${review.views} просмотр</li>
    //       <li class="review-info">${review.ago}</li>
    //     </ul>
    //   </div>
    // </li>`
    // )
    // .join('');
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

function loadFirstCars() {
  cars_page = 1;
  carsList.innerHTML = '';

  loadCars();
}

function loadMoreCars() {
  cars_page++;

  if (cars_page > cars_total / cars_per_page) {
  }

  loadCars();
}

carsListMoreBtn.addEventListener('click', event => {
  loadMoreCars();
});

statusOptionsContainer.addEventListener('click', event => {
  if (!event.target.name === 'INPUT') {
    return;
  }

  switch (event.target.value) {
    case 'all':
      filter.status = 'all';
      break;
    case 'access': // in-stock
      filter.status = 'in-stock';
      break;
    case 'order': //to-order
      filter.status = 'to-order';
      break;
  }
  cars_page = 1;
  loadFirstCars(filter, cars_page, cars_per_page);
});

loadFirstCars();
// loadTestimonials();
loadReviews();
