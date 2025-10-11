<template>
  <div>
    <h1>Add Book</h1>
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
import db from '@/firebase/init';
import { collection, addDoc } from 'firebase/firestore'
import BookList from '@/components/BookList.vue';
import router from '@/router';

const isbn = ref('');
const name = ref('');

const addBook = async () => {
      try {
        const isbnNubmer = Number(isbn.value);
        if (isNaN(isbnNubmer)) {
            alert('ISBN must be a valid number');
            return;
        }
        console.log('adding books: ', isbnNubmer + ''+ name.value);
        await addDoc(collection(db, 'books'), {
            isbn : isbnNubmer,
            name : name.value
        });
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
        router.push('BookList')
      } catch (error) {
        console.error('Error adding books: ', error);
      }
    };
// No script needed for now
</script>

<style>
</style>