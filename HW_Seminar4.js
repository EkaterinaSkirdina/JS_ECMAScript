// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.

async function myAsync1(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const task1 = document.querySelector('.task1');
const url = 'https://jsonplaceholder.typicode.com/users';

try {
    const users = await myAsync1(url);
    console.log(users);
    users.forEach((element) => {
        task1.insertAdjacentHTML(
            'beforeend',
            `
                <div>
                    <p class = name>${element.name}</p>
                    <p>Email: ${element.email}</p>
                    <p>Adress: ${element.adress}</p>
                    <p>Phone: ${element.phone}</p>
                </div>
            `
        )
    });
} catch (error) {
    console.log(error.message);
}


// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

async function myAsync2(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

const task2 = document.querySelector('.task2');

const URL = 'https://dog.ceo/api/breeds/image/random'
async function getImgDogs(URL) {
    try {
            const dogs = await myAsync2(URL);
            console.log(dogs);            
                task2.insertAdjacentHTML(
                    'beforeend',
                    `                    
                        <img src="${dogs.message}" />
                    `
                );
        } catch (error) {
            console.log(error.message);
        }
}

function showDogs(URL) {
    let count = 0;

    setTimeout(function go() {
        getImgDogs(URL);
        if (count < 10) {
            setTimeout(go, 3000)
        }
        count++;
    }, 3000);
}

showDogs(URL);
