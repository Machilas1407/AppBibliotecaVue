<template> 
<div class="container" >

    <h2> Cadastro de Autores</h2>
    <b-form style="width: 80vw">
      <b-form-group

      >
        <b-form-input
          id="input-1"
          v-model="form.nome"
          type="email"
          placeholder="Nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-2"
          type="date"
          v-model="form.data_nasc"
          placeholder="Data de Nascimento"
          required
        ></b-form-input>
      </b-form-group>
        
        <b-form-group >
        <b-form-input
          id="input-2"
          v-model="form.sexo"
          placeholder="Sexo"
          required
        ></b-form-input>
        </b-form-group>

        <b-form-group>
        <b-form-input
          id="input-2"
          v-model="form.nacionalidade"
          placeholder="Nacionalidade"
          required
        ></b-form-input>
        </b-form-group>



      <center>      <b-button v-if="button" type="submit" variant="primary"   @click.prevent="createAutor">Cadastrar</b-button>
      <b-button v-if="!button" type="submit" class="" variant="primary" @click.prevent="updateAutor">Atualizar</b-button>
</center>

        </b-form>
        <b-card class="mt-3" style="width: 80vw" header="Lista de Autores">
      <table v-for="(autor, index) in autores" :key="index">
        <thead>
          <tr>
              <th style="min-width:150px">Nome</th>
              <th style="min-width:30px">Data de Nascimento</th>
              <th style="min-width:150px">Sexo</th>
              <th style="min-width:150px">Nacionalidade</th>
        
              
              <th >Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{autor.nome}}</td>
            <td>{{autor.data_nasc}}</td>
            <td>{{autor.sexo}}</td>
            <td>{{autor.nacionalidade}}</td>
           
            <td>    
              <b-button-group>
              <b-button @click="editar(autor)" variant="success" style="margin-right:10px">Editar</b-button>
              <b-button @click="deleteAutor(autor.id)" variant="danger">Excluir</b-button>

  
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
           nome:"",
           data_nasc: null,
           sexo: "",
           nacionalidade:""
          },

        button: true,
        idAutor: "",
        autores:[],
     }
  },
mounted(){
  this.getAutores();
},
 methods:{
   createAutor(){
     apiLib
      .createAutor(this.form)
      .then (({data})=> {
        console.log(data)
        this.form ={
                nome: "",
                data_nasc: null,
                sexo: "",
                nacionalidade: ""
        };
        this.getAutores();
      })
      .catch((err) => {
        console.log(err)
      })
   },

   getAutores() {
     apiLib
     .getAutores()
      .then (({data})=> {
          this.autores = data

      })
     },

    deleteAutor(id){
        apiLib
        .deleteAutor(id)
        .then(()=> {
            this.getAutores()
        })
    },
    editar(autor){
        this.idAutor = autor.id,
        this.form.nome = autor.nome,
        this.form.data_nasc = autor.data_nasc,
        this.form.sexo = autor.sexo,
        this.form.nacionalidade = autor.nacionalidade

        this.button = false
    },
    updateAutor(){
        apiLib
        .updateAutor(this.idAutor, this.form)
        .then(()=> {
                    this.form ={
                nome: "",
                data_nasc: null,
                sexo: "",
                nacionalidade: ""
        };
        this.getAutores();
        this.button = true
        })

    }
   }

}
</script>

