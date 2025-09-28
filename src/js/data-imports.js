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
 * @property {string} power - powewr pf car in hourse power (475л.с.)
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

// const cars = [
//   {
//     id: 1,
//     model: 'BMW XM',
//     img: '/img/main/popular/desktop/1x/bmw-xm.webp',
//     photos: {
//       desktop: [
//         {
//           preview: {
//             x1: [
//               '/img/cars/1/desktop/preview/1x/bmw-wm.webp',
//               '/img/cars/1/desktop/preview/1x/bmw-wm-front.webp',
//               '/img/cars/1/desktop/preview/1x/bmw-wm-salon.webp',
//               '/img/cars/1/desktop/preview/1x/bmw-wm-salon2.webp',
//               '/img/cars/1/desktop/preview/1x/bmw-wm-back.webp',
//             ],
//             x2: [
//               '/img/cars/1/desktop/preview/2x/bmw-wm.webp',
//               '/img/cars/1/desktop/preview/2x/bmw-wm-front.webp',
//               '/img/cars/1/desktop/preview/2x/bmw-wm-salon.webp',
//               '/img/cars/1/desktop/preview/2x/bmw-wm-salon2.webp',
//               '/img/cars/1/desktop/preview/2x/bmw-wm-back.webp',
//             ],
//           },
//           original: {
//             x1: [
//               '/img/cars/1/desktop/1x/bmw-wm.webp',
//               '/img/cars/1/desktop/1x/bmw-wm-front.webp',
//               '/img/cars/1/desktop/1x/bmw-wm-salon.webp',
//               '/img/cars/1/desktop/1x/bmw-wm-salon2.webp',
//               '/img/cars/1/desktop/1x/bmw-wm-back.webp',
//             ],
//             x2: [
//               '/img/cars/1/desktop/2x/bmw-wm.webp',
//               '/img/cars/1/desktop/2x/bmw-wm-front.webp',
//               '/img/cars/1/desktop/2x/bmw-wm-salon.webp',
//               '/img/cars/1/desktop/2x/bmw-wm-salon2.webp',
//               '/img/cars/1/desktop/2x/bmw-wm-back.webp',
//             ],
//           },
//         },
//       ],
//       mobile: [
//         {
//           preview: {
//             x1: [
//               '/img/cars/1/mobile/preview/1x/bmw-wm.webp',
//               '/img/cars/1/mobile/preview/1x/bmw-wm-front.webp',
//               '/img/cars/1/mobile/preview/1x/bmw-wm-salon.webp',
//               '/img/cars/1/mobile/preview/1x/bmw-wm-salon2.webp',
//               '/img/cars/1/mobile/preview/1x/bmw-wm-back.webp',
//             ],
//             x2: [
//               '/img/cars/1/mobile/preview/2x/bmw-wm.webp',
//               '/img/cars/1/mobile/preview/2x/bmw-wm-front.webp',
//               '/img/cars/1/mobile/preview/2x/bmw-wm-salon.webp',
//               '/img/cars/1/mobile/preview/2x/bmw-wm-salon2.webp',
//               '/img/cars/1/mobile/preview/2x/bmw-wm-back.webp',
//             ],
//           },
//           original: {
//             x1: [
//               '/img/cars/1/mobile/1x/bmw-wm.webp',
//               '/img/cars/1/mobile/1x/bmw-wm-front.webp',
//               '/img/cars/1/mobile/1x/bmw-wm-salon.webp',
//               '/img/cars/1/mobile/1x/bmw-wm-salon2.webp',
//               '/img/cars/1/mobile/1x/bmw-wm-back.webp',
//             ],
//             x2: [
//               '/img/cars/1/mobile/2x/bmw-wm.webp',
//               '/img/cars/1/mobile/2x/bmw-wm-front.webp',
//               '/img/cars/1/mobile/2x/bmw-wm-salon.webp',
//               '/img/cars/1/mobile/2x/bmw-wm-salon2.webp',
//               '/img/cars/1/mobile/2x/bmw-wm-back.webp',
//             ],
//           },
//         },
//       ],
//     },
//     year: 2025,
//     bodyType: 'Позашляховик', // tip kuzova
//     color: 'Чорний',
//     manufacturer: 'BMW',
//     wheel: 'Лівий', //
//     mileage: 40000,
//     drive: '4WD', //Задний, Полный
//     vehicleType: 'Бензиновий',
//     engine: 4.5,
//     power: '475л.с.',
//     tx: 'Автомат',
//     auction: 'KCAA Fukuoka',
//     rating: 4,
//     auctionDate: '08.07.2025', // todo: fix date
//     location: 'USA',
//     status: 'Під замовлення',
//     price: 1630000,
//     details:
//       'Внешний вид нового BMW XM 2025 действительно не дотягивает до полноразмерного кроссовера. Небольшой кузов, невысокая посадка и компактные формы. По внешнему виду дизайнеры попытались создать новый автомобиль, но при этом сохранив современные и узнаваемые черты компании Mazda.\nПереднюю часть кроссовера Mazda CX-3 2017 занимает хорошо узнаваемая решетка радиатора, с зауженной часть внизу. В зависимости от комплектации решетка с горизонтальными планками может быть черной или хромированной, но в любом варианте с хромированной окантовкой. Центр решетки радиатора занимает необычная эмблема компании, в нее инженеры вмонтировали переднюю камеру и несколько датчиков.\nПередняя оптика в зависимости от комплектации Mazda CX-3 2017 может быть на основе галогенок. В максимальной комплектации кроссовера установлена светодиодная адаптивная оптика. В любой с комплектаций оптика сделана таким образом, что внутри повторяет часть хромированной окантовки решетки радиатора, тем самым создавая впечатление, что в оптику вмонтировали часть решетки. Нижнюю часть бампера украшает дополнительная решетка радиатора. Боковую часть бампера в зависимости от комплектации будут установлены противотуманки или комплект светодиодных противотуманок со светодиодными дневными ходовыми огнями.',
//   },
// ];

