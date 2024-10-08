const ExperiencePage = () => {
  return (
    <div className="flex flex-col min-h-screen font-opensans bg-base-200">
      <h1 className="text-4xl font-bold text-center mt-10">Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-20 my-10">
        <li>
          <div className="timeline-middle flex items-center justify-center">
            <div className="rounded-full bg-gray-300 text-gray-800 h-12 w-12 flex items-center justify-center font-bold">
              2022
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <span className="text-xl font-black bg-yellow-300">
            Danamon Bank Officer 
            </span>
            <div className="text-lg font-bold">Bank Danamon</div>
            <p>
            as a marketing officer I was assigned to find customers, promote bank Danamon latest products, also help extend customer loans tenor, analyze customer needs for credit loans, and analyze customers financial capabilities. Other things i do deeply is learning by doing from zero about process funding and lending at bank Danamon especially how bank on Indonesia works in general, achieve individual monthly target from the branch manager and Help Senior Business Officer to manage customer loan credit tenor extension
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <div className="rounded-full bg-gray-200 text-gray-800 h-12 w-12 flex items-center justify-center font-bold">
              2021
            </div>
          </div>
          <div className="timeline-end mb-10">
            <span className="text-xl font-black bg-yellow-300">
              Web Developer
            </span>
            <div className="text-lg font-bold">Badan Pengawas Obat dan Makanan</div>
            <p>
            in this project we work as a team with three peoples, I was assigned to make all the features related to user needs. the website is used for internal division at BPOM. the website use bootstrap for frond-end and laravel for back-end 
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default ExperiencePage;
