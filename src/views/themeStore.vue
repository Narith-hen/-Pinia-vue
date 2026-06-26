<template>
  <nav class="nav-links">
    <router-link to="/ex1">Exercise 1</router-link>
    <router-link to="/ex2">Exercise 2</router-link>
    <router-link to="/ex3">Exercise 3</router-link>
    <router-link to="/ex4">Exercise 4</router-link>
    <router-link to="/ex5">Exercise 5</router-link>
  </nav>
  <!-- Exercise 5: Theme Store -->
  <div class="card">
    <h1 class="text">Exercise 5: Theme Store</h1>
    <button @click="themeStore.toggleTheme()" class="btn-primary">
      Switch to
      {{ themeStore.darkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div :class="{ dark: themeStore.darkMode }" class="darkMode">
      <h1>
        Current Theme:
        {{ themeStore.darkMode ? 'Dark Mode' : 'Light Mode' }}
      </h1>
    </div>
  </div>
  <div class="description">
    <h3>✅ Exercise 5: Theme Store</h3>
    <p><strong>State:</strong> darkMode</p>
    <p><strong>Action:</strong> toggleTheme()</p>
    <p><strong>Display:</strong> Create a button to switch between Light Mode and Dark Mode</p>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
