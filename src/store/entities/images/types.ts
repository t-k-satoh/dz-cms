import { images } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type ImagesState = {
    data: PromiseReturnType<typeof images.list>;
    status: QueryStatus;
};
