const SignIn = () => {
  return (
      <section id="signin">
          <div className="flex flex-col items-center mt-6 lg:mt-20">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                  Welcome Back to
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                      {" "} DevSphere
                  </span>
              </h1>
              <p className="mt-5 text-lg text-center text-neutral-500 max-w-2xl">
                  Sign in to continue building amazing VR experiences!
              </p>
              <form className="mt-10 w-1/2 flex flex-col items-center">
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 my-2 border rounded-md" />
                  <input type="password" placeholder="Password" className="w-full px-4 py-3 my-2 border rounded-md" />
                  <button className="bg-gradient-to-r from-black to-black text-white py-3 px-6 rounded-md mt-4 hover:from-white hover:to-white hover:text-black transition-all duration-300">
                      Sign In
                  </button>
              </form>
              <p 
              
              className="mt-5 text-neutral-500">Don't have an account? <a href="#create-account" className="text-orange-500">Create one</a></p>
          </div>
      </section>
  );
};

const CreateAccount = () => {
  return (
      <section id="create-account">
          <div className="flex flex-col items-center mt-6 lg:mt-20">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                  Join
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                      {" "} DevSphere Today
                  </span>
              </h1>
              <p className="mt-5 text-lg text-center text-neutral-500 max-w-2xl">
                  Create your free account and start building next-gen VR applications!
              </p>
              <form className="mt-10 w-1/2 flex flex-col items-center">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 my-2 border rounded-md" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 my-2 border rounded-md" />
                  <input type="password" placeholder="Password" className="w-full px-4 py-3 my-2 border rounded-md" />
                  <button className="bg-gradient-to-r from-black to-black text-white py-3 px-6 rounded-md mt-4 hover:from-white hover:to-white hover:text-black transition-all duration-300">
                      Create Account
                  </button>
              </form>
              <p className="mt-5 text-neutral-500">Already have an account? <a href="#signin" className="text-orange-500">Sign in</a></p>
          </div>
      </section>
  );
};

export { SignIn, CreateAccount };
