const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 font-poppins">
              Hi, I&apos;m Rezky
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mt-7 w-72 md:w-96 ">
              I have experience in developing Website using ReactJS, and Laravel.
            </h2>
            <div className="flex justify-center items-center gap-3 mt-7">
              <a
                href="https://www.linkedin.com/in/rezkybp/"
                className="border border-gray px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1U_mW_FOIuofz8pb0E7JTGc0MM98mQPRY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="border border-gray px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home