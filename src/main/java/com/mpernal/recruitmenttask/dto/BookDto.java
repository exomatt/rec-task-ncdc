package com.mpernal.recruitmenttask.dto;

import lombok.Data;

@Data
public class BookDto implements IBookDto {
    private Long id;
    private String title;
    private String author;
    private String isbn;
}
