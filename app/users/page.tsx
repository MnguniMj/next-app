import Link from 'next/link'
import React from 'react'
import UserTable from './UserTable'

const UsersPage = async () => {
  
  return (
    <> <h1>UsersPage</h1>
        <Link href="/users/new">Add User</Link>
        <UserTable />
    </>
  )
}

export default UsersPage