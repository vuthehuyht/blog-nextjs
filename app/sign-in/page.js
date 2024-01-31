import NavBar from '@/components/navbar.component'
import UserAuthForm from '@/components/user-auth.form'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <NavBar />
      <UserAuthForm type='sign-up' />
    </>
  )
}

export default SignIn
