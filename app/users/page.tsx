import Link from "next/link";
import React, { Suspense } from "react";
import UserTable from "./UserTable";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  const session = await auth();

  if (!session) redirect("/api/auth/signin");

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
