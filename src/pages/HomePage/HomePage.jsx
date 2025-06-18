import React, { Suspense } from 'react';
import BannerSection from './BannerSection/BannerSection';
import FeaturesSection from './FeaturesSection';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
    return (
      <>
        <BannerSection />
        <FeaturesSection />
      </>
    );
};

export default HomePage;