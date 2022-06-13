import {initialValidation, Validation} from "../utils/Validation";
import {deepCopy, deepMapCopy, isEmpty} from "../utils/CommonUtils";
// @ts-ignore
import {validate} from 'isbn-util';

export interface BookDto {
    id: number,
    title: string,
    isbn: string,
    author: string
}

export const initialBookDto: BookDto = {
    id: 0,
    title: '',
    isbn: '',
    author: '',
}


export const bookValidation: Map<string, Validation> = new Map(
    [
        ["title", deepCopy(initialValidation)],
        ["isbn", deepCopy(initialValidation)],
        ["author", deepCopy(initialValidation)],
    ]
);

const titleCannotBeEmpty = "Title cannot be empty";

const authorCannotBeEmpty = "Author cannot be empty";
const isbnNotValid = "ISBN not valid";
const authorSurNameOrForenameShouldStartWithA = "Author surname or forename should start with A";

export const validateBook = (validation: Map<string, Validation>, book: BookDto): Map<string, Validation> => {
    const {title, isbn, author} = book
    const validationMap = deepMapCopy(validation);

    validationMap.set('title', validateTitle(title, validationMap.get('title')))
    validationMap.set('author', validateAuthor(author, validationMap.get('author')))
    validationMap.set('isbn', validateISBN(isbn, validationMap.get('isbn')))

    return validationMap
}

export const validateTitle = (title: string, validation: Validation) => {
    return validateIfEmpty(title, validation, titleCannotBeEmpty)
}

export const validateAuthor = (author: string, validation: Validation) => {
    const innerValidation = validateIfEmpty(author, validation, authorCannotBeEmpty)
    if (innerValidation.isError) {
        return innerValidation
    }
    return validateIfStartWithA(author, validation, authorSurNameOrForenameShouldStartWithA)
}

export const validateISBN = (isbn: string, validation: Validation) => {
    const innerValidation = validateIfEmpty(isbn, validation, isbnNotValid);
    if (innerValidation.isError) {
        return innerValidation
    }
    return validateIfCorrectISBN(isbn, innerValidation, isbnNotValid)
}

export const validateIfEmpty = (param: string, validation: Validation, errorText: string) => {
    if (isEmpty(param)) {
        validation.isError = true
        validation.errorText = errorText
    } else {
        return deepCopy(initialValidation)
    }
    return validation
}

export const validateIfStartWithA = (author: string, validation: Validation, errorText: string) => {
    const authorParts = author.split(/(\s+)/);
    if (authorParts.some(ap => !isEmpty(ap) && ap.toLowerCase().startsWith('a'))) {
        return deepCopy(initialValidation)
    } else {
        validation.isError = true
        validation.errorText = errorText
    }
    return validation
}

export const validateIfCorrectISBN = (isbn: string, validation: Validation, errorText: string) => {
    if (!isNaN(parseInt(isbn, 10)) && validate(isbn)) {
        return deepCopy(initialValidation)
    } else {
        validation.isError = true
        validation.errorText = errorText
    }
    return validation
}