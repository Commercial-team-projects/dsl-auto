import { getCars, getReviews, getTestimonials } from './data-imports';

const reviewsList = document.querySelector('.reviews-list');

function loadReviews() {
  const reviews = getReviews();
  const markup = reviews.map(
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
  );
  reviewsList.innerHTML = markup.join('');
}

loadReviews();
