import React, { Suspense } from 'react';
import BannerSection from './BannerSection/BannerSection';
import FeaturesSection from './FeaturesSection';
import Loading from '../../components/Loading/Loading';
import FaqSection from './FaqSection/FaqSection';

const HomePage = () => {
    return (
      <>
        <BannerSection />
        <FeaturesSection />
        <FaqSection />
      </>
    );
};

export default HomePage;