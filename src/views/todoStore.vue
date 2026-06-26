<template>
  <nav class="nav-links">
    <router-link to="/ex1">Exercise 1</router-link>
    <router-link to="/ex2">Exercise 2</router-link>
    <router-link to="/ex3">Exercise 3</router-link>
    <router-link to="/ex4">Exercise 4</router-link>
    <router-link to="/ex5">Exercise 5</router-link>
  </nav>
  <!-- Exercise 3: Todo List -->
  <div class="card">
    <h1 class="text">Exercise 3: Todo List</h1>
    <div class="btn">
      <input type="text" v-model="title" placeholder="Enter todo..." class="input" />
      <button @click="add" class="btn-primary">Add</button>
    </div>

    <!-- Statistics  -->
    <div class="stats">
      <p>Total: {{ todoStore.totalTodos }}</p>
      <p>Completed: {{ todoStore.completedTodos.length }}</p>
      <p>Pending: {{ todoStore.pendingTodos.length }}</p>
    </div>

    <!-- Todo List -->
    <p><strong>Task:</strong></p>
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id" class="product-item">
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.title }}
        <button @click="todoStore.deleteTodo(todo.id)" class="btn-destroy">Delete</button>
      </li>
    </ul>
  </div>
  <div class="description">
    <h3>✅ Exercise 3: Todo List</h3>
    <p><strong>State:</strong> todos (id, title, completed)</p>
    <p><strong>Actions:</strong> addTodo(), deleteTodo(), toggleTodo()</p>
    <p><strong>Getters:</strong> completedTodos, pendingTodos, totalTodos</p>
    <p><strong>Features:</strong> Add todos, Delete todos, Mark todos as completed, Display todo statistics</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
//Exercise3
const title = ref('')

const add = () => {
  todoStore.addTodo(title.value)
  title.value = ''
}
</script>

<style lang="scss" scoped></style>
