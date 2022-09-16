import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import StoreNav from '../components/StoreNav';

function Products() {
  document.title = 'All product';
  const { keyword } = useParams();
  const [title, setTitle] = useState('');
  useEffect(() => {
    const tmp = keyword.split('-');
    setTitle(tmp.join(' '));
  }, [keyword]);

  return (
    <>
      <StoreNav />
      <ProductList pagination={true} typePage={'products'} title={`${title || 'all'} product`} />
    </>
  );
}

export default Products;
