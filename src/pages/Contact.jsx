import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="fade-in-left -mt-56 flex h-screen w-full justify-center  gap-4 bg-sixth  pt-16 text-first lg:-mt-0">
      <section className=" w-full p-5 lg:w-2/5">
        <h2 className="my-3 uppercase opacity-60">- Let's connect</h2>
        <h2 className="mb-1 text-2xl font-extrabold">Get in touch</h2>
        <p className="my-10 text-sm opacity-70">
          I'm currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want to run past me. You can
          contact anytime at 24/7
        </p>

        <div className="border-l-4 border-fourth p-3 text-sm">
          <a
            className="my-2 flex items-center gap-2 hover:text-fourth"
            href="tel:+254717694466p000"
          >
            <FaPhoneAlt />
            <p> Make a call</p>
          </a>
          <a
            href="mailto:muciraerick254@gmail.com"
            className="my-2  flex items-center gap-2 hover:text-fourth"
          >
            <MdMarkEmailRead />
            <p>Write an Email</p>
          </a>
          <p className="flex items-center gap-2">
            <MdLocationOn />
            Nairobi, Kenya
          </p>
        </div>
      </section>

      <div className="w-0 lg:w-2/5"></div>
    </div>
  );
};

export default Contact;
