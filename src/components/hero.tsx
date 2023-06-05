import Logo from "./logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-2 text-center min-h-screen flex flex-col justify-center items-center"
    >
      <Logo className="h-[40vw] w-[40vw] absolute text-zinc-900/30" />
      <div className="text-5xl sm:text-7xl font-mono relative z-10">
        <h2 className="">Levi Deang</h2>
        <h2 className="text-xl">Front-end developer</h2>
      </div>
    </section>
  );
}
