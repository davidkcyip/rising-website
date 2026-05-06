export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] text-white text-center px-6">

      {/* Logo */}
      <div className="mb-8">
        {/* Replace this with your actual logo image if needed */}
        <img src="/logo.png" className="rounded-lg max-w-[200px]" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl text-[#000000] font-semibold max-w-4xl leading-tight">
        Top books summarised for you
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-[#000000] text-lg">
        Website coming soon
      </p>

    </main>
  );
}
