import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

const Card = ({
  changeButton,
  id,
  title,
  body,
  createdAt,
  onDelete,
  buttonData,
}) => {
  return (
    <div className="mx-auto p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="text-gray-400 pb-2">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
      </div>
      <p className="mb-3 font-normal text-gray-700">{body}</p>
      <div className="flex gap-5">
        <button
          onClick={() => onDelete(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Delete
        </button>
        <button
          onClick={() => buttonData(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          {changeButton}
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  changeButton: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  buttonData: PropTypes.func.isRequired,
};

export default Card;
