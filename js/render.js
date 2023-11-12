const MINIATURES_TEMPLATE = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const PICTURES_LIST = document.querySelector('.pictures');
const PICTURES_FRAGMENT = document.createDocumentFragment();

const createMiniatures = ({url, likes, description, comments}) => {
  const miniatureElement = MINIATURES_TEMPLATE.cloneNode(true);
  const miniatureComments = miniatureElement.querySelector('.picture__comments');
  const miniatureLikes = miniatureElement.querySelector('.picture__likes');
  const picture = miniatureElement.querySelector('.picture__img');
  picture.src = url;
  picture.alt = description;
  miniatureComments.textContent = comments;
  miniatureLikes.textContent = likes;

  return miniatureElement;
};

const renderMiniatures = (pictures) => {
  pictures.forEach((picture) => {
    PICTURES_FRAGMENT.append(createMiniatures(picture));
  });
  PICTURES_LIST.append(PICTURES_FRAGMENT);
};

export {renderMiniatures};
