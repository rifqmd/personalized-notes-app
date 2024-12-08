import { useState } from "react";
import PropTypes from "prop-types";

const FormInput = ({ addDatas }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const limit = 50;

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value.slice(0, limit));
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addDatas({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form
      className="px-5 sm:px-24 py-7 md:py-14"
      onSubmit={onSubmitEventHandler}
    >
      <div className="container">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Judul :{" "}
            <span className="text-sm text-gray-500">
              {limit - title.length} sisa karakter
            </span>
          </label>
          <input
            value={title}
            onChange={onTitleChangeEventHandler}
            type="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Tuliskan judul..."
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Catatan
          </label>
          <textarea
            value={body}
            onChange={onBodyChangeEventHandler}
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tuliskan catatan..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Tambahkan
        </button>
      </div>
    </form>
  );
};
FormInput.propTypes = {
  addDatas: PropTypes.func.isRequired,
};

export default FormInput;
