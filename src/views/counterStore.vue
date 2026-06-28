<template>
    <nav class="nav-links">
      <router-link to="/ex1">Exercise 1</router-link>
      <router-link to="/ex2">Exercise 2</router-link>
      <router-link to="/ex3">Exercise 3</router-link>
      <router-link to="/ex4">Exercise 4</router-link>
      <router-link to="/ex5">Exercise 5</router-link>
    </nav>

    
  <!-- Exercise 1: Counter Store -->
  <div class="card">
    <h1 class="text">Exercise 1: Counter Store</h1>
    <div>
      <p>Count: {{ counter.count }}</p>
      <p>Double: {{ counter.doubleCount }}</p>
      <div style="display: flex; gap: 8px">
        <button @click="counter.decrement()" class="btn-destroy">Decrement</button>
        <button @click="counter.reset()" class="btn-secord">Reset</button>
        <button @click="counter.increment()" class="btn-primary">Increment</button>
      </div>
    </div>
  </div>


  <div class="description">
    <h3>✅ Exercise 1: Counter Store</h3>
    <p><strong>State:</strong> count</p>
    <p><strong>Actions:</strong> increment(), decrement(), reset()</p>
    <p><strong>Getter:</strong> doubleCount</p>
    <p><strong>Display:</strong> Current count, Double count, Buttons for Increment, Decrement, and Reset</p>
  </div>
</template>

<script setup >
import { useCounterStore } from '@/stores/counterStore'

const counter = useCounterStore()
</script>

<style lang="scss" scoped></style>
