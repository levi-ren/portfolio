import Logo from "./logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-2 text-center"
    >
      <Logo className="absolute h-[40vw] w-[40vw] text-zinc-300 duration-75 dark:text-zinc-900" />
      <div className="relative z-10 font-shadows text-5xl sm:text-7xl">
        <h1 className="text-7xl font-bold">Levi Deang</h1>
        <h2 className="text-2xl">Software developer</h2>
      </div>
    </section>
  );
}
