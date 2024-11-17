'use client'
import React, { useState} from 'react';
import {useRouter} from 'next/navigation'
import { useToast } from '@/hooks/use-toast';

const page = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [submit, setSubmit]= useState(false);
    const router = useRouter();
    const { toast } = useToast()
    

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSubmit(true);
        try{
          await fetch("api/contact", { method: "POST",body: JSON.stringify({
               username:username, 
               email:email, 
               description:description 
            }),
          }).then((response) => {
            toast({
              title: response.status === 200 ? "Thank you for your valuable feedback!" : "Something went wrong, please try after some time",
              variant: response.status !== 200 ? "destructive" : "default",
            })
          });
           setSubmit(false);
          router.push('/');
        }catch(error) {
            console.log(error);
        }
    }

  return (
    <main className="w-full px-4 pt-28 md:px-8 h-[93vh]">
      <div className="mx-auto relative px-4 max-w-[60rem] xl:w-[90vw]  xl:mt-12 lg:h-[60vh] h-[72vh]
      lg:px-28 md:px-12 justify-center flex items-center bg-cstmclr-900 rounded-lg border
    border-cstmclr-200">
        <form onSubmit={handleSubmit} className="text-white gap-2 w-full flex flex-col font-semibold text-base">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id='name'
            name='username'
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            className="w-full text-sm text-cstmclr-900 px-2 outline-none py-1 rounded border "
            placeholder='please write your name'
            required
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className="w-full text-sm text-cstmclr-900 px-2 outline-none py-1  rounded border"
            placeholder='please write your email'
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            className="w-full text-sm text-cstmclr-900 px-2 outline-none py-1  rounded border"
            rows={4}
            placeholder='write a short description'
            required
          ></textarea>
          <button type="submit" className="absolute hover:text-lg bottom-6 right-8">
            {submit? "Sending...":"Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default page
