
//const url = 'http://localhost:4000/api/usersdb';


function Card() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-medium text-black">Привет!</h2>
            <p className="text-gray-500">Это карточка на Tailwind</p>
        </div>
    );
}
Card();
const btnElem = document.querySelector('#createUserBtn');



btnElem.addEventListener('click', createUser);

export async function createUser(e) {
    e.preventDefault();
    const inputNameElem = document.querySelector('#username').value;
    const inputAgeElem = document.querySelector('#userage').value;
    const inputEmailElem = document.querySelector('#useremail').value;
    const inputPasswordElem = document.querySelector('#userpassword').value;

    const dataToSend = {
        age: Number(inputAgeElem),
        name: `${inputNameElem}`,
        email: `${inputEmailElem}`,
        password: `${inputPasswordElem}`
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
    };
    const urlReqElem = document.querySelector('#urlReqUser').value;
    console.log(options)
    const response = await fetch(urlReqElem, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log('Відповідь сервера:', data);
    return data;
}