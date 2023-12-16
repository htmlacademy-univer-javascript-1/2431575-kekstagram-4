import { getData } from './api.js';
import { renderMiniatures } from './render.js';
import {initializeUploadForm, hideOverlay} from './form.js';
import { addSubmitBlocker, addValidators } from './validator.js';
import { showAlert } from './util.js';
getData()
  .then((data) => renderMiniatures(data))
  .catch(()=> showAlert());
addSubmitBlocker(hideOverlay);
addValidators();
initializeUploadForm();

