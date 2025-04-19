"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { sources } from "next/dist/compiled/webpack/webpack";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && <CldImage src={publicId} alt="" width={207} height={180} />}
      <CldUploadWidget
        uploadPreset="ghuniuploadpre"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result, { widget }) => {
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary p-5" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
