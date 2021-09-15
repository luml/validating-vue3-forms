<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" v-model="email" :error="errorMessage" />
    <BaseInput label="Password" type="password" v-model="password" :error="errorMessage"/>
    <BaseButton type="submit" class="-fill-gradient" />
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
export default {
  setup () {
    function onSubmit () {
      alert('Submited!')
    }

    const validations = {
      email: value = () => {}
      
    }

    const email = useField('email', (value) => {
      if (!value) return 'This field is required'
      return true
    })

    const password = useField('password', (value) => {
      if (!value) return 'This field is required'
      return true
    })

    return {
      onSubmit,
      email: email.value,
      password: password.value
    }
  }
}
</script>
