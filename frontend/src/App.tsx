import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookPage from "./pages/book details/BookPage";
import BooksPage from "./pages/books/BooksPage";
import {Container} from "@mui/material";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <div className="App">
            <SnackbarProvider maxSnack={3}>

                <Container maxWidth="xl">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<BooksPage/>}>
                                <Route path="book/:bookId" element={<BookPage/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </SnackbarProvider>

        </div>

    );
}

export default App;
