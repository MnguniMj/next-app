import React from 'react'

interface Users {
    id: number;
    name: string;
    email: string;
}

const UserTable = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    /* to cache data we need to pass a second parameter (object)
        e.g { cache: 'on-store'} to prevent next from storing your data. this is used where data keep changing
           or { next: { revalidate: 10 } } getting fresh data every 10 sec

           note: this cashing can only be used in fetch... axios does not have it yet
    */
    const users: Users[] = await res.json();
  return (
        <table className='table table-boardered'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)}
          </tbody>
        </table>
  )
}

export default UserTable