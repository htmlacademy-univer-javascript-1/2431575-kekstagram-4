import { getRandomArrayElement, getRandomInteger, idCreater } from './util.js';

const UPPER_BOUND = 25;
const LOWER_BOUND = 1;
const UPPER_BOUND_FOR_LIKES = 200;
const LOWER_BOUN_FOR_LIKES= 15;
const BOUNDS_FOR_IMG = [1, 6];
const AMOUNT_OF_COMMENTS = 30;
const AMOUNT_OF_PHOTOS = 25;
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


const createIdForComm = idCreater();
const createIdForPhotos = idCreater();
const createComment = () => ({
  id: createIdForComm(), //любое число
  avatar: `img/avatar-${getRandomInteger(BOUNDS_FOR_IMG[0], BOUNDS_FOR_IMG[1])}.svg`,
  message:getRandomArrayElement(ARR_OF_MESSAGES),
  name:`${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`
});
const arrOfComments = ()=> Array.from({length:getRandomInteger(5, AMOUNT_OF_COMMENTS)}, createComment);
const createPhotoDescription = ()=> ({
  id: createIdForPhotos(), //от 1 до 25.
  url:`photos/${getRandomInteger(LOWER_BOUND, UPPER_BOUND)}.jpg`, //от 1 до 25.
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LOWER_BOUN_FOR_LIKES, UPPER_BOUND_FOR_LIKES), // от 15 до 200.
  comments:arrOfComments() //массив комментов от 0 до 30, комменты генерятся случайно
});
const getPhotoDescriptions =() =>  Array.from({length: AMOUNT_OF_PHOTOS}, createPhotoDescription);

export {getPhotoDescriptions};
