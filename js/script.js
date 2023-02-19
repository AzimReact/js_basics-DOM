/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"  

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS 

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const advertisementContainer = document.querySelectorAll('.promo__adv')
// advertisementContainer.forEach(item => {
//     item.querySelectorAll('img').forEach(photo => {
//         photo.remove()
//     })
// })

const adv = document.querySelectorAll('.promo__adv img')
adv.forEach(item => {
    item.remove()
})


// 2) Изменить жанр фильма, поменять "комедия" на "драма" 
// const genre = document.querySelector('.promo__genre') 
// genre.replaceWith('ДРАМА')
const poster = document.querySelector('.promo__bg')
const genre = poster.querySelector('.promo__genre')
genre.textContent = 'драма'

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg".
poster.style.backgroundImage = 'url("img/bg.jpg")';
// poster.style.cssText = 'background-image: url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const movieList = document.querySelector('.promo__interactive-list')
movieList.innerHTML = '';
movieDB.movies.sort()

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`
})

