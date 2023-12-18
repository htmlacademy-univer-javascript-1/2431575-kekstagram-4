import {getUniqueRandomElements, getSortedElements} from './util.js';


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

const changeActiveButton = (buttonToAdd)=>{
  const buttonToRemove = document.querySelector('.img-filters__button--active');
  buttonToRemove.classList.remove('img-filters__button--active');
  buttonToAdd.classList.add('img-filters__button--active');
};

const showFilteredMiniatures = (array, callback) => {
  callback(array);
};

const addFilterButtons = (pictures, callback) => {
  showFilters();
  defaultButton.addEventListener('click', () => {
    changeActiveButton(defaultButton);
    showFilteredMiniatures(pictures, callback);
  });
  randomButton.addEventListener('click', () => {
    changeActiveButton(randomButton);
    showFilteredMiniatures(getUniqueRandomElements(pictures, MAX_COUNT_OF_RANDOM), callback);
  });
  discussedButton.addEventListener('click', () => {
    changeActiveButton(discussedButton);
    showFilteredMiniatures(getSortedElements(pictures,comparerByComments), callback);
  });
};

export {addFilterButtons};


