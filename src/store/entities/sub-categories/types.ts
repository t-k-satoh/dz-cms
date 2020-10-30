import { subCategories } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';
import { SUB_CATEGORIES } from '../../../constants';

export type SubCategoriesState = {
    data: PromiseReturnType<typeof subCategories.list>;
    status: QueryStatus;
    key: typeof SUB_CATEGORIES;
};
