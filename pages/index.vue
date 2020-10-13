<template>
  <el-container>
    <el-main>
      This is the main page. Navigate through the site using links above.
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { AxiosResponse } from 'axios'
import { User } from '@/types/user.interface'

@Component({
  head () {
    return {
      title: 'Main Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Main Page description'
        }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const response: AxiosResponse = await $axios.$get('/users')
    return {
      users: response
    }
  }
})
export default class MainPage extends Vue {
  private users: User[] = []
}
</script>

<style>
.page__link {
  display: inline-flex;
}
</style>
