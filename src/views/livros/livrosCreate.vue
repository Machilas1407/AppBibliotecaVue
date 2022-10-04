<template>
<div class="container" >

    <h2> Cadastro de Livros</h2>
    <b-form style="width: 80vw">
      <b-form-group

      >
        <b-form-input
          id="input-1"
          v-model="form.titulo"
          type="email"
          placeholder="Titulo"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-2"
            type="number"
          v-model.number="form.ano_lancamento"
          placeholder="Ano de lançamento"
          required
        ></b-form-input>
      </b-form-group>
        
        <b-form-group >
        <b-form-input
          id="input-2"
          v-model="form.editora"
          placeholder="Editora"
          required
        ></b-form-input>
        </b-form-group>

        <b-form-group>
        <b-form-input
          id="input-2"
          v-model="form.genero"
          placeholder="Genero"
          required
        ></b-form-input>
        </b-form-group>

        <b-form-group >
        <b-form-input
          id="input-2"
          v-model="form.autor"
          placeholder="Autor"
          required
        ></b-form-input>
      </b-form-group>

      <center>      <b-button v-if="button" type="submit" variant="primary"   @click.prevent="createLivros">Cadastrar</b-button>
      <b-button v-if="!button" type="submit" class="" variant="primary" @click.prevent="updateLivros">Atualizar</b-button>
</center>


        </b-form>
        <b-card class="mt-3" style="width: 80vw" header="Lista de Livros">
      <table v-for="(livro, index) in livros" :key="index">
        <thead>
          <tr>
              <th style="min-width:200px; max-width:200px ">Titulo</th>
              <th style="min-width:150px; max-width:150px ">Ano de lançamento</th>
              <th style="min-width:150px; max-width:150px ">Editora</th>
              <th style="min-width:150px; max-width:150px ">Genero</th>
              <th style="min-width:150px; max-width:150px ">Autor</th>
              
              <th >Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{livro.titulo}}</td>
            <td>{{livro.ano_lancamento}}</td>
            <td>{{livro.editora}}</td>
            <td>{{livro.genero}}</td>
            <td>{{livro.autor}}</td>
            <td>    
              <b-button-group>
              <b-button @click="editar(livro)" variant="success" style="margin-right:10px">Editar</b-button>
              <b-button @click="deleteLivros(livro.id)" variant="danger">Excluir</b-button>

  
    </b-button-group></td>
 </tr>
  
        </tbody>
      </table>
            
    </b-card>
  </div>
</template>
<script>
import apiLib from "../../services/config"


export default {

  data(){
 return {
       form:{
           titulo:"",
           ano_lancamento: null,
           editora: "",
           genero:"",
           autor:""
          },

        button: true,
        idLivro: "",
        livros:[],
     }
  },
mounted(){
  this.getLivros();
},
 methods:{
   createLivros(){
     apiLib
      .createLivros(this.form)
      .then (({data})=> {
        console.log(data)
        this.form ={
                titulo: "",
                ano_lancamento: null,
                editora: "",
                genero: "",
                autor:""
        };
        this.getLivros();
      })
      .catch((err) => {
        console.log(err)
      })
   },

   getLivros() {
     apiLib
     .getLivros()
      .then (({data})=> {
          this.livros = data

      })
     },

    deleteLivros(id){
        apiLib
        .deleteLivros(id)
        .then(()=> {
            this.getLivros()
        })
    },
    editar(livro){
        this.idLivro = livro.id,
        this.form.titulo = livro.titulo,
        this.form.ano_lancamento = livro.ano_lancamento,
        this.form.editora = livro.editora,
        this.form.autor = livro.autor
        this.form.genero = livro.genero

        this.button = false
    },
    updateLivros(){
        apiLib
        .updateLivros(this.idLivro, this.form)
        .then(()=> {
                    this.form ={
                titulo: "",
                ano_lancamento: null,
                editora: "",
                autor: "",
                genero:""
        };
        this.getLivros();
        this.button = true
        })

    }
   }
 
}
</script>

