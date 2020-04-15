import slick from 'slick-carousel';

const carousel = defaultOptions => {
    return (container = '.carousel-container', options = {}) => {
        let $container = $(container);
        $container.on('click', e => {
            e.preventDefault();
        })
        if ($container.length === 0) return;
        $container.slick(
            Object.assign(defaultOptions, options)
        );
    }
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

export default carousel(options);