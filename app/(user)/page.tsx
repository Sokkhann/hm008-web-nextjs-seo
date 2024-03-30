import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl font-bold">HOME</h1>
      <img 
        className="rounded-lg" 
        src="https://i.pinimg.com/564x/5f/64/e3/5f64e3fa7b6ce8daf9d704db504f7bb3.jpg" 
        width={500}
        height={500}
        alt="" />
    </div>
  );
}
