import {VALIDATION_ERROR} from "./Messages";

export interface Validation {
    isError: boolean,
    errorText: string,
}

export const initialValidation: Validation = {
    errorText: '',
    isError: false
}

export const hasError = (validators: Map<string, Validation>): boolean => {
    for (let value of Array.from(validators.values())) {
        if (value.isError)
            return true
    }
    return false
}


export const getErrorText = (validators: Map<string, Validation>, fieldName: string): string => {
    if (!validators || !validators.has(fieldName))
        return ""
    const val = validators.get(fieldName);
    return val ? val.errorText : ""
}

export const isError = (validators: Map<string, Validation>, fieldName: string): boolean => {
    if (!validators || !validators.has(fieldName))
        return false
    const val = validators.get(fieldName);
    return val ? val.isError : false
}

export const getValidationErrorMessage = () => {
    return VALIDATION_ERROR
}