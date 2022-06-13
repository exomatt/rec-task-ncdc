package com.mpernal.recruitmenttask.validation.isbn;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ISBNCodeValidator implements ConstraintValidator<ISBNValidation, String> {
    public boolean isValid(String isbn, ConstraintValidatorContext cxt) {
        if (isbn == null || isbn.isEmpty() || isbn.isBlank())
            return false;
        else {
            return isNumeric(isbn);
        }
    }

    public static boolean isNumeric(String str) {
        return str.matches("^\\d{10}(\\d{3})?$");
    }
}