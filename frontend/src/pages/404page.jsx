import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <img
        src={
          "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        }
        alt="404 Not Found"
        className="w-96 mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-600">404 Not Found</h1>
      <p className="text-xl text-gray-700 mt-2">
        Whoops! That page doesn’t exist.
      </p>
      <p className="text-gray-500 mt-2">Here are some helpful links instead:</p>
      <div className="flex space-x-4 mt-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
