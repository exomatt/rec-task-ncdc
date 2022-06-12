
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
}

export default BookService