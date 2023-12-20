import { renderComments } from './render.js';

const START_COUNTER = 5;
const COUNTER_INCREASE = 5;

const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const countOfComments = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const counter = countOfComments.textContent;
let currCount = Number(counter.slice(0,1));
const maxCount = countOfComments.querySelector('span');


const showModal = (closeFunc) =>{
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeFunc);
};

const hideModal = (closeFunc) => {
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeFunc);
};

const showComments = (remainToShow)=>{
  const comments = document.querySelectorAll('.social__comment.hidden');
  for (let i = 0; i < remainToShow; i++){
    comments[i].classList.remove('hidden');
  }
};
const reloadCounters = ()=> {
  countOfComments.textContent = `${currCount} из ${maxCount.textContent}`;
};

const resetCounter = ()=>{
  currCount = START_COUNTER;
};

const hideLoader = ()=>{
  commentsLoaderButton.classList.add('hidden');
};
const openLoader = ()=>{
  commentsLoaderButton.classList.remove('hidden');
};

const checkLoaderButton = ()=>{
  if (currCount === Number(maxCount.textContent)){
    hideLoader();
  }
  else{
    openLoader();
  }
};

const onCommentsLoad = () =>
{
  const max = Number(maxCount.textContent);
  const remain = max - currCount;
  let increase = COUNTER_INCREASE;
  if (currCount + COUNTER_INCREASE > max){
    currCount += remain;
    increase = remain;
  }
  else if (currCount !== max){
    currCount += COUNTER_INCREASE;
  }
  checkLoaderButton();
  reloadCounters();
  showComments(increase);
};

const hideBigPicture = ()=>{
  bigPicture.classList.add('hidden');
  hideModal(closeOnKey);
  commentsLoaderButton.removeEventListener('click', onCommentsLoad);
};

function closeOnKey (evt) {
  if (evt.key === 'Escape'){ //в hideBigPicture должен быть closeOnKey
    evt.preventDefault();   // и в closeOnKey должен быть hideBigPicture
    hideBigPicture();       // что-то нужно объявлять раньше другого, а оставшуюся объявлять через function
  }                        // чтобы была возможность использовать после объявления
}
const closeButtonOnClick = ()=>{
  hideBigPicture();
};

cancelButton.addEventListener('click', closeButtonOnClick);

const getPictureDetails = ({url, likes, description, comments})=> {
  const image = bigPicture.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  maxCount.textContent = comments.length;
  reloadCounters();
  checkLoaderButton();
};

const showBigPicture = (miniature) => {
  resetCounter();
  bigPicture.classList.remove('hidden');
  showModal(closeOnKey);
  commentsLoaderButton.addEventListener('click', onCommentsLoad);
  getPictureDetails(miniature);
  renderComments(miniature.comments, currCount);
};

export {showBigPicture, commentsContainer, showModal, hideModal};
