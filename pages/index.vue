<template>
  <el-container>
    <el-main>
      <el-table
        border
        :data="users.slice(0, 4)"
      >
        <el-table-column
          prop="id"
          label="ID"
        />
        <el-table-column
          prop="name"
          label="User Name"
        />
        <el-table-column
          prop="username"
          label="User Alias"
        />
        <el-table-column
          prop="id"
          label="Edit"
        >
          <template slot-scope="scope">
            <nuxt-link
              class="page__link"
              :to="{
                name: 'edit-id',
                params: {
                  id: scope.row.id
                }
              }"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
              />
            </nuxt-link>
          </template>
        </el-table-column>
      </el-table>
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
