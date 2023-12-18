import { picturePreview } from './form.js';
const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];
const DEFAULT = EFFECTS[0];
let currEffect = DEFAULT;

const filterItems = document.querySelectorAll('.effects__item');
const sliderLevelValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const isDefault = ()=> currEffect === DEFAULT;
const showSlider = ()=> sliderContainer.classList.remove('hidden');
const hideSlider = ()=> sliderContainer.classList.add('hidden');

const toDefault = ()=>{
  currEffect = DEFAULT;
  picturePreview.style.filter = 'none';
};

const showSliderOrHide = ()=>{
  if (isDefault()){
    hideSlider();
    toDefault();
  }
  else{
    showSlider();
  }
};

const updateSliderOptions = ()=>{
  slider.noUiSlider.updateOptions({
    range : {
      min: currEffect.min,
      max: currEffect.max
    },
    step : currEffect.step,
    start : currEffect.max,
  });
};
const onEffectChange = (evt)=> {
  currEffect = EFFECTS.find((effect)=> effect.name === evt.target.value);
  picturePreview.className = `effects__preview--${currEffect.name}`;
  updateSliderOptions();
  showSliderOrHide();
};
const createSlider = ()=>{
  toDefault();
  noUiSlider.create(slider, {
    range: {
      min : DEFAULT.min,
      max : DEFAULT.max
    },
    step : DEFAULT.step,
    start : DEFAULT.max,
    connect : 'lower'
  });
};
const onSliderUpdateValue = ()=>{
  sliderLevelValue.value = slider.value = slider.noUiSlider.get();
  picturePreview.style.filter = `${currEffect.style}(${slider.value}${currEffect.unit})`;
};

const destroySlider = ()=>{
  if (slider.noUiSlider){
    slider.noUiSlider.destroy();
  }
};

const setEffectsSlider = ()=>{
  destroySlider();
  createSlider();
  hideSlider();
  slider.noUiSlider.on('update', onSliderUpdateValue);
  filterItems.forEach((item)=> item.addEventListener('change', onEffectChange));
};
export {destroySlider, setEffectsSlider};
