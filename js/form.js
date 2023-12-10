import { showModal, hideModal } from './bigPicture.js';
import {form, addSubmitBlocker, addValidators} from './validator.js';
//import { resetEffects } from './filters.js';
import {destroySlider, setEffectsSlider} from './filters.js';

const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const inputField = document.querySelector('.img-upload__input');

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');
const fullPrecent = 100;
const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const ratioOfIncrease = 1;
const ratioOfDecrease = -1;

const scalePreview = (value) => {
  const scale = value / fullPrecent;
  picturePreview.style.transform = `scale(${scale})`;
  scaleValue.value = `${value}%`;
};

const changeScale = (border, ratioOfChange)=>{
  if (border){
    scalePreview(parseInt(scaleValue.value, 10) + SCALE_STEP * ratioOfChange);
  }
};
const smallerButtonClick = ()=>{
  changeScale(!(parseInt(scaleValue.value, 10) <= MIN_SCALE), ratioOfDecrease);
};

const biggerButtonClick = ()=>{
  changeScale(!(parseInt(scaleValue.value, 10) >= MAX_SCALE), ratioOfIncrease);
};

const scaleToDefault = ()=> scalePreview(DEFAULT_SCALE);

const descriptionField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');


const showOverlay = () => {
  setEffectsSlider();

  scaleToDefault();
  overlay.classList.remove('hidden');
  showModal(closeOnKeydown);
};

const hideOverlay = ()=> {
  form.reset();

  destroySlider();

  overlay.classList.add('hidden');
  hideModal(closeOnKeydown);
  inputField.value = '';
  scaleToDefault();
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


const addFormButtons = ()=>{
  descriptionField.addEventListener('keydown', stopPropagationOnKey);
  hashtagField.addEventListener('keydown', stopPropagationOnKey);
  inputField.addEventListener('change', onFileInputButton);
  cancelButton.addEventListener('click', onCancelButton);

  smallerButton.addEventListener('click', smallerButtonClick);
  biggerButton.addEventListener('click', biggerButtonClick);
};

const initializeUploadForm = () => {
  addFormButtons();
  addSubmitBlocker();
  addValidators();
};


export { descriptionField, hashtagField, initializeUploadForm, picturePreview};
