<template>
  <v-container>
    <v-row class="text-center ">

      <v-col cols="12" class="text-left mx-0 px-0 ">
        <h4 class="my-2">Click on Checkboxes below to see the results.</h4>
       <div class="selectedItems"><span class="font-weight-medium">Selected Item are here stated as :</span>  {{selected}} </div>
      </v-col>

    <v-col cols="12" class="text-left">
       <div class="row">

          <v-card>
    <v-card-title>
      Customer Rercords Table
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-row class="text-right mx-0 align-items-end justify-end">
        <v-btn small class="success white--text mr-2 my-2">Post Item</v-btn>
    </v-row>
    <v-data-table
            v-model="selected"
            :headers="headers"
            :items="usersList"
            :single-select="singleSelect"
            item-key="DocNo"
            show-select
             :search="search"
            class="elevation-1"
          >
  </v-data-table>
  </v-card>

         

       </div>
      </v-col>
    
      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>

import axios from "axios";

  export default {
    name: 'RecordsTable',

     data () {
      return {
         usersList: [],
          search: '',
         singleSelect: false,
      selected: [],
         
         headers: [
          
          // { text: 'Mark Item', value: 'Mark Item' },
          
          { text: 'Year', value: 'Year' },
          { text: 'Period', value: 'Period' },
          { text: 'DocTypeDesc', value: 'DocTypeDesc' },
          { text: 'DocTypeCode', value: 'DocTypeCode' },
          
          { text: 'DocCode', value: 'DocCode' },
          
          { text: 'DocDate', value: 'DocDate' },
          { text: 'DocNo', value: 'DocNo' },
          { text: 'CustCode', value: 'CustCode' },
          { text: 'CustName', value: 'CustName' },
          { text: 'Status', value: 'Status' },
        ],

        

      }
    },
     
     mounted() {
    // axios.get("https://jsonplaceholder.typicode.com/users")
axios.get("http://192.168.0.157:8080/AutoInvoiceGeneration/api/invoice")
    
      .then(res => {
        this.usersList = res.data;
        console.log(this.usersList)
      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })
  }

    
  }
</script>


<style>
.selectedItems {
    border: 1px solid silver;
    padding: 5px;
    border-radius: 5px;
    min-height: 30px;
    max-height: 100px;
    overflow: hidden;
    
    overflow-x: hidden;
    overflow-y: auto;
}

.v-content {
    padding-top: 50px !important;
}

</style>