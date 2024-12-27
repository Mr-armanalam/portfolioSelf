"use client";
import React from "react";

export default function GlobalError ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="flex h-[93vh] items-center justify-center">
          <div className="min-w-[40rem] rounded-2xl bg-cstmclr-100 p-12 text-center ">
            <h1 className="text-6xl font-bold text-cstmclr-900 ">
              Something went wrong!
            </h1>
            <p className="mt-2 text-sm font-semibold text-red-800">
              {error.message}
            </p>
            <button
              className="black_btn_with_border mt-4"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
