import dynamic from 'next/dynamic';
import settings from './setting';
import GridLayout from './gridLayout';
import Hero from '@/components/hero';
import Hero2 from '@/components/hero2';

// ------------------------------------------

const HeroCompnent = dynamic(() => import('hero_component/Hero'), {
  ssr: false,
});
const Hero2Compnent = dynamic(() => import('hero2_component/Hero2'), {
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
  const components = {
    HeroCompnent: <HeroCompnent />,
    Hero2Compnent: <Hero2Compnent />,
    CampCompnent: <CampCompnent />,
    GuideCompnent: <GuideCompnent />,
    FeatureCompnent: <FeatureCompnent />,
    GetAppCompnent: <GetAppCompnent />,
  };

  return (
    <>
      {' '}
      <GridLayout settings={settings} components={components} />
    </>
  );
}
