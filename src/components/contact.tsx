import Container from "./container";
import Form from "./form";

interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <section id="contact" className="px-2 pt-28">
      <Container className="">
        <h3 className="font-mono text-7xl font-bold">Contact:</h3>
        <p className="font-mono text-xl">Interested? Feel free to say hi.</p>

        <Form>
          <div className="relative">
            <input
              id="name"
              name="name"
              className="peer w-full border-b-2 border-black/70   bg-transparent px-2 pb-2 outline-none transition-[border] duration-300 placeholder:text-sm dark:border-slate-50/20"
              required
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-2 text-sm transition-transform after:text-rose-500 after:content-['✱'] peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-y-6"
            >
              Name{" "}
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="From"
              className="peer w-full border-b-2 border-black/70   bg-transparent px-2 pb-2 outline-none transition-[border] duration-300 placeholder:text-sm dark:border-slate-50/20 invalid:[&:not(:placeholder-shown)]:border-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500"
              required
              type="email"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-2 text-sm transition-transform after:text-rose-500 after:content-['✱'] peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500"
            >
              Email{" "}
            </label>
          </div>

          <div className="relative">
            <input
              id="subject"
              name="Subject"
              className="peer w-full border-b-2 border-black/70   bg-transparent px-2 pb-2 outline-none transition-[border] duration-300 placeholder:text-sm dark:border-slate-50/20 invalid:[&:not(:placeholder-shown)]:border-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500"
              required
              placeholder=" "
            />
            <label
              htmlFor="subject"
              className="absolute left-2 text-sm transition-transform after:text-rose-500 after:content-['✱'] peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500"
            >
              Subject{" "}
            </label>
          </div>

          <div className="relative">
            <textarea
              id="body"
              name="Body"
              className="peer h-40 w-full resize-none   border-b-2 border-black/70 bg-transparent px-2 pb-2 outline-none transition-[border] duration-300 placeholder:text-sm dark:border-slate-50/20 invalid:[&:not(:placeholder-shown)]:border-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500"
              required
              placeholder=" "
            />
            <label
              htmlFor="body"
              className="absolute left-2 text-sm transition-transform after:text-rose-500 after:content-['✱'] peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500"
            >
              Message{" "}
            </label>
          </div>
        </Form>
      </Container>
    </section>
  );
}
