import Hero from '../components/sections/Hero';
import FeaturedDestinations from '../components/sections/FeaturedDestinations';
import SignatureCollection from '../components/sections/SignatureCollection';
import CuratedExperiences from '../components/sections/CuratedExperiences';
import LuxuryStatistics from '../components/sections/LuxuryStatistics';
import WellnessRetreats from '../components/sections/WellnessRetreats';
import DiningExperience from '../components/sections/DiningExperience';
import PrivateVillas from '../components/sections/PrivateVillas';
import DayNightExperience from '../components/sections/DayNightExperience';
import ResortImmersion from '../components/sections/ResortImmersion';
import InteractiveResortMap from '../components/sections/InteractiveResortMap';
import JourneyTimeline from '../components/sections/JourneyTimeline';
import BrandStory from '../components/sections/BrandStory';
import AwardsRecognition from '../components/sections/AwardsRecognition';
import ExperienceMarketplace from '../components/sections/ExperienceMarketplace';
import UtilityWidgets from '../components/sections/UtilityWidgets';
import GuestTestimonials from '../components/sections/GuestTestimonials';
import SocialProofWall from '../components/sections/SocialProofWall';
import EliteMembership from '../components/sections/EliteMembership';
import LuxuryGallery from '../components/sections/LuxuryGallery';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedDestinations />
      <SignatureCollection />
      <CuratedExperiences />
      <LuxuryStatistics />
      <WellnessRetreats />
      <DiningExperience />
      <PrivateVillas />
      <DayNightExperience />
      <ResortImmersion />
      <InteractiveResortMap />
      <JourneyTimeline />
      <BrandStory />
      <AwardsRecognition />
      <ExperienceMarketplace />
      <UtilityWidgets />
      <GuestTestimonials />
      <SocialProofWall />
      <EliteMembership />
      <LuxuryGallery />
      <Newsletter />
    </div>
  );
};

export default Home;
