import {debounce, getUniqueRandomElements, getSortedElements} from './util.js';
import {renderMiniatures} from './render.js';

const MAX_COUNT_OF_RANDOM = 10;

const filterContainer = document.querySelector('.img-filters');
const defaultButton = filterContainer.querySelector('#filter-default');
const randomButton = filterContainer.querySelector('#filter-random');
const discussedButton = filterContainer.querySelector('#filter-discussed');

const showFilters = ()=> filterContainer.classList.remove('img-filters--inactive');

const comparerByComments = (firstPicture, secondPicture) => {
  const firstLength = secondPicture.comments.length;
  const secondLength = firstPicture.comments.length;
  return firstLength <= secondLength ? -1 : 1;
};

const removeMiniatures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const changeActiveButton = (buttonToAdd)=>{
  const buttonToRemove = document.querySelector('.img-filters__button--active');
  buttonToRemove.classList.remove('img-filters__button--active');
  buttonToAdd.classList.add('img-filters__button--active');
};

const showFilteredMiniatures = (array) => {
  removeMiniatures();
  renderMiniatures(array);
};

const addFilterButtons = (pictures) => {
  showFilters();
  defaultButton.addEventListener('click', debounce(() => {
    showFilteredMiniatures(pictures, defaultButton);
    changeActiveButton(defaultButton);
  }));
  randomButton.addEventListener('click', debounce(() => {
    showFilteredMiniatures(getUniqueRandomElements(pictures, MAX_COUNT_OF_RANDOM));
    changeActiveButton(randomButton);
  }));
  discussedButton.addEventListener('click', debounce(() => {
    showFilteredMiniatures(getSortedElements(pictures,comparerByComments));
    changeActiveButton(discussedButton);
  }));
};

export {addFilterButtons};


