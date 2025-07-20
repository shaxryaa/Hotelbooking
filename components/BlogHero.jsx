export default function BlogHero() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/blog-hero.jpg"
          alt="Blog Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg md:text-xl">
          Explore the latest trends, insights, and stories from our experts.
        </p>
      </div>
    </section>
  );
}