<template>
  <main>
    <h1>LISTS</h1>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isFetching">Updating results...</div>

    <div v-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="l in list" :key="l.id">{{ l.name }}</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { useQuery } from '@powersync/vue'

const query = ref('SELECT * from lists')
const { data: list, isLoading, isFetching, error } = useQuery(query, [], {})
</script>
