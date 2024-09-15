import React from 'react'

const page = () => {

  return (
    <section className="w-full px-4 pt-28 md:px-8 h-screen">
      <div className="mx-auto relative px-4 max-w-[60rem] lg:h-[60vh] h-[72vh]
      lg:px-28 md:px-12 justify-center flex items-center bg-cstmclr-900 rounded-lg border
    border-cstmclr-200">
        <form className="text-white gap-2 w-full flex flex-col font-semibold text-base">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id='name'
            name='username'
            className="w-full text-cstmclr-900 px-2 outline-none py-1 rounded border "
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full  text-cstmclr-900 px-2 outline-none py-1  rounded border"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="w-full text-cstmclr-900 px-2 outline-none py-1  rounded border"
            rows={4}
          ></textarea>
          <button type="submit" className="absolute hover:text-lg bottom-4 right-8">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default page
