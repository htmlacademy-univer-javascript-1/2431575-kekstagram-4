const upperBound = 25;
const lowerBound = 1;
const upperBoundForLikes = 200;
const lowerBoundForLikes= 15;
const boundsForImg = [1, 6];
const amountOfComments = 30;
const amountOfPhotos = 25;
const ARR_OF_MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Alex','Maria','Oleg','Petr','Sergei'];
const SURNAMES = ['Merser', 'Black', 'Grey', 'Smit', 'Grace'];
const DESCRIPTIONS = ['Моя фотка', 'Вот это кайф, да', 'Я :)','Как вам? ',
  'Это что-то', 'Круть ', 'Потрясающе, да? ', 'Мама я втелевизоре',  'd',
  'f', 'g', 'h', 'c', 'f', 'fdgd', 'sidufvh', 'Ха-ха-ха', '17', '18',
  '19', '20', '21', '22', '23', '24', '25'];

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
const createIdForComm = idCreater();
const createIdForPhotos = idCreater();
const createComment = () => ({
  id: createIdForComm(), //любое число
  avatar: `img/avatar-${getRandomInteger(boundsForImg[0], boundsForImg[1])}.svg`,
  message:getRandomArrayElement(ARR_OF_MESSAGES),
  name:`${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`
});
const arrOfComments = Array.from({length: amountOfComments}, createComment);
const createPhotoDescription = ()=> ({
  id: createIdForPhotos, //от 1 до 25.
  url:`photos/${getRandomInteger(lowerBound, upperBound)}.jpg`, //от 1 до 25.
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(lowerBoundForLikes, upperBoundForLikes), // от 15 до 200.
  comments: getRandomArrayElement(arrOfComments) //массив комментов от 0 до 30, комменты генерятся случайно
});
const photoDescriptions =() =>  Array.from({length: amountOfPhotos}, createPhotoDescription);

photoDescriptions();

