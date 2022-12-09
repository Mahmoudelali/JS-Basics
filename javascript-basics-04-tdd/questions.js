
const stringSize = (text) => {
    return text.length;
}

//there's something wrong with the settings

const replaceCharacterE = (text) => {
    const result = text.replace('e', ' ');
    return result;
}
const concatString = (text1, text2) => {
    return text1 + text2
}
const showChar5 = (text) => {
    return text[4]
}
const showChar9 = (text) => {
    const result = text.slice(0, 9);
    return result;
}
const toCapitals = (text) => {
    let newText = text.toUpperCase()
    return newText
}
const toLowerCase = (text) => {
    let newText = text.toLowerCase()
    return newText
}
const removeSpaces = (text) => {
    const result = text.trim();
    return result;
}
const IsString = (text) => {
    return typeof text
}

const getExtension = (text) => {
    const result = text.split('.').pop();
    return result;
}
const countSpaces = (text) => {
    const result = text.split(" ").length - 1;
    return result;
}
const InverseString = (text) => {
    const result = text.split("").reverse().join("");
    return result;
}

const power = (x, y) => {
    return Math.pow(x, y)
    // or x **y
}
const absoluteValue = (num) => {
    const result = Math.abs(num);
    return result;
}
const absoluteValueArray = (array) => {
    const result = array.map(Math.abs);
    return result;
}
const circleSurface = (radius) => {
    const result = Math.round(Math.PI * Math.pow(radius, 2));
    return result;
}
const hypothenuse = (ab, ac) => {
    const result = Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
    return result;
}
const BMI = (weight, height) => {
    const result = Number((weight / (height * height)).toFixed(2));
    return result;
}

const createLanguagesArray = () => {
    const language = ["Html", "CSS", "Java", "PHP"];
    return language;
}

const createNumbersArray = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
}

const replaceElement = (languages) => {
    languages.splice(2, 1, "Javascript");
    return languages;
}

const addElement = (languages) => {
    languages.splice(languages.length, 0, "Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.splice(0, 0, -2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',')
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();

}

const invertArr = (social_arr) => {
    return social_arr.reverse()
}