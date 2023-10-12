
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
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(0, 25), //любое число
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message:getRandomArrayElement(ARR_OF_MESSAGES),
  name:`${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`
});
const arrOfComments = Array.from({length: 30}, createComment);
const createPhotoDescription = ()=> ({
  id: getRandomInteger(1, 25), //от 1 до 25.
  url:`photos/${getRandomInteger(1, 25)}.jpg`, //от 1 до 25.
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200), // от 15 до 200.
  comments: getRandomArrayElement(arrOfComments) //массив комментов от 0 до 30, комменты генерятся случайно
});
const photoDescriptions = Array.from({length: 25}, createPhotoDescription);


