'use client';

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=''
      className='flex flex-col gap-2 mx-auto max-w-md mt-10'
    >
      <input
        name='email'
        className='border border-black text-black'
        type='email'
      />
      <input
        name='password'
        className='border border-black text-black'
        type='password'
      />
      <button type='submit'>Login</button>
    </form>
  );
}
