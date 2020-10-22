import { categoriesState } from './categories/state';
import { CategoriesState } from './categories/types';
import { imagesGroupsState } from './images-groups/state';
import { ImagesGroupsState } from './images-groups/types';
import { imagesState } from './images/state';
import { ImagesState } from './images/types';
import { keyVisualsState } from './key-visuals/state';
import { KeyVisualsState } from './key-visuals/types';
import { productsState } from './products/state';
import { ProductsState } from './products/types';
import { subCategoriesState } from './sub-categories/state';
import { SubCategoriesState } from './sub-categories/types';

export type EntitiesState = {
    categories: CategoriesState;
    imagesGroups: ImagesGroupsState;
    images: ImagesState;
    keyVisuals: KeyVisualsState;
    products: ProductsState;
    subCategories: SubCategoriesState;
};

export const entitiesState: EntitiesState = {
    categories: categoriesState,
    imagesGroups: imagesGroupsState,
    images: imagesState,
    keyVisuals: keyVisualsState,
    products: productsState,
    subCategories: subCategoriesState,
};
