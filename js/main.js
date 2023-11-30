import './form.js';
import './validator.js';
import { getPhotoDescriptions } from './data.js';
import { renderMiniatures } from './render.js';
const photos = getPhotoDescriptions();
renderMiniatures(photos);
