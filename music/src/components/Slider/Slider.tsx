import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import 'swiper/dist/css/swiper.css'
import Swiper  from 'swiper';

interface SliderProps {
    bannerList: Array<{imageUrl: string}>
}

const Slider = ({ bannerList }: SliderProps) => {
    const [sliderSwiper, setSliderSwiper] = useState<Swiper>()
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper(".slider-container", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: { el: '.swiper-pagination'}
            });
            setSliderSwiper(newSliderSwiper)
        }
    }, [bannerList.length, sliderSwiper])
    return (
        <SliderContainer>
            <div className='slider-container'>
                <div className="swiper-wrapper">
                    {
                        bannerList.map((slider, index) => {
                            return (
                                <div className="swiper-slide" key={slider.imageUrl + index}>
                                    <div className="slider-nav">
                                        <img src={slider.imageUrl} alt="推荐" width='100%' height='100%' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="before"></div>
        </SliderContainer>
    );
}

export default React.memo(Slider);
