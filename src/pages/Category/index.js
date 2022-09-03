// import { useParams } from 'react-router-dom';
import StoreNav from '~/pages/components/StoreNav';
import ProductList from '../components/ProductList';

function Category() {
  document.title = 'Category';
  // const { genre, page } = useParams();
  // console.log(genre, page);
  return (
    <>
      <StoreNav />
      <ProductList />
    </>
  );
}

export default Category;
