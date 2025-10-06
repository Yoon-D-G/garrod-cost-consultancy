export default function Home() {
  return (
    <div className="font-serif bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
              Garrod Cost Consultancy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert cost reduction consultancy in the UK. Reduce costs or it’s free—unmatched value for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </a>
          </div>
          <div className="hidden lg:block">
            <img src="https://placehold.co/600x400/png?text=Professional+Consultancy" alt="Consultancy Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Cost Audit</h3>
              <p className="text-gray-300">Comprehensive audits to identify savings without risk.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-300">Streamline suppliers for maximum efficiency.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Overhead Reduction</h3>
              <p className="text-gray-300">Cut unnecessary expenses while maintaining operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-300">"Saved us 25% on costs—highly recommend!"</p>
              <cite className="block text-right text-yellow-400">- Client A</cite>
            </blockquote>
            <blockquote className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-300">"Professional and results-oriented service."</p>
              <cite className="block text-right text-yellow-400">- Client B</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center text-gray-300">
        <p>&copy; 2025 Garrod Cost Consultancy. All rights reserved.</p>
        <a href="/contact" className="text-yellow-400 hover:underline">Contact Us</a>
      </footer>
    </div>
  );
}