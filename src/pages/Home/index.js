// import images from '~/assets/images';

import Slider from '~/pages/components/Slider';
import StoreNav from '~/pages/components/StoreNav';
import ProductList from '~/pages/components/ProductList';

function Home() {
  return (
    <>
      <StoreNav />
      <Slider />
      <ProductList />
    </>
  );
}

export default Home;
