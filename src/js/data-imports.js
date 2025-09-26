const cars = [
  {
    id: 1,
    model: 'BMW XM',
    img: '/img/main/popular/desktop/1x/bmw-xm.webp',
    photos: {
      desktop: [{
        preview: {
          x1: [
            '/img/cars/1/desktop/preview/1x/bmw-wm.webp',
            '/img/cars/1/desktop/preview/1x/bmw-wm-front.webp',
            '/img/cars/1/desktop/preview/1x/bmw-wm-salon.webp',
            '/img/cars/1/desktop/preview/1x/bmw-wm-salon2.webp',
            '/img/cars/1/desktop/preview/1x/bmw-wm-back.webp'
          ],
          x2: [
            '/img/cars/1/desktop/preview/2x/bmw-wm.webp',
            '/img/cars/1/desktop/preview/2x/bmw-wm-front.webp',
            '/img/cars/1/desktop/preview/2x/bmw-wm-salon.webp',
            '/img/cars/1/desktop/preview/2x/bmw-wm-salon2.webp',
            '/img/cars/1/desktop/preview/2x/bmw-wm-back.webp'
          ],
        },
        original: {
          x1: [
            '/img/cars/1/desktop/1x/bmw-wm.webp',
            '/img/cars/1/desktop/1x/bmw-wm-front.webp',
            '/img/cars/1/desktop/1x/bmw-wm-salon.webp',
            '/img/cars/1/desktop/1x/bmw-wm-salon2.webp',
            '/img/cars/1/desktop/1x/bmw-wm-back.webp'
          ],
          x2: [
            '/img/cars/1/desktop/2x/bmw-wm.webp',
            '/img/cars/1/desktop/2x/bmw-wm-front.webp',
            '/img/cars/1/desktop/2x/bmw-wm-salon.webp',
            '/img/cars/1/desktop/2x/bmw-wm-salon2.webp',
            '/img/cars/1/desktop/2x/bmw-wm-back.webp'
          ],
        },
      }],
      mobile: [{
        preview: {
          x1: [
            '/img/cars/1/mobile/preview/1x/bmw-wm.webp',
            '/img/cars/1/mobile/preview/1x/bmw-wm-front.webp',
            '/img/cars/1/mobile/preview/1x/bmw-wm-salon.webp',
            '/img/cars/1/mobile/preview/1x/bmw-wm-salon2.webp',
            '/img/cars/1/mobile/preview/1x/bmw-wm-back.webp'
          ],
          x2: [
            '/img/cars/1/mobile/preview/2x/bmw-wm.webp',
            '/img/cars/1/mobile/preview/2x/bmw-wm-front.webp',
            '/img/cars/1/mobile/preview/2x/bmw-wm-salon.webp',
            '/img/cars/1/mobile/preview/2x/bmw-wm-salon2.webp',
            '/img/cars/1/mobile/preview/2x/bmw-wm-back.webp'
          ],
        },
        original: {
          x1: [
            '/img/cars/1/mobile/1x/bmw-wm.webp',
            '/img/cars/1/mobile/1x/bmw-wm-front.webp',
            '/img/cars/1/mobile/1x/bmw-wm-salon.webp',
            '/img/cars/1/mobile/1x/bmw-wm-salon2.webp',
            '/img/cars/1/mobile/1x/bmw-wm-back.webp'
          ],
          x2: [
            '/img/cars/1/mobile/2x/bmw-wm.webp',
            '/img/cars/1/mobile/2x/bmw-wm-front.webp',
            '/img/cars/1/mobile/2x/bmw-wm-salon.webp',
            '/img/cars/1/mobile/2x/bmw-wm-salon2.webp',
            '/img/cars/1/mobile/2x/bmw-wm-back.webp'
          ],
        },
      }],
    },
    year: 2025,
    bodyType: 'Позашляховик', // tip kuzova
    color: 'Чорний',
    manufacturer: 'BMW',
    wheel: 'Лівий', //
    mileage: 40000,
    drive: '4WD', //Задний, Полный
    engine: 'Бензиновий',
    vehicleType: 4.5, // fuelType
    power: '475л.с.',
    tx: 'Автомат', // КПП
    auction: 'KCAA Fukuoka',
    rating: 4,
    auctionDate: '08.07.2025', // todo: fix date
    location: 'USA',
    status: 'Під замовлення',
    price: 1630000,
    details:
      'Внешний вид нового BMW XM 2025 действительно не дотягивает до полноразмерного кроссовера. Небольшой кузов, невысокая посадка и компактные формы. По внешнему виду дизайнеры попытались создать новый автомобиль, но при этом сохранив современные и узнаваемые черты компании Mazda.\nПереднюю часть кроссовера Mazda CX-3 2017 занимает хорошо узнаваемая решетка радиатора, с зауженной часть внизу. В зависимости от комплектации решетка с горизонтальными планками может быть черной или хромированной, но в любом варианте с хромированной окантовкой. Центр решетки радиатора занимает необычная эмблема компании, в нее инженеры вмонтировали переднюю камеру и несколько датчиков.\nПередняя оптика в зависимости от комплектации Mazda CX-3 2017 может быть на основе галогенок. В максимальной комплектации кроссовера установлена светодиодная адаптивная оптика. В любой с комплектаций оптика сделана таким образом, что внутри повторяет часть хромированной окантовки решетки радиатора, тем самым создавая впечатление, что в оптику вмонтировали часть решетки. Нижнюю часть бампера украшает дополнительная решетка радиатора. Боковую часть бампера в зависимости от комплектации будут установлены противотуманки или комплект светодиодных противотуманок со светодиодными дневными ходовыми огнями.',
  },

];

const testimonials = [
  {
    id: 1,
    author: 'Генадий Сергеевич',
    rate: 5,
    car: 'Toyota Allion',
    url: '',
  },
  {
    id: 2,
    author: 'Ольга Архипова',
    rate: 4,
    car: 'Toyota Allion',
    url: '',
  },
  {
    id: 3,
    author: 'Николай Евгеньевич',
    rate: 5,
    car: 'Toyota Allion',
    url: '',
  },
  {
    id: 4,
    author: 'Роман Юрьевич',
    rate: 5,
    car: 'Toyota Allion',
    url: '',
  },
];

const reviews = [
  {
    id: 1,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Космический Shuttle | HONDA FIT SHUTTLE 2013',
    views: 391,
    ago: '3 тижні тому',
  },
  {
    id: 2,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Компактный минивен I Toyota Siena 2017 г.',
    views: 391,
    ago: '3 недели назад',
  },
  {
    id: 3,
    url: '',
    prev: '/img/main/reviews/desktop/x1/Rectangle%208.png',
    title: 'Спецтехника по-крупному | KATO KB1500R',
    views: 391,
    ago: '3 недели назад',
  },
];

const statuses = ['У наявності', 'Під замовлення'];

let PER_PAGE = 3;

export function getCars(req = '', page = 1, per_page = PER_PAGE) {
  return autos;
}

export function getTestimonials(car = '') {
  return testimonials;
}

export function getReviews(car = '') {
  return reviews;
}
