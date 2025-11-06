
const btnElem = document.querySelector('#createCategoryBtn');

btnElem.addEventListener('click', createCategoryBtn);

export async function createCategoryBtn(e) {
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