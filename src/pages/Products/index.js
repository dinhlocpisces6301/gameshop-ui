import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import StoreNav from '../components/StoreNav';

function Products() {
  document.title = 'All product';
  const { page, keyword } = useParams();
  console.log({ page, keyword });
  return (
    <>
      <StoreNav />
      <ProductList pagination={true} typePage={'products'} title={'All product'} />
    </>
  );
}

export default Products;
