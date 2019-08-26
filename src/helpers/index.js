import calculate from "./calculate";
import validate from './validate';

const getLastCharacter = text => text[text.length - 1];
const isNumber = value => /^\d$/.test(value);

export {
    getLastCharacter,
    isNumber,
    calculate,
    validate
};