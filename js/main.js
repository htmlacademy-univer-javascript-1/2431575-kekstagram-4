import { getPhotoDescriptions } from './data.js';
import { renderMiniatures } from './render.js';
const photos = getPhotoDescriptions();
renderMiniatures(photos);

