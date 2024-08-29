import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-4 text-red-500">Page Not Found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
