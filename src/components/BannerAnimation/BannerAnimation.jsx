import React from 'react';
import BannerLottieAnimation from "../../assets/animation/banner-animation.json"
import Lottie from 'lottie-react';
const BannerAnimation = () => {
    return (
        <Lottie className='max-w-lg w-full' animationData={BannerLottieAnimation} loop={true} />
    );
};

export default BannerAnimation;