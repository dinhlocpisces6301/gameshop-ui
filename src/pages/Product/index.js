import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import StoreNav from '~/pages/components/StoreNav';
import ProductDetail from './components/ProductDetail';
import SystemRequirements from './components/SystemRequirements';
import * as productServices from '~/services/productServices';

function Product() {
  document.title = 'Product';
  const { productId } = useParams();
  const [value, setValue] = useState(undefined);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.getProductById(productId);
      setValue(result);
      console.log(result);
    };

    fetchApi();
  }, [productId]);
  return (
    <>
      <StoreNav />
      <ProductDetail data={value} />
      <SystemRequirements />
    </>
  );
}

export default Product;
