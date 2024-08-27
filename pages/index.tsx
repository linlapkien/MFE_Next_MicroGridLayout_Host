import dynamic from 'next/dynamic';
import settings from './setting';
import GridLayout from './gridLayout';

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
  const components = {
    HeroCompnent: <HeroCompnent />,
    CampCompnent: <CampCompnent />,
    GuideCompnent: <GuideCompnent />,
    FeatureCompnent: <FeatureCompnent />,
    GetAppCompnent: <GetAppCompnent />,
  };

  return (
    <>
      <GridLayout settings={settings} components={components} />
    </>
  );
}
