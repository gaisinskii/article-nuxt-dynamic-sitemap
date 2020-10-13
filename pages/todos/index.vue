<template>
  <el-container>
    <el-main>
      <ul>
        <li
          v-for="(todo, index) in todos"
          :key="index"
        >
          <el-checkbox
            v-model="todo.completed"
            disabled
          />
          {{ todo.title }}
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { AxiosResponse } from 'axios'
import { ToDo } from '@/types/todo.interface'

@Component({
  head () {
    return {
      title: 'All Todos Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All Todos Page description'
        }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const response: AxiosResponse = await $axios.$get('/todos')
    return {
      todos: response
    }
  }
})
export default class AllTodosPage extends Vue {
  private todos: ToDo[] = []
}
</script>

<style>
.page__link {
  display: inline-flex;
}
</style>
