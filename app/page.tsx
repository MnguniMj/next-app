import Link from "next/link";
import Products from "./components/Products";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1>Hello {session && session.user!.name} </h1>
      <Link href="/users">Users</Link>
      <Products />
    </main>
  );
}
