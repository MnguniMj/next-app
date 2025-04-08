import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

export interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  /* to cache data we need to pass a second parameter (object)
        e.g { cache: 'on-store'} to prevent next from storing your data. this is used where data keep changing
           or { next: { revalidate: 10 } } getting fresh data every 10 sec

           note: this cashing can only be used in fetch... axios does not have it yet
    */
  const users: Users[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (users) => users.name
  );

  return (
    <table className="table table-boardered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
