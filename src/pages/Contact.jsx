const Contact = () => {
  return (
    <div className="fade-in-left flex h-screen w-full  justify-center gap-4  bg-sixth pt-16 text-first">
      <section className="w-2/5 p-5">
        <h2 className="my-3 uppercase opacity-60">- Let's connect</h2>
        <h2 className="mb-1 text-2xl font-extrabold">Get in touch</h2>
        <p className="my-10 text-sm opacity-70">
          I'm currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want to run past me. You can
          contact anytime at 24/7
        </p>

        <div className="border-l-4 border-fourth p-3 text-sm">
          <a
            className="my-2 block hover:text-fourth"
            href="tel:+254712345678p000"
          >
            +254712345678
          </a>
          <a
            href="mailto:muciraerick.contact@gmail.com"
            className="my-2 block hover:text-fourth"
          >
            muciraerick.contact@gmail.com
          </a>
          <p>Nairobi, Kenya</p>
        </div>
      </section>

      <div className="w-2/5 "></div>
    </div>
  );
};

export default Contact;
