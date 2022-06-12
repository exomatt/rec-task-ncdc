package com.mpernal.recruitmenttask.repository;

import com.mpernal.recruitmenttask.model.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    <T> List<T> findAllProjectedBy(Class<T> clazz, Pageable pageable);
}
