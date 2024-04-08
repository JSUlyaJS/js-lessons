var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose")


mobileMenu.addEventListener("click", function (){
        mobileMenuOpened.classList.add("visible");
        document.body.classList.add("overflowHidden")
});

mobileMenuClose.addEventListener("click", function(){
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden")
})


// Данные об услугах
const servicesData = [
    { imgSrc: 'img/one.jpg', altText: 'Item', serviceName: 'Construction' },
    { imgSrc: 'img/two.jpg', altText: 'Item', serviceName: 'Project Develop' },
    { imgSrc: 'img/two.jpg', altText: 'Item', serviceName: 'Interior Design' },
    { imgSrc: 'img/three.jpg', altText: 'Item', serviceName: 'Repairs' }
];

// Выбор элемента для добавления сервисов
const serItemsContainer = document.querySelector('.serItems');

// Генерация HTML для каждой услуги
servicesData.forEach(service => {
    // Создание элементов для каждой услуги
    const serItem = document.createElement('div');
    serItem.classList.add('serItem');

    const img = document.createElement('img');
    img.src = service.imgSrc;
    img.alt = service.altText;

    const p = document.createElement('p');
    p.textContent = service.serviceName;

    // Добавление изображения и названия услуги в блок сервиса
    serItem.appendChild(img);
    serItem.appendChild(p);

    // Добавление блока сервиса в контейнер сервисов
    serItemsContainer.appendChild(serItem);
});

// Добавление события на кнопку "View" (если нужно)
const viewButton = document.querySelector('.serButton');
viewButton.addEventListener('click', () => {
    // Действие при нажатии на кнопку (например, открытие дополнительной информации)
    console.log('Button clicked!');
});
