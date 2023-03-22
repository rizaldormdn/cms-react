import React from 'react'
import AdminTemplate from '../templates/AdminTemplate'
import Author from './Author'

type Props = {}

const Admin = (props: Props) => {
  return (
    <AdminTemplate>
      <Author />
    </AdminTemplate>
  )
}

export default Admin