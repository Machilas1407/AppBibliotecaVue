import Vue from 'vue'
import Router from 'vue-router'



import Inicio from './components/inicio.vue'
import Autores from './views/autores/autoresCreate.vue'
import Editoras from './views/editoras/editorasCreate.vue'
import Generos from './views/GeneroLiterario/genlitCreate.vue'
import Livros from './views/livros/livrosCreate.vue'

Vue.use(Router)

export default new Router({
    routes :[
        {
            path: '/',
            component: Inicio
        },
        
        {
            path: '/autores',
            component: Autores
        },
        {
            path: '/editora',
            component: Editoras
        },
        {
            path: '/genlit',
            component: Generos
        },
        {
            path: '/livros',
            component: Livros
        },

        
    ]
})