import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
      <ul className="list-none"></ul>
    </main>
  )
}