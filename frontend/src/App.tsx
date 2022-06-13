import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BooksPage from "./pages/books/BooksPage";
import {Container} from "@mui/material";
import {SnackbarProvider} from "notistack";
import NotFound from "./pages/errors/NotFound";

function App() {
    return (
        <div className="App">
            <SnackbarProvider maxSnack={3}
                              anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                              }}>

                <Container maxWidth="xl">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<BooksPage/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </SnackbarProvider>

        </div>

    );
}

export default App;
