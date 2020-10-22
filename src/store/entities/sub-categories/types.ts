import { subCategories } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type SubCategoriesState = {
    data: PromiseReturnType<typeof subCategories.list>;
    status: QueryStatus;
};
