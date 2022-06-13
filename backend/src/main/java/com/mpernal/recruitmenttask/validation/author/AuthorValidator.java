package com.mpernal.recruitmenttask.validation.author;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Arrays;

public class AuthorValidator implements ConstraintValidator<AuthorValidation, String> {
    public boolean isValid(String author, ConstraintValidatorContext cxt) {
        if (author == null || author.isEmpty() || author.isBlank())
            return false;
        else {
            String[] elements = author.split("/(\\s+)/");
            return Arrays.stream(elements).anyMatch(p -> p.toLowerCase().startsWith("a"));
        }
    }
}