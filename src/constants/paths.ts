export const DASH_BOARD = 'DASH_BOARD';
export const PRODUCT = 'PRODUCT';

export const Labels_EN = {
    [DASH_BOARD]: 'DashBoard',
    [PRODUCT]: 'Product',
} as const;

export const Labels_JP = {
    [DASH_BOARD]: 'ダッシュボード',
    [PRODUCT]: '商品',
} as const;

export const PathList = {
    [DASH_BOARD]: '/',
    [PRODUCT]: '/product',
} as const;

export const labelENValues = Object.values(Labels_EN);
export const labelJPValues = Object.values(Labels_JP);
export const pathsListValues = Object.values(PathList);

export const Paths = {
    [DASH_BOARD]: {
        label: {
            en: Labels_EN[DASH_BOARD],
            jp: Labels_JP[DASH_BOARD],
        },
        path: PathList[DASH_BOARD],
    },
    [PRODUCT]: {
        label: {
            en: Labels_EN[PRODUCT],
            jp: Labels_JP[PRODUCT],
        },
        path: PathList[PRODUCT],
    },
} as const;
