"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const route = useRouter();

  return (
    <div>
      NewUserPage <br />
      <br />
      <button className="btn btn-primary" onClick={() => route.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