// const testimonials = [
//   {
//     id: 1,
//     author: 'Генадий Сергеевич',
//     rate: 5,
//     car: 'Toyota Allion',
//     url: '',
//   },
//   {
//     id: 2,
//     author: 'Ольга Архипова',
//     rate: 4,
//     car: 'Toyota Allion',
//     url: '',
//   },
//   {
//     id: 3,
//     author: 'Николай Евгеньевич',
//     rate: 5,
//     car: 'Toyota Allion',
//     url: '',
//   },
//   {
//     id: 4,
//     author: 'Роман Юрьевич',
//     rate: 5,
//     car: 'Toyota Allion',
//     url: '',
//   },
// ];

// const reviews = [
//   {
//     id: 1,
//     url: '',
//     prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
//     title: 'Космический Shuttle | HONDA FIT SHUTTLE 2013',
//     views: 391,
//     ago: '3 недели назад',
//   },
//   {
//     id: 2,
//     url: '',
//     prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
//     title: 'Компактный минивен I Toyota Siena 2017 г.',
//     views: 391,
//     ago: '3 недели назад',
//     carId: 1,
//   },
//   {
//     id: 3,
//     url: '',
//     prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
//     title: 'Спецтехника по-крупному | KATO KB1500R',
//     views: 391,
//     ago: '3 недели назад',
//     carId: 1,
//   },
// ];

const statuses = ['У наявності', 'Під замовлення'];

/**
 * get cars
 * @param {string} req - rearch request - TODO
 * @param {number} page - page number (1 by def)
 * @param {number} per_page - cars per page (10 by def)
 * @returns {Array<Car>} - cars matched the request. (pagination)
 */
export function getCars(req = '', page = 1, per_page = 10) {
  return cars.slice((page - 1) * per_page, page * per_page);
}

/**
 * get information about car
 * @param {number} carId - car ID
 * @returns {(Car|undefined)} - car object if found, undefined if not
 */
export function getCarInfo(carId) {
  return cars.find(car => car.id === carId);
}

export function getTestimonials(car = '', page = 1, per_page = 5) {
  return reviews.splice((page - 1) * per_page, page * per_page);
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
