import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import './style'

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
        return () => {
            
        }
    }, [bannerList.length, sliderSwiper])
    return (
        <div>
            q
        </div>
    );
}

export default React.memo(Slider);
