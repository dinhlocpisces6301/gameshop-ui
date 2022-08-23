import Slider from '~/pages/components/Slider';
import InfoTab from './components/InfoTab';
import ProductTab from './components/ProductTab';

export const Items = [
  {
    id: 1,
    title: 'my product',
    component: ProductTab,
  },
  {
    id: 2,
    title: 'personal information',
    component: InfoTab,
  },
  {
    id: 3,
    title: 'profile 3',
    component: Slider,
  },
];
