package com.mpernal.recruitmenttask.controller;

import com.mpernal.recruitmenttask.dto.BookDto;
import com.mpernal.recruitmenttask.dto.IBookDto;
import com.mpernal.recruitmenttask.dto.PaginatedDataWrapper;
import com.mpernal.recruitmenttask.service.BookService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @Operation(summary = "Get all books")
    @GetMapping("/all")
    public ResponseEntity<PaginatedDataWrapper<IBookDto>> getAll(@RequestParam Integer page,
                                                                 @RequestParam Integer pageSize,
                                                                 @RequestParam(required = false) String orderBy,
                                                                 @RequestParam(required = false) String orderDirection){
        return ResponseEntity.ok(bookService.findAll(page, pageSize, orderBy, orderDirection));
    }

    @Operation(summary = "Get book by ID")
    @GetMapping("/{bookId}")
    public ResponseEntity<BookDto> getById(@PathVariable Long bookId){
        return ResponseEntity.ok(bookService.findById(bookId));
    }

    @Operation(summary = "Create new book")
    @PostMapping("/")
    public ResponseEntity<BookDto> saveBook(@RequestBody BookDto bookDto){
        return ResponseEntity.ok(bookService.save(bookDto));
    }

    @Operation(summary = "Update book")
    @PutMapping("/")
    public ResponseEntity<BookDto> updateBook(@RequestBody BookDto bookDto){
        return ResponseEntity.ok(bookService.update(bookDto));
    }

    @Operation(summary = "Delete book by ID")
    @ApiResponses()
    @DeleteMapping("/{bookId}")
    public ResponseEntity<BookDto> deleteBook(@PathVariable Long bookId){
        bookService.delete(bookId);
        return ResponseEntity.ok().build();
    }
}
