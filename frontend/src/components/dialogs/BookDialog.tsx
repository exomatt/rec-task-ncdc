import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Tooltip} from "@mui/material";
import {useEffect, useState} from "react";
import {BookDto, bookValidation, initialBookDto, validateBook} from "../../models/BookDto";
import {getErrorText, getValidationErrorMessage, hasError, isError, Validation} from "../../utils/Validation";
import {useSnackbar} from "notistack";

interface BookDialogProps {
    open: boolean;
    close: () => void;
    onSave: (book: BookDto) => void;
    selectedBook: BookDto | null;
}

const BookDialog = (props: BookDialogProps) => {
    const {open, close, onSave, selectedBook} = props
    const [innerBook, setInnerBook] = useState<BookDto>(initialBookDto);
    const [validation, setValidation] = useState<Map<string, Validation>>(bookValidation);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (selectedBook && selectedBook.id !== 0) {
            setInnerBook(selectedBook)
        } else {
            setInnerBook(initialBookDto)
        }

    }, [selectedBook])

    const onSaveClick = () => {
        if (validate()) {
            enqueueSnackbar(getValidationErrorMessage(), {variant: 'warning'})
            return
        }
        onSave(innerBook)
    }

    const onBlur = () => {
        validate()
    }

    const validate = () => {
        const validatedMap: Map<string, Validation> = validateBook(validation, innerBook)
        setValidation(validatedMap)
        return hasError(validatedMap)
    }

    const onChange = (field: string, value: string) => {
        setInnerBook((prevState) => ({...prevState, [field]: value}))
    }

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>{selectedBook ? "Edit book" : "Add book"}</DialogTitle>
            <DialogContent>
                <Grid container direction={'column'} spacing={2} style={{marginTop: '5px'}}>
                    <Grid item>
                        <Tooltip title={'Forename or surname should start with letter A'}>
                            <TextField
                                required
                                id="author"
                                name="author"
                                label="Author"
                                value={innerBook.author}
                                onBlur={onBlur}
                                error={isError(validation, 'author')}
                                helperText={getErrorText(validation, 'author')}
                                onChange={(event) => onChange('author', event.target.value)}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="title"
                            name="title"
                            label="Title"
                            onBlur={onBlur}
                            value={innerBook.title}
                            onChange={(event) => onChange('title', event.target.value)}
                            error={isError(validation, 'title')}
                            helperText={getErrorText(validation, 'title')}
                        />
                    </Grid>
                    <Grid item>
                        <Tooltip title={'Only numbers are accepted'}>
                            <TextField
                                required
                                id="isbn"
                                name="isbn"
                                label="ISBN"
                                value={innerBook.isbn}
                                onBlur={onBlur}
                                error={isError(validation, 'isbn')}
                                helperText={getErrorText(validation, 'isbn')}
                                onChange={(event) => onChange('isbn', event.target.value)}
                            />
                        </Tooltip>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button variant="contained" onClick={onSaveClick}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BookDialog