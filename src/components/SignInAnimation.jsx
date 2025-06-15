import React from 'react';
import signInAnimation from "../assets/animation/signInAnimation.json"
import Lottie from 'lottie-react';
const SignInAnimation = () => {
    return (
      <div className='max-w-md w-full'>
        <Lottie animationData={signInAnimation} loop={true} />
      </div>
    );
};

export default SignInAnimation;