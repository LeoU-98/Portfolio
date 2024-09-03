function ContactForm() {
  return (
    <div className="mx-auto max-w-[430px] rounded-lg px-4 lg:mx-0 xl:max-w-[510px] 2xl:max-w-[530px]">
      <form className="flex min-h-96 flex-col justify-center gap-3 text-white">
        <div className="flex items-center justify-between gap-2">
          <input
            className="w-1/2 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="active:placeholder:text-gray-950focus:bg-opacity-100 w-1/2 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <input
          className="rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="min-h-28 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
          type="text"
          name="message"
          placeholder="Message"
        />
        <button className="rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 py-2 text-white transition-all duration-300 hover:bg-gradient-to-l hover:via-indigo-600 focus:outline-none focus:ring-2 focus:ring-violet-500 active:translate-y-3">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
