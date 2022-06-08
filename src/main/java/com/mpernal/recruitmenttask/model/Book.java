package com.mpernal.recruitmenttask.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "BOOK")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID", nullable = false, unique = true)
    private Long id;

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "AUTHOR", nullable = false)
    private String author;

    @Column(name = "ISBN", length = 13, nullable = false, unique = true)
    private String isbn;

}
