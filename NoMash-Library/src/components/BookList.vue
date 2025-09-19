<template>
  <div>
    <h1>Books with ISBN > 1000</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="removeBook(book.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import db from '@/firebase/init';
import { collection, query, where, getDocs, orderBy, limit, deleteDoc, doc } from 'firebase/firestore'

const books = ref([]);

const removeBook = async (bookid) => {
    console.log('remove book', bookid)
    await deleteDoc(doc(db, 'books', bookid))
    alert('Remove book successfully!')
}

const fetchBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1),
          orderBy('isbn', "desc"),
          limit(6)
        );
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

onMounted(() => {
      fetchBooks();
});


// No script needed for now
</script>

<style>
</style>