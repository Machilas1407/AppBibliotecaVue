<template>
 <nav>
     <!-----Aqui no menu é onde inserimos nossos routers, que serão as nossas paginações, indicando o model presente
     na api, aqui é onde ficara o nosso menu suspenso com as opções de navegação.------->
      <div class="nav-wrapper blue darken-1">
        <b-row >
            <b-col>
        <router-link to="/">Inicio</router-link>
        </b-col>
        <b-col>
        <router-link to="/editora"> Editoras </router-link>
        </b-col>
        <b-col>
        <router-link to="/autores"> Autor </router-link>
        </b-col>
        <b-col>
        <router-link to="/genlit"> Generos Literarios </router-link>
        </b-col>
        <b-col>
        <router-link to="/livros"> Livros </router-link>
        </b-col>
</b-row>
      </div>
    </nav>
</template>
<script>
export default {
    
}
</script>