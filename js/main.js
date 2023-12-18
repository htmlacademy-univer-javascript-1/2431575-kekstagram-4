import { getData } from './api.js';
import { renderMiniatures, reRenderMiniatures } from './render.js';
import {initializeUploadForm, hideOverlay, resetForm} from './form.js';
import { setFormSubmit, addValidators } from './validator.js';
import { showAlert, debounce } from './util.js';
import { addFilterButtons } from './galleryFilters.js';

const loadPictures = async () => {
  await getData()
    .then((data) => {
      renderMiniatures(data);
      addFilterButtons(data, debounce(reRenderMiniatures));
    })
    .catch((err)=> showAlert(err));
};
loadPictures();

setFormSubmit(hideOverlay, resetForm);
addValidators();
initializeUploadForm();

