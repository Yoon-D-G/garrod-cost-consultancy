export default function Home() {
  return (
    <div className="font-serif bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gold-500">Garrod Cost Consultancy</h2>
        <nav>
          <a href="#services" className="text-gray-300 hover:text-gold-500 ml-6">Services</a>
          <a href="#about" className="text-gray-300 hover:text-gold-500 ml-6">About</a>
          <a href="/contact" className="text-gray-300 hover:text-gold-500 ml-6">Contact</a>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gold-500 leading-tight">
            Maximize Savings with Expert Cost Reduction
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Garrod Cost Consultancy delivers tailored strategies to cut costs effectively. 
            Guaranteed results or your consultation is free. Partner with us for financial excellence.
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-gold-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gold-600 transition duration-300">
              Get Free Consultation
            </a>
            <a href="#services" className="border border-gold-500 text-gold-500 font-semibold py-3 px-6 rounded-lg hover:bg-gold-500 hover:text-gray-900 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-gold-500/20 to-gray-700 rounded-lg h-64 lg:h-80 animate-pulse"></div>
        </div>
      </main>
      <section id="services" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gold-500">Cost Analysis</h3>
            <p className="text-gray-400 mt-2">Detailed audits to identify savings opportunities.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gold-500">Process Optimization</h3>
            <p className="text-gray-400 mt-2">Streamline operations for maximum efficiency.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gold-500">Negotiation Support</h3>
            <p className="text-gray-400 mt-2">Expert negotiation with suppliers and vendors.</p>
          </div>
        </div>
      </section>
    </div>
  );
}