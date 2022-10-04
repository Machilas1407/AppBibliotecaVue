<template>
  <div class="container" >

    <h2> Cadastro de Genero Literario</h2>
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

      <b-form-group >
        <b-form-input
          id="input-2"
          v-model="form.descricao"
          placeholder="Descrição"
          required
        ></b-form-input>
      </b-form-group>

      <center>      <b-button v-if="button" type="submit" variant="primary"   @click.prevent="createGeneros">Cadastrar</b-button>
      <b-button v-if="!button" type="submit" class="" variant="primary" @click.prevent="updateGeneros">Atualizar</b-button>
</center>

      
    </b-form>
    <b-card class="mt-3" style="width: 80vw" header="Lista de Generos">
      <table v-for="(genero, index) in generos" :key="index">
        <thead>
          <tr>
              <th style="min-width:500px">Nome</th>
              <th style="min-width:500px">Descrição</th>
              <th >Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{genero.nome}}</td>
            <td>{{genero.descricao}}</td>
            <td>    
              <b-button-group>
              <b-button @click="editar(genero)" variant="success" style="margin-right:10px">Editar</b-button>
              <b-button @click="deleteGeneros(genero.id)" variant="danger">Excluir</b-button>

  
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
           descricao: "",
          },

        button: true,
        idGenero: "",
        generos:[],
     }
  },
mounted(){
  this.getGeneros();
},
 methods:{
   createGeneros(){
     apiLib
      .createGeneros(this.form)
      .then (({data})=> {
        console.log(data)
        this.form ={
                nome: "",
                descricao: ""
        };
        this.getGeneros();
      })
      .catch((err) => {
        console.log(err)
      })
   },

   getGeneros() {
     apiLib
     .getGeneros()
      .then (({data})=> {
          this.generos = data

      })
     },

    deleteGeneros(id){
        apiLib
        .deleteGeneros(id)
        .then(()=> {
            this.getGeneros()
        })
    },
    editar(genero){
        this.idGenero = genero.id,
        this.form.nome = genero.nome,
        this.form.descricao = genero.descricao,

        this.button = false
    },
    updateGeneros(){
        apiLib
        .updateGeneros(this.idGenero, this.form)
        .then(()=> {
                    this.form ={
                nome: "",
                descricao: ""
        };
        this.getGeneros();
        this.button = true
        })

    }
   }
 
}
</script>

