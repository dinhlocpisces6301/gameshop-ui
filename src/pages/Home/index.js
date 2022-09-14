// import images from '~/assets/images';

import Slider from '~/pages/components/Slider';
import StoreNav from '~/pages/components/StoreNav';
import ProductList from '~/pages/components/ProductList';

function Home() {
  document.title = 'STEM - Game Shop';

  return (
    <>
      <StoreNav />
      <Slider />
      <ProductList pagination={true} typePage={'products'} title={'All Product'} />
    </>
  );
}

export default Home;
