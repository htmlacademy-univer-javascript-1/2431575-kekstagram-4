import { showBigPicture } from './bigPicture.js';

const miniaturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const createMiniatures = ({url, likes, description, comments}) => {
  const miniatureElement = miniaturesTemplate.cloneNode(true);
  const miniatureComments = miniatureElement.querySelector('.picture__comments');
  const miniatureLikes = miniatureElement.querySelector('.picture__likes');
  const picture = miniatureElement.querySelector('.picture__img');
  picture.src = url;
  picture.alt = description;
  miniatureComments.textContent = comments.length;
  miniatureLikes.textContent = likes;

  return miniatureElement;
};


const renderMiniatures = (pictures) => {
  pictures.forEach((picture) => {
    const miniature = createMiniatures(picture);
    picturesFragment.append(miniature);
    miniature.addEventListener('click', (evt) =>{
      evt.preventDefault();
      showBigPicture(picture);
    });
  });
  picturesList.append(picturesFragment);
};

const createCommentPattern = ()=> {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = '';
  image.alt = '';
  image.width = 35;
  image.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  newComment.append(image);
  newComment.append(text);
  return newComment;
};

const createComment = ({avatar, name, message})=>{
  const comment = createCommentPattern();
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = (listComments, commentsContainer) => {
  commentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  listComments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentsContainer.append(fragment);
};


export {renderMiniatures, renderComments};
