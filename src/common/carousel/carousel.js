import slick from 'slick-carousel';

const carousel = (options) => {
    let $container = $('.carousel-container');
    if ($container.length === 0) return;
    $container
        .slick(options);
}


const options = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev" />',
    nextArrow: '<button type="button" class="slick-next" />'
}

carousel(options);