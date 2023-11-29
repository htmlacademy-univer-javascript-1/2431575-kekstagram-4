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
  const normalComments = false;
  const hiddenComments = true;
  commentsContainer.innerHTML = '';
  for (let i = 0; i < listComments.length; i++){
    let comment ='';
    if (i < loadCount){
      comment = createComment(listComments[i], normalComments);
    }
    else{
      comment = createComment(listComments[i], hiddenComments);
    }
    fragment.append(comment);
  }
  commentsContainer.append(fragment);
};

export {renderMiniatures, renderComments};
