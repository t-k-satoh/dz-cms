import { combineReducers } from '@reduxjs/toolkit';

import * as entitiesSlices from '.';

export const entitiesReducer = combineReducers({
    products: entitiesSlices.productsSlice.reducer,
    categories: entitiesSlices.categoriesSlice.reducer,
    images: entitiesSlices.imagesSlice.reducer,
    imagesGroups: entitiesSlices.imagesGroupsSlice.reducer,
    subCategories: entitiesSlices.subCategoriesSlice.reducer,
    keyVisuals: entitiesSlices.keyVisualsSlice.reducer,
});
