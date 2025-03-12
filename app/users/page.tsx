import Link from 'next/link'
import React from 'react'

interface Users {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    /* to cache data we ned to pass a second parameter (object)
        e.g { cache: 'on-store'} to prevent next from storing your data. this is used where data keep changing
           or { next: { revalidate: 10 } } getting fresh data every 10 sec

           note: this cashing can only be used in fetch... axios does not have it yet
    */
    const users: Users[] = await res.json();

  return (
    <> <h1>UsersPage</h1>
        <Link href="/users/new">Add User</Link>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UsersPage