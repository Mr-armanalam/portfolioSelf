"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function NotFound () {
  const router = useRouter();
  const [href, setHref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHref(window.location.href);
    }
  }, []);
  return (
    <section className="flex h-[93vh] items-center justify-center">
      <div className="min-w-[40rem] rounded-2xl bg-cstmclr-100 p-12 text-center ">
        <h1 className="text-6xl font-bold text-cstmclr-900 ">Not Found</h1>
        <p className="mt-2 text-sm font-semibold text-cstmclr-700">
          Could not find requested resource on
        </p>
        <p className="line-clamp-1 max-w-full text-xs font-semibold text-cstmclr-500 ">
          {href}
        </p>
        <button
          className="black_btn_with_border mt-4"
          onClick={() => router.back()}
        >
          Return Back
        </button>
      </div>
    </section>
  );
}
