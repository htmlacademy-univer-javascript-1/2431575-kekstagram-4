const imageWidth = 35;
const imageHeight = 35;

const miniaturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

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

const createCommentPattern = ()=> {
  const newComment = document.createElement('li');
  const text = document.createElement('p');
  const image = document.createElement('img');
  newComment.classList.add('social__comment');
  image.classList.add('social__picture');
  image.src = '';
  image.alt = '';
  image.width = imageWidth;
  image.height = imageHeight;

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

export {createMiniatures, createComment};
