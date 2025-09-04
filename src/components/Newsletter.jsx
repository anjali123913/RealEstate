export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
        <p className="mt-2 text-gray-600">
          Get the latest property updates straight to your inbox.
        </p>
        <form className="mt-6 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
