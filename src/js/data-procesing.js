import {
  getCars,
  getCarInfo,
  getReviews,
  getTestimonials,
} from './data-imports';

export function classByCarStatus(carStatus) {
  switch (carStatus) {
    case 'В наявності':
      return 'in-stock';
    case 'Під замовлення':
      return 'to-order';
  }
}
