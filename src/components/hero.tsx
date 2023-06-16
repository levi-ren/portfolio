import Logo from "./logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-2 text-center min-h-screen flex flex-col justify-center items-center"
    >
      <Logo className="h-[40vw] w-[40vw] absolute text-zinc-300 dark:text-zinc-900 duration-75" />
      <div className="text-5xl sm:text-7xl font-mono relative z-10">
        <h1 className="font-bold text-7xl">Levi Deang</h1>
        <h2 className="text-xl">Front-end developer</h2>
      </div>
    </section>
  );
}
