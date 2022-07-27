import React, {FC, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {
    items: {
        url: string
    }[]
}
const Gallery:FC<Props> = (props) => {

    const [nav1, setNav1]:any = useState(null)
    const [nav2, setNav2]:any = useState(null)

    const navSlider = {
        slidesToShow: 3,
        vertical: true,
        focusOnSelect: true,
        asNavFor:nav2,
        arrows: false,
        infinite:false
    }

    const sliderSetting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor:nav1,
        fade: true,
        adaptiveHeight: true,
        dots: false
    };

    return (
        <div className="product__details__pic">
            <div className="product__details__pic__left product__thumb nice-scroll"
                 style={{overflowY: 'hidden', outline: 'none'}}>
                <Slider {...navSlider} ref={slider => setNav1(slider)  }>
                    {
                        props.items.map((item, index) => (
                            <div key={`img-nav-${index}`}>
                                {/*<img src="https://dummyimage.com/230x360" />*/}
                                <img src={item.url} />

                            </div>
                        ))
                    }
                {/*<a className="pt active" href="#product-1">*/}
                {/*    <img src="https://dummyimage.com/270x360/000/fff" alt=""/>*/}
                {/*</a>*/}
                {/*<a className="pt" href="#product-2">*/}
                {/*    <img src="https://dummyimage.com/270x360/000/fff" alt=""/>*/}
                {/*</a>*/}
                </Slider>
            </div>
            <div className="product__details__slider__content owl">
                <Slider {...sliderSetting} ref={slider => setNav2(slider)  }>
                    {
                        props.items.map((item, index) => (
                            <div key={`image-${index}`} style={{}}>
                                <img className="product__big__img" src={item.url}  />
                                {/*<img className="product__big__img" src="https://dummyimage.com/259x360"  />*/}
                            </div>
                        ))
                    }
                </Slider>
                {/*<div className="product__details__pic__slider owl-carousel owl-loaded">*/}


                {/*    <div className="owl-stage-outer">*/}
                {/*        <div className="owl-stage"*/}
                {/*             style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s; width: 1652px'}}>*/}
                {/*            <div className="owl-item active" style={{width: '412.891px'}}><img*/}
                {/*                data-hash="product-1" className="product__big__img"*/}
                {/*                src="https://technext.github.io/ashion/img/product/details/product-1.jpg" alt="" /></div>*/}
                {/*            /!*<div className="owl-item" style={{width: '412.891px'}}><img*!/*/}
                {/*            /!*    data-hash="product-2" className="product__big__img"*!/*/}
                {/*            /!*    src="https://technext.github.io/ashion/img/product/details/product-2.jpg" alt="" /></div>*!/*/}
                {/*            /!*<div className="owl-item" style={{width: '412.891px'}}><img*!/*/}
                {/*            /!*    data-hash="product-3" className="product__big__img"*!/*/}
                {/*            /!*    src="https://technext.github.io/ashion/img/product/details/product-3.jpg" alt="" /></div>*!/*/}
                {/*            /!*<div className="owl-item" style={{width: '412.891px'}}><img*!/*/}
                {/*            /!*    data-hash="product-4" className="product__big__img"*!/*/}
                {/*            /!*    src="https://technext.github.io/ashion/img/product/details/product-4.jpg" alt="" /></div>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="owl-nav">*/}
                {/*        <button type="button" role="presentation" className="owl-prev disabled"><i*/}
                {/*            className="arrow_carrot-left"></i></button>*/}
                {/*        <button type="button" role="presentation" className="owl-next"><i*/}
                {/*            className="arrow_carrot-right"></i></button>*/}
                {/*    </div>*/}
                {/*    <div className="owl-dots disabled"></div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Gallery;