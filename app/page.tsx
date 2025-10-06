import Image from "next/image";

export default function Home() {
  return (
    <div className="font-serif bg-gray-900 text-white min-h-screen flex items-center justify-center py-16 px-4">
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gold-500 tracking-tight">
            Garrod Cost Consultancy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Expert cost reduction consultancy in the UK. Reduce costs or it’s free—unmatched value for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gold-600 transition duration-300 transform hover:-translate-y-1"
          >
            Schedule Free Consultation
          </a>
        </div>
        {/* Right Side: Decorative Element (Placeholder) */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-gold-500/20 to-gray-800/50 rounded-lg h-64 animate-pulse"></div>
        </div>
      </main>
    </div>
  );
}