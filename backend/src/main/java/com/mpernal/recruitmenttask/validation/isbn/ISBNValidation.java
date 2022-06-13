package com.mpernal.recruitmenttask.validation.isbn;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.PARAMETER;

@Target({FIELD, PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = ISBNCodeValidator.class)
public @interface ISBNValidation {
    public String message() default "ISBN is not valid";

    public Class<?>[] groups() default {};

    public Class<? extends Payload>[] payload() default {};
}