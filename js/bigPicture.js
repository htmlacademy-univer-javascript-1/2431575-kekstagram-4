import { renderComments } from './render.js';

const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const countOfComments = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const hideBigPicture = ()=>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeOnKey = (evt)=> {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    hideBigPicture();
  }
};

const closeButtonOnClick = ()=>{
  hideBigPicture();
};

const getPictureDetails = ({url, likes, description})=> {
  const image = bigPicture.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

cancelButton.addEventListener('click', closeButtonOnClick);

const showBigPicture = (miniature) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  countOfComments.classList.add('hidden');
  document.addEventListener('keydown', closeOnKey);
  getPictureDetails(miniature);
  renderComments(miniature.comments, commentsContainer);
};

export {showBigPicture};
