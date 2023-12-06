import { IoArrowBackCircleSharp } from "react-icons/io5";
import Button from "../components/Button/Button";

const NotFound = () => {
  const buttonStyles = `flex w-64 items-center justify-center gap-2 rounded-md border border-transparent bg-first  py-3 font-extralight text-white outline-none transition-all hover:border-first hover:bg-white hover:text-first block mx-auto`;

  return (
    <section className="mx-auto my-14 flex w-11/12 flex-col items-center justify-center py-4 lg:w-1/2">
      <img
        src="./images/notFound.png"
        alt="not-found-image"
        className="mx-auto h-80 w-full object-cover object-center sm:w-[400px]"
      />
      <div>
        <h2 className="font-first my-4 text-xl md:text-4xl">
          Oops, looks like the page is lost.
        </h2>
        <p className="mb-4 text-lg leading-8 opacity-80 md:text-xl">
          This is not a fault, just an accident that was not intentional.
        </p>
        <Button to="/" className={buttonStyles}>
          <IoArrowBackCircleSharp />
          Back to homepage
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
