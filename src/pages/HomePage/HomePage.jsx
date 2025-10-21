import React, { Suspense } from 'react';
import BannerSection from './BannerSection/BannerSection';
import FeaturesSection from './FeaturesSection';
import Loading from '../../components/Loading/Loading';
import FaqSection from './FaqSection/FaqSection';
import UserReviewSection from './UserReviewSection';
import RecentAssignmensSection from './RecentAssignmentsSection/RecentAssignmensSection';

const HomePage = () => {
    return (
      <>
        <BannerSection />
        <FeaturesSection />
        <RecentAssignmensSection />
        <FaqSection />
        <UserReviewSection />
      </>
    );
};

export default HomePage;