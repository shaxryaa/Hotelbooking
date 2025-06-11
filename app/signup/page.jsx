import React from "react";

const SignupPage = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create an Account
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600">
              Log in
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
