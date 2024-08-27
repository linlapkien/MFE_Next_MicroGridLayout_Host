import Camp from '@/components/camp';
import Features from '@/components/features';
import Footer from '@/components/footer';
import GetApp from '@/components/getApp';
import Guide from '@/components/guide';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import dynamic from 'next/dynamic';

// ------------------------------------------

const HeroCompnent = dynamic(() => import('hero_component/Hero'), {
  ssr: false,
});
const CampCompnent = dynamic(() => import('camp_component/Camp'), {
  ssr: false,
});
const GuideCompnent = dynamic(() => import('guide_component/Guide'), {
  ssr: false,
});
const FeatureCompnent = dynamic(() => import('feature_component/Feature'), {
  ssr: false,
});
const GetAppCompnent = dynamic(() => import('getapp_component/Getapp'), {
  ssr: false,
});

// ------------------------------------------

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCompnent />
      <CampCompnent />
      <GuideCompnent />
      <FeatureCompnent />
      <GetAppCompnent />
      <Footer />
    </>
  );
}
