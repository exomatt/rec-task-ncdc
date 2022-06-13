package com.mpernal.recruitmenttask.dto;

import com.mpernal.recruitmenttask.validation.author.AuthorValidation;
import com.mpernal.recruitmenttask.validation.isbn.ISBNValidation;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class BookDto implements IBookDto {
    private Long id;
    @NotNull
    @NotBlank
    private String title;
    @NotNull
    @NotBlank
    @AuthorValidation
    private String author;
    @NotNull
    @NotBlank
    @ISBNValidation
    private String isbn;
}
