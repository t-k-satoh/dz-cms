import { PromiseType } from 'utility-types';

export type PromiseReturnType<T extends () => Promise<unknown>> = PromiseType<ReturnType<T>>;
