import {Button, Card, Grid} from "@mui/material";
import {StyledH3} from "../../components/text/StyledH";
import BooksTable from "../../components/table/BooksTable";
import {BookDto} from "../../models/BookDto";
import {useState} from "react";
import BookDialog from "../../components/dialogs/BookDialog";
import {useSnackbar} from "notistack";

const BooksPage = ()=>{
    const [toEditBook, setToEditBook] = useState<BookDto|null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const {enqueueSnackbar} = useSnackbar();

    const onDelete = (book :BookDto)=>{

    }

    const onEdit = (book :BookDto)=>{
        setToEditBook(book)
        setOpenDialog(true)
    }

    const onAdd =()=>{
        setToEditBook(null)
        setOpenDialog(true)
    }

    const onSave =(book :BookDto)=>{

    }

    return (
        <Card style={{margin:'10px'}} >
            <Grid container spacing={2} alignContent={"center"} direction={"column"} style={{margin:'10px'}}>
                <Grid item xs={12}>
                    <StyledH3>Books</StyledH3>
                </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        <Button variant="contained" onClick={onAdd}>Add book</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <BooksTable onDelete={onDelete} onEdit={onEdit}/>
                </Grid>
            </Grid>
            <BookDialog open={openDialog}
                        close={()=>setOpenDialog(false)}
                        onSave={onSave}
                        selectedBook={toEditBook}/>
        </Card>
    )
}

export default BooksPage