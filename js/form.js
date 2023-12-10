import { showModal, hideModal } from './bigPicture.js';
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const inputField = document.querySelector('.img-upload__input');

const descriptionField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');


const showOverlay = () => {
  overlay.classList.remove('hidden');
  showModal(closeOnKeydown);
};

const hideOverlay = ()=> {
  form.reset();
  overlay.classList.add('hidden');
  hideModal(closeOnKeydown);
  inputField.value = '';
};

function closeOnKeydown (evt) {
  if (evt.key === 'Escape'){ //
    evt.preventDefault();   //
    hideOverlay();       // что-то нужно объявлять раньше другого, а оставшуюся объявлять через function
  }                        // чтобы была возможность использовать после объявления
}

const onCancelButton = ()=>{
  hideOverlay();
};

const onFileInputButton = () => {
  showOverlay();
};
const stopPropagationOnKey = (evt)=>{
  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
};
descriptionField.addEventListener('keydown', stopPropagationOnKey);
hashtagField.addEventListener('keydown', stopPropagationOnKey);
inputField.addEventListener('change', onFileInputButton);
cancelButton.addEventListener('click', onCancelButton);

export {form, descriptionField, hashtagField};
