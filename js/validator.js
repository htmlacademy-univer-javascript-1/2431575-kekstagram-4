import {descriptionField, hashtagField } from './form.js';
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_MAX_COUNT = 5;
const hashTagRegular = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});
const checkCommentLength = (value) => value.length <= COMMENT_MAX_LENGTH;

const getListTags = (value) => value.trim().split(' ').filter((hashTag) => Boolean(hashTag.length));
const normalizeTags = (listOfTags)=> getListTags(listOfTags).map((hashTag)=> hashTag.toLowerCase());
const checkHashTagCount = (value) => getListTags(value).length <= HASHTAG_MAX_COUNT;
const checkHashTagUnique = (value)=> normalizeTags(value).length === new Set(normalizeTags(value)).size;
const checkHashTagValid = (value) => getListTags(value).every((hashTag) => hashTagRegular.test(hashTag));


/*pristine.addValidator(descriptionField, checkCommentLength, `Длина комментаря не может превышать ${COMMENT_MAX_LENGTH} символов`);

pristine.addValidator(hashtagField, checkHashTagCount, `Хештег не может быть больше ${HASHTAG_MAX_COUNT}`, 3, true);
pristine.addValidator(hashtagField, checkHashTagUnique, 'Хештеги должны быть уникальны', 1, true);
pristine.addValidator(hashtagField, checkHashTagValid, 'Нарушено правило составления хештега', 2, true);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()){
    evt.preventDefault();
  }
});*/

const addSubmitBlocker = ()=> {
  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()){
      evt.preventDefault();
    }
  });
};
const addValidators = ()=> {
  pristine.addValidator(descriptionField, checkCommentLength, `Длина комментаря не может превышать ${COMMENT_MAX_LENGTH} символов`);

  pristine.addValidator(hashtagField, checkHashTagCount, `Хештег не может быть больше ${HASHTAG_MAX_COUNT}`, 3, true);
  pristine.addValidator(hashtagField, checkHashTagUnique, 'Хештеги должны быть уникальны', 1, true);
  pristine.addValidator(hashtagField, checkHashTagValid, 'Нарушено правило составления хештега', 2, true);
};
export {addValidators, addSubmitBlocker, form};
