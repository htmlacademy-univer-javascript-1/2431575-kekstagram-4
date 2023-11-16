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
    picturesFragment.append(createMiniatures(picture));
  });
  picturesList.append(picturesFragment);
};

export {renderMiniatures};
