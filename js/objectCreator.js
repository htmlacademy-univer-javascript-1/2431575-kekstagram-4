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

const createCommentPattern = (hidden)=> {
  const newComment = document.createElement('li');
  const text = document.createElement('p');
  const image = document.createElement('img');
  newComment.classList.add('social__comment');
  if (hidden){
    newComment.classList.add('hidden');
  }
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

const createComment = ({avatar, name, message}, hidden)=>{
  const comment = createCommentPattern(hidden);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};
const createNetworkAlert = ()=>{
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  return alertContainer;
};

const createUploadAlert = (alertTamplate)=>{
  const alertContainer = alertTamplate.cloneNode(true);
  document.body.append(alertContainer);
  const button = alertContainer.querySelector('button');
  const closeSection = (event)=> {
    const alertMessage = alertContainer.querySelector('.success__inner');
    if (alertMessage && !alertContainer.querySelector('.success__inner').contains(event.target)) {
      alertContainer.remove();
      document.removeEventListener('click', closeSection);
    }
  };
  button.addEventListener('click', ()=> alertContainer.remove());
  document.addEventListener('click', closeSection);
  document.addEventListener('keydown', (evt)=>{
    if (evt.key === 'Escape'){
      evt.preventDefault();
      alertContainer.remove();
    }
  });
};


export {createMiniatures, createComment, createNetworkAlert, createUploadAlert};
