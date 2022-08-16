// import images from '~/assets/images';

import Slider from '~/layouts/components/Slider';
import StoreNav from '~/layouts/components/StoreNav';
import ProductList from '~/layouts/components/ProductList';

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
