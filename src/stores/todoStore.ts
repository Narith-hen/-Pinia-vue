import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    {
      id: 1,
      title: 'Learn Vue',
      completed: false,
    },
    {
      id: 2,
      title: 'Homework Vue',
      completed: false,
    }
  ])

  //action
  function addTodo(title: string) {
    if(!title.trim()) return

    todos.value.push({
        id: Date.now(),
        title,
        completed: false
    })
  }

  function deleteTodo(id: number) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

    // Getters
  const completedTodos = computed(() =>
    todos.value.filter(todo => todo.completed)
  )

  const pendingTodos = computed(() =>
    todos.value.filter(todo => !todo.completed)
  )

  const totalTodos = computed(() => todos.value.length)

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    completedTodos,
    pendingTodos,
    totalTodos,
  }
})