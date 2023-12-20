<script setup lang="ts">
import { ref } from 'vue';

const emailToCheck = ref('');
const isEmailRegistered = ref(false);

const checkEmailExistence = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/Daftar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailToCheck.value }),
    });

    if (response.ok) {
      const data = await response.json();
      isEmailRegistered.value = data.exists;
    } else {
      console.error('Failed to check email existence.');
    }
  } catch (error) {
    console.error('Error during email existence check:', error);
  }
};
</script>

<template>
  <div>
    <label for="emailToCheck">Check Email Existence:</label>
    <input v-model="emailToCheck" type="email" id="emailToCheck" />
    <button type="button" @click="checkEmailExistence">Check</button>

    <div v-if="isEmailRegistered">
      <p>Email is already registered.</p>
    </div>
    <div v-else>
      <p>Email is not registered.</p>
    </div>
  </div>
</template>
