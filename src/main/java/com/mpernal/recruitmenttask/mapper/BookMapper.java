package com.mpernal.recruitmenttask.mapper;

import com.mpernal.recruitmenttask.dto.BookDto;
import com.mpernal.recruitmenttask.model.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

@Mapper
public interface BookMapper {

    BookMapper INSTANCE = Mappers.getMapper(BookMapper.class);

    @Mapping(target = "id", ignore = true)
    Book dtoToNewEntity(BookDto bookDto);

    @Mapping(target = "id", ignore = true)
    void dtoToExistingEntity(BookDto bookDto, @MappingTarget Book book);

    BookDto entityToDto(Book book);

}
