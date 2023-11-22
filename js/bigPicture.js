import { renderComments } from './render.js';
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const countOfComments = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const counter = countOfComments.textContent;
let currCount = Number(counter.slice(0,1));
const maxCount = countOfComments.querySelector('span');
const maxCountTextContent = maxCount.textContent;

const hideBigPicture = ()=>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnKey);
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
};

const reloadCounters = ()=> {
  countOfComments.textContent = `${currCount} из ${maxCountTextContent}`;
};

const showBigPicture = (miniature) => {
  bigPicture.classList.remove('hidden');
  commentsLoaderButton.addEventListener('click', ()=>
  {
    if (currCount !== Number(maxCountTextContent)){
      currCount += 5;
    }
    reloadCounters();
    renderComments(miniature.comments, currCount);

  });
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnKey);
  getPictureDetails(miniature);
  renderComments(miniature.comments, currCount);
};

export {showBigPicture, commentsContainer};
