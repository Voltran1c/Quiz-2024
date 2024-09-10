const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4">
      <div className="max-w-full sm:max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="p-2 sm:px-16 sm:pt-8 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
          <div className="text-center sm:text-left">
            <h1 className="text-base sm:text-4xl font-bold uppercase text-[#af9221]">
              Watcharapong <span className="text-black">Kornsawan</span>
            </h1>
            <p className="text-xs sm:text-lg pt-2 sm:pt-3">
              <strong>Email:</strong> Watcharapong.k.korn@gmail.com{" "}
              <strong className="text-[#af9221]">|</strong>{" "}
              <strong>GitHub:</strong> github.com/Voltran1c
            </p>
            <p className="text-xs sm:text-lg">
              <strong>LinkedIn:</strong> linkedin.com/in/watcharapong1996/{" "}
              <strong className="text-[#af9221]">|</strong>{" "}
              <strong>Mobile:</strong> (+66) 62 254 1671
            </p>
          </div>
          <img
            src="/web_qrcode.png"
            alt=""
            className="w-20 h-20 sm:w-28 sm:h-28 mt-2 sm:mt-0"
          />
        </header>

        <main className="p-2 sm:px-16">
          <section className="mb-2 border-y-2 border-y-[#af9221] py-2">
            <h2 className="text-sm sm:text-xl font-bold mb-2 text-[#af9221]">
              TECHNICAL SKILLS
            </h2>
            <ul className="list-none text-xs sm:text-base space-y-1 sm:space-y-2">
              <li>
                <strong>Languages:</strong> JavaScript, HTML/CSS, SQL,
                TypeScript
              </li>
              <li>
                <strong>Framework/Library:</strong> Tailwind CSS, Antd, ReactJS,
                Node.js, Express, Next.js
              </li>
              <li>
                <strong>Developer Tools:</strong> Git, GitHub, SQLite, MongoDB,
                Figma, Draw.io, Miro, Excalidraw, VS Code, Cloudinary
              </li>
              <li>
                <strong>AI Tools:</strong> ChatGPT, Gemini
              </li>
            </ul>
          </section>

          <section className="mb-2 border-b-2 border-b-[#af9221] pb-2">
            <h2 className="text-sm sm:text-xl font-bold mb-2 text-[#af9221]">
              PROJECTS
            </h2>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-base">
              <div>
                <h3 className="font-bold">E-commerce Website (Kick it up)</h3>
                <ul className="list-disc list-inside pl-3">
                  <li>
                    Implemented Scrum methodology and used Jira for managing the
                    E-commerce web application project, ensuring efficient
                    project execution.
                  </li>
                  <li>
                    Designed a user-friendly Home page using Figma and developed
                    the frontend with React, handling API requests using Axios.
                  </li>
                  <li>
                    Created scalable backend services with Node.js and developed
                    secure user-related APIs.
                  </li>
                  <li>
                    Using MongoDB for eCommerce website development provides
                    flexibility, efficient data management, and strong support
                    for future scalability.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">
                  MEA (Metropolitan Electricity Authority)
                </h3>
                <ul className="list-disc list-inside pl-3">
                  <li>
                    Created a web page for the Metropolitan Electricity
                    Authority (MEA) of Thailand to manage power outage
                    notifications using React with TypeScript and Ant Design
                    (Antd) for UI design.
                  </li>
                  <li>
                    Implemented CRUD operations and employed Redux for efficient
                    state management and connecting to the database.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-2 border-b-2 border-b-[#af9221] pb-2">
            <h2 className="text-sm sm:text-xl font-bold mb-2 text-[#af9221]">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-base">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold">
                  <h3>Junior Software Developer Bootcamp</h3>
                  <h3>(April 2024 - July 2024)</h3>
                </div>
                <h3 className="font-bold">Generation Thailand</h3>
                <ul className="list-disc list-inside pl-3">
                  <li>
                    Applied Agile methodology and Scrum framework to ensure
                    effective teamwork and project management.
                  </li>
                  <li>
                    Used Figma to design wireframes and realistic prototypes.
                  </li>
                  <li>
                    Employed Node.js for database connections and processing,
                    suitable for websites requiring support for a large number
                    of users.
                  </li>
                  <li>
                    Utilized MongoDB for storing data in a document format,
                    supporting high speed and efficiency.
                  </li>
                  <li>
                    Used Cloudinary for storing and managing images in the
                    eCommerce application, providing efficient image
                    optimization and delivery.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold">
                  <h3>Infrastructure Engineering Bootcamp</h3>
                  <h3>(September 2023 - November 2023)</h3>
                </div>
                <h3 className="font-bold">KBTG X Digitech SUT</h3>
                <ul className="list-disc list-inside pl-3">
                  <li>
                    Managed Linux systems and servers, ensuring security and
                    reliability.
                  </li>
                  <li>
                    Designed and implemented secure infrastructure using Docker
                    and Kubernetes for scalable deployments and orchestration.
                  </li>
                  <li>
                    Utilized Prometheus, Grafana, and ELK stack for real-time
                    monitoring, logging, and alerting to maintain system
                    performance and diagnose issues.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold">
                  <h3>Draftman/Foreman</h3>
                  <h3>(July 2019 - March 2024)</h3>
                </div>
                <h3 className="font-bold">Well Pipe System Co., Ltd.</h3>
                <ul className="list-disc list-inside pl-3">
                  <li>
                    Planned and coordinated work for contractors, ensuring
                    effective communication with the project owner and adherence
                    to project plans.
                  </li>
                  <li>
                    Prepared Bills of Quantities (BOQs) to facilitate
                    procurement and budget control, achieving an average profit
                    margin of 20-30% per project.
                  </li>
                  <li>
                    Monitored and controlled the team`s work to ensure
                    compliance with safety and quality standards.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-center">
            <div className="border-r-2 border-r-[#af9221] pr-4 sm:pr-8">
              <h2 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-[#af9221]">
                EDUCATION
              </h2>
              <p className="text-xs sm:text-base font-bold">
                Chiangmai University (2019)
              </p>
              <p className="text-xs sm:text-base">
                Bachelor of Engineering in Mining Engineering
              </p>
            </div>
            <div className="sm:pl-12">
              <h2 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-[#af9221]">
                CERTIFICATIONS
              </h2>
              <p className="text-xs sm:text-base font-bold">
                Infrastructure Engineering Bootcamp (2023)
              </p>
              <p className="text-xs sm:text-base">
                KBTG (KASIKORN Business-Technology Group)
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
