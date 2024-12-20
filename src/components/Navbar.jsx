import PropTypes from "prop-types";

const Navbar = ({ handleSearch }) => {
  return (
    <nav className="bg-SecondaryColor px-5 sm:px-24 py-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto gap-5 sm:gap-0">
        <h1 className="flex items-center self-center text-PrimaryTextColor text-3xl font-bold whitespace-nowrap uppercase">
          Private Notes
        </h1>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onChange={(event) => handleSearch(event)}
            type="text"
            id="search-navbar"
            className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-BorderPrimaryColor sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari..."
          />
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Navbar;
