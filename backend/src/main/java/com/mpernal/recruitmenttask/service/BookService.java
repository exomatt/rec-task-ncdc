package com.mpernal.recruitmenttask.service;

import com.mpernal.recruitmenttask.dto.BookDto;
import com.mpernal.recruitmenttask.dto.IBookDto;
import com.mpernal.recruitmenttask.dto.PaginatedDataWrapper;
import com.mpernal.recruitmenttask.mapper.BookMapper;
import com.mpernal.recruitmenttask.model.Book;
import com.mpernal.recruitmenttask.repository.BookRepository;
import com.mpernal.recruitmenttask.utils.SQLUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public PaginatedDataWrapper<IBookDto> findAll(Integer page, Integer pageSize, String orderBy, String orderDirection) {
        List<IBookDto> books = bookRepository.findAllProjectedBy(IBookDto.class, SQLUtils.getPageRequest(page, pageSize, orderBy, orderDirection));
        return new PaginatedDataWrapper<>(books, bookRepository.count());
    }

    public BookDto findById(Long bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isEmpty()) {
            throw new RuntimeException("No book with id: " + bookId + " found");
        }
        BookMapper bookMapper = BookMapper.INSTANCE;
        return bookMapper.entityToDto(optionalBook.get());
    }

    public BookDto save(BookDto bookDto) {
        BookMapper bookMapper = BookMapper.INSTANCE;
        Book book = bookMapper.dtoToNewEntity(bookDto);
        bookRepository.saveAndFlush(book);
        return bookMapper.entityToDto(book);
    }

    public BookDto update(BookDto bookDto) {
        Optional<Book> optionalBook = bookRepository.findById(bookDto.getId());
        if (optionalBook.isEmpty()) {
            return null;
        }

        Book book = optionalBook.get();
        BookMapper mapper = BookMapper.INSTANCE;
        mapper.dtoToExistingEntity(bookDto, book);
        bookRepository.saveAndFlush(book);

        return mapper.entityToDto(book);
    }

    public void delete(Long bookId) {
        if (!bookRepository.existsById(bookId)) {
            throw new RuntimeException("No book with id: " + bookId + " found");
        }
        bookRepository.deleteById(bookId);
    }
}
