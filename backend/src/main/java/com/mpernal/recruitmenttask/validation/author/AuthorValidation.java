package com.mpernal.recruitmenttask.validation.author;

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
@Constraint(validatedBy = AuthorValidator.class)
public @interface AuthorValidation {
    public String message() default "Author field should contain a surname or first name beginning with A";

    public Class<?>[] groups() default {};

    public Class<? extends Payload>[] payload() default {};
}