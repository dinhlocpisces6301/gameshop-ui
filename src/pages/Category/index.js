import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import StoreNav from '~/pages/components/StoreNav';
import ProductList from '../components/ProductList';
import * as productServices from '~/services/productServices';
import * as categoryServices from '~/services/categoryServices';
import CategoryItems from './component/CategoryItems';

function Category() {
  document.title = 'Category';
  const { genre, page } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.getCategoryById(genre);
      setTitle(`Page ${page || 1} --- ${result.name}`);
    };

    if (genre !== undefined && genre !== 'undefined') {
      fetchApi();
    }
  });

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoryServices.getCategories();
      setCategories(result);
    };

    fetchApi();
  });
  return (
    <>
      <StoreNav />
      {(genre === undefined && page === undefined) || (genre === 'undefined' && page === 'undefined') ? (
        <>
          <CategoryItems data={categories} />;
        </>
      ) : (
        <ProductList pagination={true} typePage={'category'} title={title} />
      )}
    </>
  );
}

export default Category;
