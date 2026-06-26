<template>
  <nav class="nav-links">
    <router-link to="/ex1">Exercise 1</router-link>
    <router-link to="/ex2">Exercise 2</router-link>
    <router-link to="/ex3">Exercise 3</router-link>
    <router-link to="/ex4">Exercise 4</router-link>
    <router-link to="/ex5">Exercise 5</router-link>
  </nav>
  <!-- Exercise 2: User Store -->
  <div class="card">
    <h1 class="text">Exercise 2: User Store</h1>
    <div>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <form @submit.prevent="updateUser">
        <div class="display">
          <label for="">Name</label><br />
          <input type="text" v-model="newName" placeholder="Enter name" class="input" />
        </div>
        <div class="display">
          <label for="">Age</label><br />
          <input type="number" v-model.number="newAge" placeholder="Enter age" class="input" />
        </div>
        <div class="display">
          <label for="">Email</label><br />
          <input type="email" v-model="newEmail" placeholder="Enter email" class="input" />
        </div>
        <button type="submit" class="btn-primary">Update</button>
      </form>
    </div>
  </div>
  <div class="description">
    <h3>✅ Exercise 2: User Store</h3>
    <p><strong>State:</strong> name, age, email</p>
    <p><strong>Actions:</strong> updateName(), updateAge(), updateEmail()</p>
    <p><strong>Display:</strong> Display the user information and provide a form to update it</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/stores/userStore'

const user = userStore()

//Exercise2
let newName = ref('')
let newAge = ref<number | null>(null)
let newEmail = ref('')

const updateUser = () => {
  if (newName.value) {
    user.updateName(newName.value)
  }
  if (newAge.value !== null) {
    user.updateAge(newAge.value)
  }
  if (newEmail.value) {
    user.updateEmail(newEmail.value)
  }
}
</script>

<style lang="scss" scoped></style>
