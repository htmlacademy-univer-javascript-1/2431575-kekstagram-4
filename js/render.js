import { showBigPicture, commentsContainer } from './bigPicture.js';
import { createMiniatures, createComment } from './objectCreator.js';

const picturesList = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

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

const renderComments = (listComments, loadCount) => {
  const fragment = document.createDocumentFragment();
  commentsContainer.innerHTML = '';
  for (let i = 0; i < loadCount; i++){
    fragment.append(createComment(listComments[i]));
  }
  commentsContainer.append(fragment);
};

export {renderMiniatures, renderComments};
