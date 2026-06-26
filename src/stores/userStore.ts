import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const userStore = defineStore('update', () => {
    const name = ref('Narith Hen')
    const age = ref(22)
    const email = ref('narith@gmail.com')

    function updateName(newName: string) {
        name.value = newName
    }
    function updateAge(newAge: number) {
        age.value = newAge
    }
    function updateEmail(newEmail: string) {
        email.value = newEmail
    }


    return { name, age, email, updateName, updateAge, updateEmail }
})