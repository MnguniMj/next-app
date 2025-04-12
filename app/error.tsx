"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const UnexpectedPageError = ({ error, reset }: Props) => {
  return (
    <>
      <div>An unexpected Page error has occurred</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default UnexpectedPageError;
