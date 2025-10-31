const reviewsData = [
  {
    id: 1,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Космический Shuttle | HONDA FIT SHUTTLE 2013',
    views: 391,
    ago: '3 недели назад',
  },
  {
    id: 2,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Компактный минивен I Toyota Siena 2017 г.',
    views: 391,
    ago: '3 недели назад',
    carId: 1,
  },
  {
    id: 3,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Спецтехника по-крупному | KATO KB1500R',
    views: 391,
    ago: '3 недели назад',
    carId: 1,
  },
  {
    id: 4,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'dddКосмический Shuttle | HONDA FIT SHUTTLE 2013',
    views: 391,
    ago: '3 недели назад',
  },
  {
    id: 5,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'aaaКомпактный минивен I Toyota Siena 2017 г.',
    views: 391,
    ago: '3 недели назад',
    carId: 1,
  },
  {
    id: 6,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'ssssСпецтехника по-крупному | KATO KB1500R',
    views: 391,
    ago: '3 недели назад',
    carId: 1,
  },
];

const reviewsList = document.querySelector('.reviews-list');
const reviewsMoreBtn = document.querySelector('.reviews .more-btn');
let PAGE = 1;
let PER_PAGE = 3;
let TOTAL = reviewsData.length;

function getReviews(page = 1, per_page = 3) {
  return reviewsData.slice((page - 1) * per_page, page * per_page);
}

function onMoreBtnClick(event) {
  try {
    PAGE++;
    const reviews = getReviews(PAGE);
    reviewsList.insertAdjacentHTML('beforeend', reviewsMarkup(reviews));

    if (PAGE * PER_PAGE >= TOTAL) {
      reviewsMoreBtn.style.display = 'none';
      reviewsMoreBtn.removeEventListener('click', onMoreBtnClick);
    }
  } catch (error) {
    console.log(error);
  }
}

export function loadReviews() {
  try {
    const reviews = getReviews(PAGE);
    reviewsList.innerHTML = reviewsMarkup(reviews);
    reviewsMoreBtn.addEventListener('click', onMoreBtnClick);
  } catch (error) {
    console.log(error);
  }
}

function reviewsMarkup(reviews) {
  return reviews
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
}
