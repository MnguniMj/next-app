import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <> <h1>UsersPage</h1>
        <Link href="/users/new">Add User</Link>
    </>
  )
}

export default UsersPage