import {
  getCars,
  getCarInfo,
  getReviews,
  getTestimonials,
} from './data-imports';

const testimonialsList = document.querySelector('.comments-list');
const reviewsList = document.querySelector('.reviews-list');

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

loadReviews();
