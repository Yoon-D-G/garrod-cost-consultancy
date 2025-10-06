import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-4">
      <main className="flex flex-col gap-6 max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Garrod Cost Consultancy</h1>
        <p className="text-lg">Reduce costs or it’s free—expert cost reduction consultancy in the UK.</p>
        <a href="/contact" className="bg-blue-600 text-white p-2 rounded">Get Free Consultation</a>
      </main>
    </div>
  );
}