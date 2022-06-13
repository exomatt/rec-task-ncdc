import {Button, Card, Grid} from "@mui/material";
import {StyledH3} from "../../components/text/StyledH";
import BooksTable from "../../components/table/BooksTable";
import {BookDto} from "../../models/BookDto";
import React, {createRef, useState} from "react";
import BookDialog from "../../components/dialogs/BookDialog";
import {useSnackbar} from "notistack";
import {ERROR_DELETE_BOOK, ERROR_SAVE_BOOK, SUCCESS_DELETED_BOOK, SUCCESS_SAVED_BOOK} from "../../utils/Messages";
import BookService from "../../services/BookService";

const BooksPage = () => {
    const [toEditBook, setToEditBook] = useState<BookDto | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const {enqueueSnackbar} = useSnackbar();
    const tableRef = createRef();

    const onDelete = async (book: BookDto) => {
        try {
            await BookService.deleteBook(book.id)
            enqueueSnackbar(SUCCESS_DELETED_BOOK, {variant: 'success'})
            refreshTable()
        } catch (error) {
            enqueueSnackbar(ERROR_DELETE_BOOK, {variant: 'error'})
        } finally {
            setOpenDialog(false)
        }
    }

    const onEdit = (book: BookDto) => {
        setToEditBook(book)
        setOpenDialog(true)
    }

    const onAdd = () => {
        setToEditBook(null)
        setOpenDialog(true)
    }

    const onSave = async (book: BookDto) => {
        try {
            if (book.id === 0) {
                await BookService.createBook(book)
            } else {
                await BookService.updateBook(book)
            }
            enqueueSnackbar(SUCCESS_SAVED_BOOK, {variant: 'success'})
            refreshTable()
        } catch (error) {
            enqueueSnackbar(ERROR_SAVE_BOOK, {variant: 'error'})
        } finally {
            setOpenDialog(false)
        }
    }

    const refreshTable = () => {
        // @ts-ignore
        tableRef?.current?.onQueryChange()
    }

    return (
        <Card style={{margin: '10px'}}>
            <Grid container spacing={2} alignContent={"center"} direction={"column"} style={{margin: '10px'}}>
                <Grid item xs={12}>
                    <StyledH3>Books</StyledH3>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Button variant="contained" onClick={onAdd}>Add book</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <BooksTable onDelete={onDelete} onEdit={onEdit} tableRef={tableRef}/>
                </Grid>
            </Grid>
            <BookDialog open={openDialog}
                        close={() => setOpenDialog(false)}
                        onSave={onSave}
                        selectedBook={toEditBook}/>
        </Card>
    )
}

export default BooksPage