import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl font-bold">HOME</h1>
      <Image className="rounded-lg h-auto w-96 m-8" src="https://i.pinimg.com/564x/5f/64/e3/5f64e3fa7b6ce8daf9d704db504f7bb3.jpg" alt="" />
    </div>
  );
}
