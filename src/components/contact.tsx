import Container from "./container";
import Form from "./form";

interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <section id="contact" className="pt-28 px-2">
      <Container className="">
        <p className="font-mono text-7xl text-right">Contact:</p>
        <p className="text-right text-xl font-mono">
          Interested? Feel free to say hi.
        </p>

        <Form>
          <div className="relative">
            <input
              id="name"
              name="name"
              className="w-full bg-transparent outline-none border-b-2   dark:border-slate-50/20 border-black/70 px-2 peer placeholder:text-sm pb-2"
              required
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="text-sm absolute left-2 peer-focus:-translate-y-6 transition-transform peer-[:not(:placeholder-shown)]:-translate-y-6 after:content-['✱'] after:text-rose-500"
            >
              Name{" "}
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="From"
              className="w-full bg-transparent outline-none border-b-2   dark:border-slate-50/20 border-black/70 px-2 peer placeholder:text-sm pb-2 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:border-rose-500"
              required
              type="email"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="text-sm absolute left-2 peer-focus:-translate-y-6 transition-transform peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 after:content-['✱'] after:text-rose-500"
            >
              Email{" "}
            </label>
          </div>

          <div className="relative">
            <input
              id="subject"
              name="Subject"
              className="w-full bg-transparent outline-none border-b-2   dark:border-slate-50/20 border-black/70 px-2 peer placeholder:text-sm pb-2 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:border-rose-500"
              required
              placeholder=" "
            />
            <label
              htmlFor="subject"
              className="text-sm absolute left-2 peer-focus:-translate-y-6 transition-transform peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 after:content-['✱'] after:text-rose-500"
            >
              Subject{" "}
            </label>
          </div>

          <div className="relative">
            <textarea
              id="body"
              name="Body"
              className="w-full bg-transparent outline-none border-b-2   dark:border-slate-50/20 border-black/70 px-2 peer placeholder:text-sm pb-2 invalid:[&:not(:placeholder-shown)]:dark:text-rose-500 invalid:[&:not(:placeholder-shown)]:text-rose-700 invalid:[&:not(:placeholder-shown)]:dark:border-rose-500 invalid:[&:not(:placeholder-shown)]:border-rose-500 resize-none h-40"
              required
              placeholder=" "
            />
            <label
              htmlFor="body"
              className="text-sm absolute left-2 peer-focus:-translate-y-6 transition-transform peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:invalid:dark:text-rose-500 peer-[:not(:placeholder-shown)]:invalid:text-rose-700 after:content-['✱'] after:text-rose-500"
            >
              Message{" "}
            </label>
          </div>
          <button className="text-xs rounded-full border dark:border-slate-50/20 border-black/70 py-4 px-8 m-auto block">
            SEND MESSAGE
          </button>
        </Form>
      </Container>
    </section>
  );
}
