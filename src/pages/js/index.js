import carousel from "../../common/carousel/carousel";
import {uniformChoice} from "../../common/fieldset/__iqdropdown/iqdropdown";

carousel('.carousel__background',{
    autoplay: true,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    speed: 1500
})

uniformChoice('searchRoom2');