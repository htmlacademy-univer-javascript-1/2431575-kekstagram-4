const ALERT_SHOW_TIME = 2500;
const NETWORK_MESSAGE = 'Не удалось получить данные c сервера';
const error = document.querySelector('#error')
  .content
  .querySelector('.error');
const success = document.querySelector('#success')
  .content
  .querySelector('.success');
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const idCreater = () =>{
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
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

const showAlert = (message = NETWORK_MESSAGE) => {
  const alertContainer = createNetworkAlert();
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
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


export {getRandomArrayElement, idCreater, getRandomInteger, createUploadAlert, error, success, showAlert };
