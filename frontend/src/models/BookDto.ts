export interface BookDto{
    id:number,
    title:string,
    isbn:string,
    author:string
}

export const initialBookDto:BookDto ={
    id:0,
    title:'',
    isbn:'',
    author:'',
}