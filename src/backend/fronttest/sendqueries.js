
//const url = 'http://localhost:4000/api/usersdb';

const btnElem = document.querySelector('#sendReqBtn');

const selectedMethodElem = document.querySelector('[name="selectMethod"]');
const usersList = document.querySelector('.userList');
const dataToSend = {

  name: 'John Doe2',
  age: 25,
  email: 'john.doe33@example.com',
  password: '987'
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

export async function sendQuery() {

  const urlReqElem = document.querySelector('#urlReq').value;
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
  // const markup = data.forEach((element) => {
  //   createLi(element).join('');
  // });

  const markup = await data
    .map(
      el => `<li>
                  <div>${el.name}</div>
                  <div>${el.age}</div>
                  <div>${el.email}</div>
                  <div>${el.password}</div>
              </li>`
    )
    .join('');

  // Динамічне створення рощзмітки галереї
  usersList.insertAdjacentHTML('afterbegin', markup);


  return data;

}

