import Gallery from '@/components/Gallery';
import { Suspense } from 'react';

const MarvelGallery = () => {


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gallery />
    </Suspense>
  );
};

export default MarvelGallery;
