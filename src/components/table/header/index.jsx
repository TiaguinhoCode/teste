export const TableHeader = ({
  setFilters,
  filters,
  searchParams,
  setSearchParams,
}) => {
  // bg-blue-500 text-white hover:bg-blue-600 todos
  return (
    <main className="flex justify-between rounded-lg items-center mb-5 bg-white p-6 shadow-md">
      <div className="flex w-full items-center justify-between">
        <div className="flex space-x-3">
          {["Todos", "Peining", "Devia", "Kimaster", "Hrebos", "B-Max"].map(
            (label, index) => (
              <button
                key={index}
                onClick={() => setFilters(label)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-150 ease-in-out focus:outline-none border ${
                  filters === label
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border-gray-300 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                }`}
                type="button"
              >
                {label}
              </button>
            )
          )}
        </div>
        <div>
          <div className="flex items-center max-w-md mx-auto bg-white rounded-lg border border-gray-500">
            <div className="w-full">
              <input
                value={searchParams}
                onChange={(e) => setSearchParams(e.target.value)}
                type="search"
                className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
