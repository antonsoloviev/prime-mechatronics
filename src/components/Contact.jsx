import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc12e445-9d82-429c-87af-d09a2d413fe0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      console.log("Form Submitted Successfully");
      toast.success("Message sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <section
      id="Contact"
      className="relative container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden"
    >
      <h1 className="text-3xl sm:text-6xl font-bold mb-2 text-center">
        Свяжитесь с нами
      </h1>
      <p className="text-center">Опишите задачу и мы оперативно вам ответим</p>

      <form
        onSubmit={onSubmit}
        action=""
        className="flex flex-col max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Ваше Имя
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Ваше Имя"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Ваш Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Ваш Email"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Сообщение
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-gray-900 text-gray-300 py-2 px-12 mb-10 rounded-xl max-w-fit self-center cursor-pointer hover:text-white">
          {result ? result : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
