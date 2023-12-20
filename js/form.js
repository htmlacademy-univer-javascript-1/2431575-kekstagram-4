import { showModal, hideModal } from './bigPicture.js';
import {destroySlider, setEffectsSlider} from './filters.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const FULL_PRECENT = 100;
const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const RATIO_OF_INCREASE = 1;
const RATIO_OF_DECREASE = -1;

const form = document.querySelector('.img-upload__form');
const descriptionField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');

const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const inputField = document.querySelector('.img-upload__input');

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const fileInput = document.querySelector('input[type=file]');
const previewOfEffects = document.querySelectorAll('.effects__preview');

const isValidType = (file)=>{
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((end)=> fileName.endsWith(end));
};

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const srcOfPreview = URL.createObjectURL(file);
  if (file && isValidType(file)) {
    picturePreview.src = srcOfPreview;
    previewOfEffects.forEach((previewOfEffect)=>{
      previewOfEffect.style.backgroundImage = `url(${srcOfPreview})`;
    });
  }
});

const scalePreview = (value) => {
  const scale = value / FULL_PRECENT;
  picturePreview.style.transform = `scale(${scale})`;
  scaleValue.value = `${value}%`;
};

const changeScale = (border, ratioOfChange)=>{
  if (border){
    scalePreview(parseInt(scaleValue.value, 10) + SCALE_STEP * ratioOfChange);
  }
};
const onSmallerButtonClick = ()=>{
  changeScale(!(parseInt(scaleValue.value, 10) <= MIN_SCALE), RATIO_OF_DECREASE);
};

const onBiggerButtonClick = ()=>{
  changeScale(!(parseInt(scaleValue.value, 10) >= MAX_SCALE), RATIO_OF_INCREASE);
};

const scaleToDefault = ()=> scalePreview(DEFAULT_SCALE);

const showOverlay = () => {
  setEffectsSlider();
  scaleToDefault();
  overlay.classList.remove('hidden');
  showModal(closeOnKeydown);
};
const resetForm = ()=>{
  form.reset();
  scaleToDefault();
  destroySlider();
};
const hideOverlay = ()=> {
  inputField.value = '';
  overlay.classList.add('hidden');
  hideModal(closeOnKeydown);
};

function closeOnKeydown (evt) {
  if (evt.key === 'Escape'){ //
    evt.preventDefault();   //
    hideOverlay();
    resetForm();       // что-то нужно объявлять раньше другого, а оставшуюся объявлять через function
  }                        // чтобы была возможность использовать после объявления
}

const onCancelButton = ()=>{
  hideOverlay();
};

const onFileInputButton = () => {
  showOverlay();
};

const onKeyStopPropagation = (evt)=>{
  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
};

const initializeUploadForm = ()=>{
  descriptionField.addEventListener('keydown', onKeyStopPropagation);
  hashtagField.addEventListener('keydown', onKeyStopPropagation);
  inputField.addEventListener('change', onFileInputButton);
  cancelButton.addEventListener('click', onCancelButton);

  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

export { descriptionField, hashtagField, initializeUploadForm, picturePreview, hideOverlay, form, resetForm};
