import {BookDto} from "../models/BookDto";
import {api} from "../config/api";
import {PaginatedDataWrapper} from "../models/PaginatedDataWrapper";
import {Query} from "@material-table/core";

class BookService {

    static getBooks = async (query: Query<BookDto>): Promise<PaginatedDataWrapper<BookDto>> => {
        const response = await api.get("/book/all", {
            params: {
                page: query.page,
                pageSize: query.pageSize,
                orderBy: query.orderBy,
                orderDirection: query.orderDirection
            }
        })
        return response.data
    }

    static createBook = async (bookDto: BookDto): Promise<void> => {
        return await api.post("/book/", bookDto)
    }

    static updateBook = async (bookDto: BookDto): Promise<void> => {
        return await api.put("/book/", bookDto)
    }

    static deleteBook = async (bookId: number): Promise<void> => {
        return await api.delete(`/book/${bookId}`)
    }
}

export default BookService