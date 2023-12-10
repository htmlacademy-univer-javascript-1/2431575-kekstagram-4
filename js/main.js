import { getPhotoDescriptions } from './data.js';
import { renderMiniatures } from './render.js';
import {initializeUploadForm as initializeUploadForm} from './form.js';
const photos = getPhotoDescriptions();
renderMiniatures(photos);
initializeUploadForm();
