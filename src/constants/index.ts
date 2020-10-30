export const DASH_BOARD = 'DASH_BOARD';
export const SUB_CATEGORIES = 'SUBCATEGORIES';
export const PRODUCTS = 'PRODUCTS';
export const CATEGORIES = 'CATEGORIES';
export const IMAGES_GROUPS = 'IMAGES_GROUPS';
export const IMAGES = 'IMAGES';
export const KEY_VISUALS = 'KEY_VISUALS';

export const DASH_BOARD_LABEL = 'Dashboard';
export const SUB_CATEGORIES_LABEL = 'SubCategories';
export const PRODUCTS_LABEL = 'Products';
export const CATEGORIES_LABEL = 'Categories';
export const IMAGES_GROUPS_LABEL = 'ImagesGroups';
export const IMAGES_LABEL = 'Images';
export const KEY_VISUALS_LABEL = 'KeyVisuals';

export const DASH_BOARD_PATH = '/';
export const SUB_CATEGORIES_PATH = '/sub_categories';
export const PRODUCTS_PATH = '/products';
export const CATEGORIES_PATH = '/categories';
export const IMAGES_GROUPS_PATH = '/images_groups';
export const IMAGES_PATH = '/images';
export const KEY_VISUALS_PATH = '/key_visuals';

export const NAVIGATION = [
    {
        key: DASH_BOARD,
        label: DASH_BOARD_LABEL,
        path: DASH_BOARD_PATH,
    },
    {
        key: SUB_CATEGORIES,
        label: SUB_CATEGORIES_LABEL,
        path: SUB_CATEGORIES_PATH,
    },
    {
        key: PRODUCTS,
        label: PRODUCTS_LABEL,
        path: PRODUCTS_PATH,
    },
    {
        key: CATEGORIES,
        label: CATEGORIES_LABEL,
        path: CATEGORIES_PATH,
    },
    {
        key: IMAGES_GROUPS,
        label: IMAGES_GROUPS_LABEL,
        path: IMAGES_GROUPS_PATH,
    },
    {
        key: IMAGES,
        label: IMAGES_LABEL,
        path: IMAGES_PATH,
    },
    {
        key: KEY_VISUALS,
        label: KEY_VISUALS_LABEL,
        path: KEY_VISUALS_PATH,
    },
] as const;

export const KEYS = NAVIGATION.map(({ key }) => key);

export const LABELS = NAVIGATION.map(({ label }) => label);

export const PATHS = NAVIGATION.map(({ path }) => path);
