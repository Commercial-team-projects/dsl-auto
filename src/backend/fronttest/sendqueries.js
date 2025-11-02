// getImagesByQuery(query).
// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит
// і повертати значення властивості data з отриманої відповіді.
// import axios from 'axios';

const proxyUrl = 'https://corsproxy.io/?url=';

//const url = 'http://localhost:4000/api/usersdb';



const btnElem = document.querySelector('#sendReqBtn');

const selectedMethodElem = document.querySelector('[name="selectMethod"]');

const dataToSend = {
  id: 5,
  name: 'John Doe',
  age: 24,
  email: 'john.doe4@example.com',
  password: '12344'
};

const optionsPost = {
  method: 'POST',
  body: JSON.stringify(dataToSend),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

selectedMethodElem.addEventListener('change', e => {
  const selectedValue = event.target.value;
  console.log('Выбрано значение:', selectedValue);
  // console.log(selectElem.options[selectElem.selectedIndex].text)
});



btnElem.addEventListener('click', sendQuery);


// {
//     id: 1,
//     name: 'Валя',
//     email: 'valentina@gmail.com',
//     password: 'valentinapassword',
//     testimonial: 'BMW XM - тачка вогонь!',}



export async function sendQuery() {

  const urlReqElem = document.querySelector('#urlReq').value;
  console.log(urlReqElem)
  // if (method === "GET") {
  //   const response = await fetch(urlReqElem, options);
  //   if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  //   const data = await response.json();
  //   console.log('Відповідь сервера:', data);
  //   return data;
  // }
  const method = selectedMethodElem.options[selectedMethodElem.selectedIndex].text;
  const options = {
    method: `${method}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  console.log(options)
    const response = await fetch(urlReqElem, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log('Відповідь сервера:', data);
    return data;
  

}

