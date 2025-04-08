import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-sky-400 p-5 mb-5 ">
      <Link href="/">NextJs</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
