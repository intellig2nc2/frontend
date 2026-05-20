import React from 'react'
import RegisterForm from '../../no2_components/user/RegisterForm'

const Registerpage = ({setUsers}) => {
  return (
    <div>
      <RegisterForm
        setUsers={setUsers}
      />
    </div>
  )
}

export default Registerpage
