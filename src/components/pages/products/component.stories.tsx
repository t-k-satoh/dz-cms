import React, { ComponentProps } from 'react';
import { Name } from '../constants';
import { Products } from '.';

const Template = (arg: ComponentProps<typeof Products>) => <Products {...arg} />;

export default {
    title: `${Name}/${Products.name}`,
    component: Products,
};

const state: ComponentProps<typeof Products> = {
    products: [
        {
            productId: 'c382a1dd-e6ea-4c40-8a6c-2bff13391655',
            categoryId: 'd852e9da-777a-4974-9af8-9cdea5b5a82a',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'suzuri_id',
            name: 'test created by 2020-08-30-22-59-36',
            nickName: 'created for LOCAL',
            description: 'created for LOCAL',
            releaseDate: '2020-08-30T04:54:50.893Z',
            createdAt: '2020-08-30T04:59:37.441Z',
            updatedAt: '2020-08-30T04:59:37.441Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: false,
            new: false,
        },
        {
            productId: '40163928-7aed-49c8-8f73-9a383a5c73af',
            categoryId: 'd852e9da-777a-4974-9af8-9cdea5b5a82a',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'suzuri_id',
            name: 'test created by 2020-08-30-23-00-58',
            nickName: 'created for LOCAL',
            description: 'created for LOCAL',
            releaseDate: '2020-08-30T04:54:50.893Z',
            createdAt: '2020-08-30T05:01:00.109Z',
            updatedAt: '2020-08-30T05:01:00.109Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: false,
            new: false,
        },
        {
            productId: 'fef28c3d-a24a-4805-9d5b-e2177614ad6e',
            categoryId: 'd852e9da-777a-4974-9af8-9cdea5b5a82a',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'suzuri_id',
            name: 'test created by 2020-09-02-21-23-43',
            nickName: 'created for LOCAL',
            description: 'created for LOCAL',
            releaseDate: '2020-08-30T04:54:50.893Z',
            createdAt: '2020-09-02T03:23:44.215Z',
            updatedAt: '2020-09-02T03:23:44.215Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: false,
            new: false,
        },
        {
            productId: 'a1dc4edd-3baa-4617-8e66-b54cdb4f44cc',
            categoryId: 'd852e9da-777a-4974-9af8-9cdea5b5a82a',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'suzuri_id',
            name: 'test created by 2020-09-02-12-34-33',
            nickName: 'created for CircleCI',
            description: 'created for CircleCI',
            releaseDate: '2020-08-30T04:54:50.893Z',
            createdAt: '2020-09-02T03:34:33.387Z',
            updatedAt: '2020-09-02T03:34:33.387Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: false,
            new: false,
        },
        {
            productId: '759a026c-7f8f-44f9-b825-807bafa1ee44',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'LOCAL-Thu, 01 Oct 2020 05:31:25 GMT-name',
            nickName: 'LOCAL-Thu, 01 Oct 2020 05:31:25 GMT-nickName',
            description: 'LOCAL-Thu, 01 Oct 2020 05:31:25 GMT-description',
            releaseDate: '2020-08-30T05:54:50.893Z',
            createdAt: '2020-09-30T20:31:24.792Z',
            updatedAt: '2020-09-30T20:31:24.792Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: '559a21af-2b8d-4a07-a9ef-e4a3a4638515',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'LOCAL-Thu, 01 Oct 2020 05:33:36 GMT-name',
            nickName: 'LOCAL-Thu, 01 Oct 2020 05:33:36 GMT-nickName',
            description: 'LOCAL-Thu, 01 Oct 2020 05:33:36 GMT-description',
            releaseDate: '2020-08-30T05:54:50.893Z',
            createdAt: '2020-09-30T20:33:35.841Z',
            updatedAt: '2020-09-30T20:33:35.841Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: 'cc5b9a9c-72bc-43c1-a714-275438f3a82f',
            categoryId: '1b8abffc-0008-4cb3-8447-1477d22917dc',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'SUZURI',
            name: 'LOCAL-Thu, 01 Oct 2020 05:40:02 GMT-name',
            nickName: 'LOCAL-Thu, 01 Oct 2020 05:40:02 GMT-nickName',
            description: 'LOCAL-Thu, 01 Oct 2020 05:40:02 GMT-description',
            releaseDate: '2020-08-30T04:54:50.893Z',
            createdAt: '2020-09-30T20:40:03.795Z',
            updatedAt: '2020-09-30T20:40:03.795Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: true,
            new: true,
        },
        {
            productId: '79118d7b-1844-4dd3-b91b-584f9401821f',
            categoryId: '1b8abffc-0008-4cb3-8447-1477d22917dc',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'SUZURI',
            name: 'CircleCI-Fri, 09 Oct 2020 10:56:14 GMT-name',
            nickName: 'CircleCI-Fri, 09 Oct 2020 10:56:14 GMT-nickName',
            description: 'CircleCI-Fri, 09 Oct 2020 10:56:14 GMT-description',
            releaseDate: '2020-10-09T10:56:14.412Z',
            createdAt: '2020-10-09T01:56:14.464Z',
            updatedAt: '2020-10-09T01:56:14.464Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: true,
            new: true,
        },
        {
            productId: 'a9fc2c38-5684-410d-96e0-db3e70118f38',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'LOCAL-Thu, 01 Oct 2020 09:01:25 GMT-name',
            nickName: 'LOCAL-Thu, 01 Oct 2020 09:01:25 GMT-nickName',
            description: 'LOCAL-Thu, 01 Oct 2020 09:01:25 GMT-description',
            releaseDate: '2020-10-01T09:01:25.505Z',
            createdAt: '2020-10-01T09:01:24.082Z',
            updatedAt: '2020-10-01T09:01:25.508Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: '24622ffd-8e81-44aa-afd9-16cc2a59a5c3',
            categoryId: '1b8abffc-0008-4cb3-8447-1477d22917dc',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'SUZURI',
            name: 'CircleCI-Tue, 06 Oct 2020 04:11:14 GMT-name',
            nickName: 'CircleCI-Tue, 06 Oct 2020 04:11:14 GMT-nickName',
            description: 'CircleCI-Tue, 06 Oct 2020 04:11:14 GMT-description',
            releaseDate: '2020-10-06T04:11:14.630Z',
            createdAt: '2020-10-05T19:11:14.665Z',
            updatedAt: '2020-10-05T19:11:14.665Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: true,
            new: true,
        },
        {
            productId: '647d4689-8bb1-4b33-b186-6b4096891dec',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'CircleCI-Thu, 01 Oct 2020 09:04:27 GMT-name',
            nickName: 'CircleCI-Thu, 01 Oct 2020 09:04:27 GMT-nickName',
            description: 'CircleCI-Thu, 01 Oct 2020 09:04:27 GMT-description',
            releaseDate: '2020-10-01T09:04:27.415Z',
            createdAt: '2020-10-01T00:04:27.401Z',
            updatedAt: '2020-10-01T00:04:27.401Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: 'be06e78e-28dd-429c-914a-0f92c95ae0df',
            categoryId: '1b8abffc-0008-4cb3-8447-1477d22917dc',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'SUZURI',
            name: 'CircleCI-Sun, 01 Nov 2020 07:40:15 GMT-name',
            nickName: 'CircleCI-Sun, 01 Nov 2020 07:40:15 GMT-nickName',
            description: 'CircleCI-Sun, 01 Nov 2020 07:40:15 GMT-description',
            releaseDate: '2020-11-01T07:40:15.518Z',
            createdAt: '2020-10-31T22:40:15.554Z',
            updatedAt: '2020-10-31T22:40:15.554Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: true,
            new: true,
        },
        {
            productId: 'c3b7dd63-f80a-4683-a888-772898d85825',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'CircleCI-Thu, 01 Oct 2020 09:08:04 GMT-name',
            nickName: 'CircleCI-Thu, 01 Oct 2020 09:08:04 GMT-nickName',
            description: 'CircleCI-Thu, 01 Oct 2020 09:08:04 GMT-description',
            releaseDate: '2020-10-01T09:08:04.274Z',
            createdAt: '2020-10-01T00:08:04.257Z',
            updatedAt: '2020-10-01T00:08:04.257Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: 'ad740a7a-2e40-443b-9a37-f1e9a84750e0',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'CircleCI-Thu, 01 Oct 2020 13:51:28 GMT-name',
            nickName: 'CircleCI-Thu, 01 Oct 2020 13:51:28 GMT-nickName',
            description: 'CircleCI-Thu, 01 Oct 2020 13:51:28 GMT-description',
            releaseDate: '2020-10-01T13:51:28.431Z',
            createdAt: '2020-10-01T04:51:28.419Z',
            updatedAt: '2020-10-01T04:51:28.419Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
        {
            productId: '7a1d8b98-71ce-4d80-bd5e-c4d56d045165',
            categoryId: '1b8abffc-0008-4cb3-8447-1477d22917dc',
            subCategoryId: '547bb826-e9ae-4144-8c0f-57bc38eb4057',
            suzuriId: 'SUZURI',
            name: 'CircleCI-Tue, 06 Oct 2020 04:20:03 GMT-name',
            nickName: 'CircleCI-Tue, 06 Oct 2020 04:20:03 GMT-nickName',
            description: 'CircleCI-Tue, 06 Oct 2020 04:20:03 GMT-description',
            releaseDate: '2020-10-06T04:20:03.432Z',
            createdAt: '2020-10-05T19:20:03.515Z',
            updatedAt: '2020-10-05T19:20:03.515Z',
            product: false,
            imagesGroupId: '8758d1c6-24d8-47a6-a402-b72d049d2c94',
            recommend: true,
            new: true,
        },
        {
            productId: '825653c4-b6b6-4535-83ce-0a49e808b936',
            categoryId: '3c16f0db-8e70-4ed8-9916-de58c5a6af8b',
            subCategoryId: '9d18c051-95f3-4ab7-bb36-615f58a311ad',
            suzuriId: 'SUZURI-replace',
            name: 'CircleCI-Thu, 01 Oct 2020 16:28:11 GMT-name',
            nickName: 'CircleCI-Thu, 01 Oct 2020 16:28:11 GMT-nickName',
            description: 'CircleCI-Thu, 01 Oct 2020 16:28:11 GMT-description',
            releaseDate: '2020-10-01T16:28:11.653Z',
            createdAt: '2020-10-01T07:28:11.635Z',
            updatedAt: '2020-10-01T07:28:11.635Z',
            product: false,
            imagesGroupId: 'a022c404-0a09-4e75-9a76-aeee74bfb769',
            recommend: false,
            new: false,
        },
    ],
};

export const COMPONENT = Template.bind({});
COMPONENT.args = state;
