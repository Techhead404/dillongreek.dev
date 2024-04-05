import { Inter } from "next/font/google";
import { FormEvent } from 'react'
import NAV from "./components/nav";


const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    
    const text = data.message
    return text
  }
 
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        < NAV />
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
    
    </main>
  );
}