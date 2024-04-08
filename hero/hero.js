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



const servicesData = [
    { imgSrc: 'img/one.jpg', altText: 'Item', serviceName: 'Construction' },
    { imgSrc: 'img/two.jpg', altText: 'Item', serviceName: 'Project Develop' },
    { imgSrc: 'img/two.jpg', altText: 'Item', serviceName: 'Interior Design' },
    { imgSrc: 'img/three.jpg', altText: 'Item', serviceName: 'Repairs' }
];

const serItemsContainer = document.querySelector('.serItems');


servicesData.forEach(service => {
    const serItem = document.createElement('div');
    serItem.classList.add('serItem');

    const img = document.createElement('img');
    img.src = service.imgSrc;
    img.alt = service.altText;

    const p = document.createElement('p');
    p.textContent = service.serviceName;

    serItem.appendChild(img);
    serItem.appendChild(p);

    serItemsContainer.appendChild(serItem);
});

const viewButton = document.querySelector('.serButton');
viewButton.addEventListener('click', () => {
    console.log('Button clicked!');
});
