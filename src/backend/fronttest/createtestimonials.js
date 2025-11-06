
const btnElem = document.querySelector('#createTestimonialBtn');



btnElem.addEventListener('click', createTestimonial);

export async function createTestimonial(e) {
    e.preventDefault();
    const inputNameElem = document.querySelector('#user').value;
    const inputTestimonialElem = document.querySelector('#testimonial').value;
    const inputPasswordElem = document.querySelector('#pass').value;

    const dataToSend = {
        name: `${inputNameElem}`,
        testimonial: `${inputTestimonialElem}`,
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
    const urlReqElem = document.querySelector('#urlReqTestimonial').value;
    console.log(options)
    const response = await fetch(urlReqElem, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log('Відповідь сервера:', data);
    return data;
}