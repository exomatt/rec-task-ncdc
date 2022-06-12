import {BookDto} from "../../models/BookDto";
import BookService from "../../services/BookService";
import MaterialTable, {Action, Query, QueryResult} from "@material-table/core";

interface BooksTableProps {
    onDelete: (book: BookDto) => void;
    onEdit: (book: BookDto) => void;
}

const BooksTable = (props: BooksTableProps) => {
    const {onEdit, onDelete} = props
    const columns = [
        {
            title: 'Author',
            field: 'author',
        },
        {
            title: 'Title',
            field: 'title',
        },
        {
            title: 'ISBN',
            field: 'isbn',
        }
    ]

    const actions :Action<BookDto>[] = [
        {
            icon: 'edit',
            tooltip: 'Edit book',
            onClick: (event: any, rowData: BookDto|BookDto[]) => onEdit(rowData as BookDto)
        },
        {
            icon: 'delete',
            tooltip: 'Delete book',
            onClick: (event: any, rowData: BookDto|BookDto[]) => onDelete(rowData as BookDto ),
        }
    ]

    const loadData = async (query: Query<BookDto>): Promise<QueryResult<BookDto>> => {
        const response = await BookService.getBooks(query)
        return new Promise((resolve) => {
            resolve({
                data: response.result,
                page: query.page,
                totalCount: response.totalCount,
            })
        })
    }


    return (
        <MaterialTable
            title={"Books records"}
            columns={columns}
            data={(query: Query<BookDto>) => loadData(query)}
            style={{minWidth: '800px'}}
            actions={actions}
        />

    )
}

export default BooksTable