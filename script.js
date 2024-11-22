const cardWrap = document.querySelector('.card-wrap');

    cardWrap.innerHTML += `
        <ul class="menu">
            <li><a href="${data[0].link}">Главная</a></li>
            <li><a href="${data[1].link}">О нас</a></li>
            <li><a href="${data[2].link}">Услуги</a></li>
            <li><a href="${data[3].link}">Портфолио</a></li>
            <li><a href="${data[4].link}">Контакты</a></li>
        </ul>`
