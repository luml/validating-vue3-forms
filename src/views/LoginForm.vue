<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="text" v-model="email" :error="emailError" />
    <BaseInput label="Password" type="password" v-model="password" :error="passwordError"/>
    <BaseButton type="submit" class="-fill-gradient">Submit</BaseButton>
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
      email: (value) => {
        const errorMessage = 'This field is required'
        if (!value) return errorMessage
        return true
      },
      password: (value) => {
        const requiredMessage = 'This field is required'
        if (value === undefined && value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true
      }
    }

    useForm({
      validationSchema: validations
    })

    const { value: email, errorMessage: emailError } = useField('email')
    const { value: password, errorMessage: passwordError } = useField('password')

    return {
      onSubmit,
      email,
      emailError,
      password,
      passwordError
    }
  }
}
</script>
