<template>
  <div>
    <h1>Add Book API</h1>
    <form @submit.prevent="addBook">
        <div>
            <label for="isbn">ISBN:</label>
            <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
// import db from '@/firebase/init';
// import { collection, addDoc } from 'firebase/firestore'
// import BookList from '@/components/BookList.vue';
import router from '@/router';
import axios from 'axios';

const isbn = ref('');
const name = ref('');

const addBook = async () => {
      console.log('addbook trigger')
      console.log('addbook trigger isbn', isbn)
      try {
        const isbnNubmer = Number(isbn.value);
        console.log('isbnNubmer', isbnNubmer)
        
        if (isNaN(isbnNubmer)) {
            console.error('Error number', isbnNubmer)
            alert('ISBN must be a valid number');
            return
        }
        
        // try{
        //     const response = await axios.post('')
        await axios.post('https://us-central1-fit-5032-efiletask.cloudfunctions.net/addBook', {
          isbn : isbnNubmer,
          name : name.value
        })
        .then(function(response) {
          alert('Book added successfully!');
          router.push('BookList')
          console.log(response);
        })
        .catch(function(error) {
          alert('Book added error', error);
          //router.push('BookList')
          console.log(error);
        });
        // this.count = response.data.count
        // this.error = null
        // } catch(error){
        //   console.error('Error fetching book count', error)
        //   this.count = response.data.count
        //   this.error = null
        // }
        
        
        
        // alert('Book added successfully!');
        // router.push('BookList')
      } catch (error) {
        console.error('Error adding books: ', error);
      }
      console.log('addbook end')
    };
// No script needed for now
</script>

<style>
</style>