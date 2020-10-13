<template>
  <el-container>
    <el-main class="page page--edit-form">
      <el-form
        ref="editForm"
        :model="user"
        :rules="rules"
        label-width="120px"
        class="page__form"
        label-position="top"
        @keypress.enter.native="submit()"
      >
        <el-form-item
          label="User Name"
          prop="name"
        >
          <el-input v-model="user.name" />
        </el-form-item>

        <el-form-item
          label="User Alias"
          prop="username"
        >
          <el-input v-model="user.username" />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submit()"
          >
            Submit
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'

import { AxiosResponse } from 'axios'
import { User } from '@/types/user.interface'
import { ElementUiForm } from '@/types/form.interface'

@Component({
  head () {
    return {
      title: 'Edit User Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Edit User Page description'
        }
      ]
    }
  },
  async asyncData ({ $axios, params }) {
    const response: AxiosResponse = await $axios.$get(`/users/${params.id}`)
    return {
      user: response
    }
  }
})
export default class EditUserPage extends Vue {
  @Ref('editForm') readonly editForm!: ElementUiForm

  private user: User = {} as User

  private rules: {} = {
    user: [
      { required: true, message: 'This field is required', trigger: 'blur' },
      { min: 3, max: 25, message: 'Length should be 3 to 25', trigger: 'blur' }
    ],
    username: [
      { required: true, message: 'This field is required', trigger: 'blur' },
      { min: 3, max: 25, message: 'Length should be 3 to 25', trigger: 'blur' }
    ]
  }

  private async submit () {
    const state: boolean = await this.editForm.validate()
    if (state) {
      alert('Form was submitted')
    }
  }
}
</script>

<style>
.page--edit-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page--edit-form .page__form  {
  width: 450px;
}

</style>
