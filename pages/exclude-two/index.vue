<template>
  <el-container>
    <el-main>
      Page #2 to exclude from sitemap generation
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head () {
    return {
      title: 'Exclude Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Exclude Page description'
        }
      ]
    }
  }
})
export default class ExcludeTwoPage extends Vue {
}
</script>
