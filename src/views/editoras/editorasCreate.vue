<template>
<div class="container" >

    <h2> Cadastro de Editoras</h2>
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
          v-model="form.url"
          placeholder="URL"
          required
        ></b-form-input>
      </b-form-group>
        
        <b-form-group >
        <b-form-input
          id="input-2"
          type="number"
          v-model.number="form.telefone"
          placeholder="Telefone"
          required
        ></b-form-input>
        </b-form-group>

  



      <center>      <b-button v-if="button" type="submit" variant="primary"   @click.prevent="createEditoras">Cadastrar</b-button>
      <b-button v-if="!button" type="submit" class="" variant="primary" @click.prevent="updateEditoras">Atualizar</b-button>
</center>

        </b-form>
        <b-card class="mt-3" style="width: 80vw" header="Lista de Editoras">
      <table v-for="(editora, index) in editoras" :key="index">
        <thead>
          <tr>
              <th style="min-width:150px">Nome</th>
              <th style="min-width:150px">URL</th>
              <th style="min-width:150px">Telefone</th>
            
        
              
              <th >Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{editora.nome}}</td>
            <td>{{editora.url}}</td>
            <td>{{editora.telefone}}</td>
          
           
            <td>    
              <b-button-group>
              <b-button @click="editar(editora)" variant="success" style="margin-right:10px">Editar</b-button>
              <b-button @click="deleteAutor(editora.id)" variant="danger">Excluir</b-button>

  
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
           types: [
    
          'number',
  
        ],
       form:{
           nome:"",
           url: "",
           telefone: ""
          },

        button: true,
        idEditora: "",
        editoras:[],
     }
  },
mounted(){
  this.getEditoras();
},
 methods:{
   createEditoras(){
     apiLib
      .createEditoras(this.form)
      .then (({data})=> {
        console.log(data)
        this.form ={
                nome: "",
                url:"",
                telefone: "",
        };
        this.getEditoras();
      })
      .catch((err) => {
        console.log(err)
      })
   },

   getEditoras() {
     apiLib
     .getEditoras()
      .then (({data})=> {
          this.editoras = data

      })
     },

    deleteEditoras(id){
        apiLib
        .deleteEditoras(id)
        .then(()=> {
            this.getEditoras()
        })
    },
    editar(editora){
        this.idEditora = editora.id,
        this.form.nome = editora.nome,
        this.form.url = editora.url,
        this.form.telefone = editora.telefone,

        this.button = false
    },
    updateEditoras(){
        apiLib
        .updateEditoras(this.idEditora, this.form)
        .then(()=> {
                    this.form ={
                nome: "",
                url: "",
                telefone: "",
        };
        this.getEditoras();
        this.button = true
        })

    }
   }
 
}
</script>

