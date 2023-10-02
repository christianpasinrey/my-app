import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24 gap-4">
      <h1 className="text-6xl font-bold text-center">
        <span className="text-blue-500">Next</span>
        <span className="text-red-500">JS</span>
        <span className="text-yellow-500"> + </span>
        <span className="text-blue-500">Tailwind</span>
        <span className="text-green-500">CSS</span>
      </h1>
      <h2 className="text-4xl font-bold text-center">
        <span className="text-purple-500">MVC</span>
        <span className="text-yellow-500"> Architecture</span>
        <span className="text-red-500"> + </span>
        <span className="text-blue-500">ORM</span>
      </h2>
    </main>
  )
}
