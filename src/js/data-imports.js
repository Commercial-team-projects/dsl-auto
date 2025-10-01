/**
 * A point on a two dimensional plane.
 * @typedef {Object} Car
 * @property {number} id - Car ID
 * @property {string} model - Car model name
 * @property {string} img - path to car previeww image from src
 * @property {Array<Object>} photos - Array of car photos
 * @property {number} year - Car 'publishing' year
 * @property {string} bodyType - Body Type of car (Позашляховик)
 * @property {string} color - Car color name
 * @property {string} manufacturer - manifacturer of car
 * @property {string} wheel - wheel side (Лівий)
 * @property {number} mileage - Car's milleage in km'
 * @property {string} drive - car drive (???)
 * @property {string} vehicleType - type of vehicle|fuel
 * @property {number} engine - car drive (???)
 * @property {number} power - powewr pf car in hourse power (к.с.)
 * @property {string} tx - tx(КПП) of car (Автомат)
 * @property {string} auction - auction presented the car
 * @property {number} rating - rating of ???
 * @property {string} auctionDate - date of auction
 * @property {string} location - car location
 * @property {string} status - car current status ('У наявності', 'Під замовлення')
 * @property {number} price - car price
 * @property {string} details - text description of car
 */

import cars from './data/cars.json' assert { type: 'json' };
import testimonials from './data/testimonials.json' assert { type: 'json' };
import reviews from './data/reviews.json' assert { type: 'json' };

const statuses = ['В наявності', 'Під замовлення'];

function classByCarStatus(carStatus) {
  switch (carStatus) {
    case 'В наявності':
      return 'in-stock';
    case 'Під замовлення':
      return 'to-order';
  }
}

/**
 * get cars
 * @param {Object} req - rearch request | filter - TODO
 * @param {number} page - page number (1 by def)
 * @param {number} per_page - cars per page (10 by def)
 * @returns {Array<Car>} - cars matched the request. (pagination)
 */
export function getCars(req = {}, page = 1, per_page = 10) {
  const carsFiltred = cars.filter(car => {
    if (
      req.status &&
      req.status !== 'all' &&
      classByCarStatus(car.status) !== req.status
    ) {
      return false;
    }
    return true;
  });
  return carsFiltred.slice((page - 1) * per_page, page * per_page);
}

/**
 * get information about car
 * @param {number} carId - car ID
 * @returns {(Car|undefined)} - car object if found, undefined if not
 */
export function getCarInfo(carId) {
  return cars.find(car => car.id === carId);
}

export function getTestimonials(car = '', page = 1, per_page = 4) {
  return testimonials.splice((page - 1) * per_page, page * per_page);
}

/**
 * Get reviews
 * @param {number} car - car ID
 * @param {number} page - page of collection
 * @param {number} per_page - reviews per page
 * @returns {(Array<Object>|undefined)} - reviews array, undefined if not
 */
export function getReviews(car = '', page = 1, per_page = 3) {
  return reviews.splice((page - 1) * per_page, page * per_page);
}

const carModels = [
  'Audi A3',
  'Audi A4',
  'Audi A5',
  'Audi A6',
  'Audi Q3',
  'Audi Q5',
  'Audi Q7',
  'Audi SQ5',
  'BMW 330xi',
  'BMW 540',
  'BMW i4',
  'BMW X5',
  'Cadillac Lyriq',
  'Chevrolet Equinox',
  'Dodge Renegade',
  'Ford Ecosport',
  'Ford Escape',
  'Ford Focus',
  'Ford Fusion',
  'Ford Fusion Hybrid',
  'Hyundai Starex',
  'Jaguar F-Pace',
  'Jeep Compass',
  'Kia Niro',
  'Kia Sorento',
  'Kia Sportage',
  'Land Rover Discovery',
  'Lincoln Corsair',
  'Lincoln MKC',
  'Lincoln MKZ',
  'Mazda 3',
  'Mazda 6',
  'Mazda CX-3',
  'Mazda CX-5',
  'Mazda CX-30',
  'Mazda CX-50',
  'Mercedes CLS 400D',
  'Nissan Murano',
  'Nissan Rogue',
  'Mitsubishi Outlander',
  'Porsche Taycan',
  'Tesla Model 3',
  'Tesla Model Y',
  'Tesla Model S',
  'Tesla S',
  'Volkswagen CC',
  'Volkswagen Tiguan',
  'Volvo V60',
  'Volvo S60',
  'Volvo XC60',
];
