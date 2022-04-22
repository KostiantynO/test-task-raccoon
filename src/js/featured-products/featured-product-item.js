import { productItem } from '../common/product-item';
import scss from './featured-products-list.module.scss';

export const featuredProductItem = itemData => productItem(itemData, scss);
