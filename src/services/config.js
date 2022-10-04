import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://api-laravel.test/api'
})


let apiLib = {
    //Autores
    createAutor: (autorObj) =>{
        return http.post('/autores' ,autorObj)
    },
    getAutores: () =>{
        return http.get('/autores')
    },
    deleteAutor: (idAutor) =>{
        return http.delete(`/autores/${idAutor}`)
    },
    updateAutor: (idAutor, autorObj) =>{
        return http.put(`/autores/${idAutor}`, autorObj)
    },

    //Livros
    getLivros: () => {
        return http.get('/livros')
    },
    createLivros: (livrosObj) => {
        return http.post('/livros', livrosObj)
    },
    updateLivros: (idLivros, livrosObj) => {
        return http.put(`/livros/${idLivros}`, livrosObj)
    },
    deleteLivros: (idLivros) => {
        return http.delete(`/livros/${idLivros}`)
    },

    //Generos literarios
    getGeneros: () => {
        return http.get('/genlit')
    },
    createGeneros: (generoObj) => {
        return http.post('/genlit', generoObj)
    },
    updateGeneros: (idGenero, generoObj) => {
        return http.put(`/genlit/${idGenero}`, generoObj)
    },
    deleteGeneros: (idGenero) => {
        return http.delete(`/genlit/${idGenero}`)
    },
    //Editoras
    getEditoras: () => {
        return http.get('/editoras')
    },
    createEditoras: (editoraObj) => {
        return http.post('/editoras', editoraObj)
    },
    updateEditoras: (idEditora, editoraObj) => {
        return http.put(`/editoras/${idEditora}`, editoraObj)
    },
    deleteEditoras: (idEditora) => {
        return http.delete(`/editoras/${idEditora}`)
    },
    
}

export default apiLib 