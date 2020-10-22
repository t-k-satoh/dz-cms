import * as jsClients from 'dz-js-client';
import { credentials } from '../../utils/credentials';

export const getCategories = async () => await jsClients.categories.list(credentials);
export const getImages = async () => await jsClients.images.list(credentials);
export const getImagesGroups = async () => await jsClients.imagesGroups.list(credentials);
export const getKeyVisuals = async () => await jsClients.keyVisuals.list(credentials);
export const getProducts = async () => await jsClients.products.list(credentials);
export const getSubCategories = async () => await jsClients.subCategories.list(credentials);
