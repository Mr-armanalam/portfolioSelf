"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmit(true);
    try {
      await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          description,
        }),
      }).then((response) => {
        toast({
          title:
            response.status === 200
              ? "Thank you for your valuable feedback!"
              : "Something went wrong, please try after some time",
          variant: response.status !== 200 ? "destructive" : "default",
        });
      });
      setSubmit(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-[93vh] w-full px-4 pt-28 md:px-8">
      <div
        className="relative mx-auto flex h-[72vh] max-w-[60rem]  items-center justify-center rounded-lg
      border border-cstmclr-200 bg-cstmclr-900 from-black to-gray-950 px-4 dark:border-gray-700 dark:bg-gradient-to-r md:px-12 lg:h-[60vh] lg:px-28
    xl:mt-12 xl:w-[90vw] "
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-2 text-base font-semibold text-white"
        >
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="h-10 w-full rounded border from-black to-gray-950 px-2 py-1 text-sm text-cstmclr-900 outline-none dark:border-[#101010] dark:bg-gradient-to-r dark:text-cstmclr-300 "
            placeholder="please write your name"
            required
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="h-10 w-full rounded border from-black to-gray-950 px-2 py-1 text-sm text-cstmclr-900 outline-none dark:border-[#101010] dark:bg-gradient-to-r dark:text-cstmclr-300"
            placeholder="please write your email"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full rounded border from-black to-gray-950 px-2 py-1 text-sm text-cstmclr-900 outline-none dark:border-[#101010] dark:bg-gradient-to-r dark:text-cstmclr-300"
            rows={4}
            placeholder="write a short description"
            required
          ></textarea>
          <button
            type="submit"
            className="absolute bottom-6 right-8 hover:text-lg"
          >
            {submit ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
