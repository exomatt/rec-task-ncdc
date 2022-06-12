import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {BookDto, initialBookDto} from "../../models/BookDto";

interface BookDialogProps {
    open: boolean;
    close: () => void;
    onSave: (book: BookDto) => void;
    selectedBook: BookDto | null;
}

const BookDialog = (props: BookDialogProps) => {
    const {open, close, onSave, selectedBook} = props
    const [innerBook, setInnerBook] = useState<BookDto>(initialBookDto);


    const onSaveClick = () => {
    }

    const onBlur = () => {

    }

    const onChange = (field: string, value: string) => {
        setInnerBook((prevState) => ({...prevState, [field]: value}))
    }

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>{selectedBook ? "Edit book" : "Add book"}</DialogTitle>
            <DialogContent>
                <Grid container direction={'column'} spacing={2} style={{marginTop:'5px'}}>
                    <Grid item>
                        <TextField
                            required
                            id="author"
                            label="Author"
                            value={innerBook.author}
                            onChange={(event) => onChange('author', event.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="title"
                            label="Title"
                            value={innerBook.title}
                            onChange={(event) => onChange('title', event.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="isbn"
                            label="ISBN"
                            value={innerBook.isbn}
                            onChange={(event) => onChange('isbn', event.target.value)}
                        />
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