import StoreNav from '~/pages/components/StoreNav';
import ProductDetail from './components/ProductDetail';
import SystemRequirements from './components/SystemRequirements';

function Product() {
  document.title = 'Product';

  return (
    <>
      <StoreNav />
      <ProductDetail />
      <SystemRequirements />
    </>
  );
}

export default Product;
