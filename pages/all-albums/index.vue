<template>
  <el-container>
    <el-main>
      <ul>
        <li
          v-for="(album, index) in albums"
          :key="index"
        >
          {{ album.title }}
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { AxiosResponse } from 'axios'
import { Album } from '@/types/album.interface'

@Component({
  head () {
    return {
      title: 'All Albums Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All Users Page description'
        }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const response: AxiosResponse = await $axios.$get('/albums')
    return {
      albums: response
    }
  }
})
export default class AllAlbumsPage extends Vue {
  private albums: Album[] = []
}
</script>

<style>
.page__link {
  display: inline-flex;
}
</style>
