import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-violet-600 mb-4">
          Random String Generator
        </h1>

        <p className="text-gray-600 mb-6">
          A simple React application that generates random strings using React
          Hooks and client-side routing.
        </p>

        <Link
          to="/generator"
          className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 transition"
        >
          Open Generator
        </Link>
      </div>
    </div>
  );
}

export default Home;
