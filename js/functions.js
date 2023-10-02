const getStrLength = (str, maxLength) => str.length <= maxLength;

const checkPalindrom = (str) => {
  const strInArray = str.toLowerCase().replaceAll(' ', '').split('');
  const middleOfArray = Math.floor(str.length/2);
  for (let i = 0; i < middleOfArray; i++) {
    if (strInArray[i] !== strInArray[strInArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
//Доп задание
const getDigits = (str) => {
  let result = '';
  if (typeof str === 'number'){
    return parseInt(Math.abs(str).toString().replace('.', ''), 10);
  }
  const strInArray = str.toLowerCase().replaceAll(' ', '').split('');
  for(let i = 0; i < strInArray.length; i++){
    const typeNum = Number(strInArray[i]);
    if (!isNaN(typeNum)){
      result += typeNum;
    }
  }
  return result === '' ? NaN: result;
};


