import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookPage from "./pages/book details/BookPage";
import BooksPage from "./pages/books/BooksPage";
import {Container} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BooksPage/>}>
                            <Route path="book/:bookId" element={<BookPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
