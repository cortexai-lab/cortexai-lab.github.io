import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section id="about" className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Left side - Text */}
          <div className="flex-1 w-full">
            <div className="inline-block bg-blue-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Innovating at the Intersection of AI, Healthcare, and Bio-Inspired Robotics
            </h1>
            <div className="prose prose-sm md:prose-lg max-w-none">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Located within the Department of Robotics and Mechatronics Engineering at the University of Dhaka, <strong>Cortex AI Lab</strong> stands at the cutting edge of applied artificial intelligence in <strong>Biomedical AI</strong>, <strong>Multi-Modal Learning</strong>, <strong>Self-Supervised Learning</strong>, <strong>3D Scene Understanding</strong>, and <strong>bio-inspired robotics</strong>.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Our lab proudly collaborates with the <strong>National Institute of Cardiovascular Diseases</strong>, <strong>Combined Military Hospital</strong>, and multiple departments within the University of Dhaka.
              </p>
              <p className="text-blue-700 font-medium text-base md:text-lg">
                Join us as we innovate for a healthier and smarter future.
              </p>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-64 md:h-64">
              <Image
                src=".\\assets\\logo.png"
                alt="Cortex AI Lab Logo"
                width={256}
                height={256}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">🔥</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">News</h2>
        </div>

        <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2025</span>
            <span className="text-gray-700">Received the Dhaka University <span className="font-medium" >Research Excellence Award</span> for our contributions to academic research.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2024</span>
            <span className="text-gray-700">Awarded the ICT Division's <span className="font-medium">Innovation Fund</span> for our research on smart biomimetic robots.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2024</span>
            <span className="text-gray-700">Our project, <span className="font-medium">"TurtleBot"</span>, an underwater exploration robot inspired by sea turtles, became the champion at the Robotronics Fest 2025</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2023</span>
            <span className="text-gray-700">Secured the <span className="font-medium">UGC Research Grant</span> to develop an AI framework for assessing climate-induced stress in plants.</span>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">📄</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Featured Publications</h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Publication cards - make them more mobile friendly */}
          {[
            {
              image: ".\\assets\\nana_particle.png",
              badge: "Nanoscale Advances",
              badgeColor: "bg-cyan-700",
              year: "2024",
              title: "Leveraging Generative Neural Networks for Accurate, Diverse, and Robust Nanoparticle Design",
              authors: "Rahman T, Tahmid A, Arman SE, et al.",
              link: "https://pubs.rsc.org/en/content/articlehtml/2025/na/d4na00859f",
              impact: "4.6",
              quartile: "Q1",
              highlights: [
                "Generative frameworks to explore robust nanoparticle configurations",
                "Balances accuracy, diversity, and stability in design space"
              ]
            },
                        {
              image: ".\\assets\\CovidXception.png",
              badge: "SN Computer Science",
              badgeColor: "bg-slate-700",
              year: "2022",
              title: "COVIDXception-Net: A Bayesian Optimization-Based Deep Learning Approach to Diagnose COVID-19 from X-Ray Images",
              authors: "Arman SE, Rahman S, Deowan SA",
              link: "https://link.springer.com/article/10.1007/s42979-021-00980-3",
              highlights: [
                "Xception-based transfer learning tuned with Bayesian optimization",
                "Improves sensitivity at clinically relevant thresholds"
              ]
            },
            {
              image: ".\\assets\\banasqueezenet.jpg",
              badge: "Smart Agricultural Tech",
              badgeColor: "bg-green-700",
              year: "2023",
              title: "BananaSqueezeNet: A very fast, lightweight convolutional neural network for the diagnosis of three prominent banana leaf diseases",
              authors: "Bhuiyan MA, Abdullah HM, Arman SE (Corresponding Author), et al.",
              link: "https://www.sciencedirect.com/science/article/pii/S2772375523000448",
              impact: "6.3",
              quartile: "Q1",
              highlights: [
                "Sub-20MB CNN optimized for edge deployment with strong accuracy",
                "Real-time inference suitable for field diagnostics"
              ]
            },
            {
              image: ".\\assets\\plantVillage.png",
              badge: "arXiv",
              badgeColor: "bg-gray-900",
              year: "2025",
              title: "PlantVillageVQA: A Visual Question Answering Dataset for Benchmarking Vision-Language Models in Plant Science",
              authors: "Preprint (arXiv); under review",
              link: "https://arxiv.org/pdf/2508.17117",
              highlights: [
                "New VQA benchmark for plant science grounded in expert-curated queries",
                "Designed for evaluating generalist vision-language models"
              ]
            },
            {
              image: ".\\assets\\plantcareNet.png",
              badge: "Plant Methods",
              badgeColor: "bg-emerald-600",
              year: "2025",
              title: "PlantCareNet: an advanced system to recognize plant diseases with dual-mode recommendations for prevention",
              authors: "Islam M, Azad AK, Arman SE, et al.",
              link: "https://link.springer.com/article/10.1186/s13007-025-01366-9",
              impact: "5.6",
              quartile: "Q1",
              highlights: [
                "End-to-end system coupling disease recognition with prevention recommendations",
                "Dual-mode guidance for proactive and reactive crop care"
              ]
            },

            {
              image: ".\\assets\\mango_leaf.jpg",
              badge: "Heliyon",
              badgeColor: "bg-orange-600",
              year: "2024",
              title: "Deep Learning for Mango Leaf Disease Identification: A Vision Transformer Perspective",
              authors: "Bhuiyan MA, Arman SE, et al.",
              link: "https://www.cell.com/heliyon/fulltext/S2405-8440(24)04783-3",
              impact: "3.4",
              quartile: "Q1",
              highlights: [
                "Applies Vision Transformers to identify mango leaf diseases with high accuracy",
                "Demonstrates the effectiveness of attention mechanisms for fine-grained classification"
              ]
            },
          ].map((pub, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                {/* Image Section */}
                <div className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 bg-white rounded overflow-hidden border border-gray-200">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    width={160}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Section */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`${pub.badgeColor} text-white px-2 py-0.5 rounded text-xs font-medium`}>
                      {pub.badge}
                    </span>
                    <span className="text-gray-600 text-xs">{pub.year}</span>
                    {pub.impact && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">
                        IF: {pub.impact}
                      </span>
                    )}
                    {pub.quartile && (
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">
                        {pub.quartile}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 leading-snug">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      {pub.title}
                    </a>
                  </h3>
                  
                  <p className="text-xs text-gray-600 mb-2">{pub.authors}</p>
                  
                  {pub.highlights && (
                    <ul className="text-xs text-gray-700 space-y-1">
                      {pub.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <span className="text-blue-500 mr-1 flex-shrink-0">•</span>
                          <span className="leading-tight">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 md:mt-6 text-center">
          <Link
            href="/publications"
            className="inline-block text-xs md:text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All Publications →
          </Link>
        </div>
      </section>

      {/* Fundings Section */}
      <section id="fundings" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">💰</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Fundings</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              year: "2025",
              title: "Development of AI-Driven Solutions for Healthcare",
              agency: "ICT Division, Bangladesh",
              amount: "BDT 25 Lakh"
            },
            {
              year: "2024",
              title: "Bio-inspired Robotics for Industrial Applications",
              agency: "University Grants Commission (UGC)",
              amount: "BDT 15 Lakh"
            },
            {
              year: "2023",
              title: "Climate Stress Assessment in Plants Using AI",
              agency: "University of Dhaka Research Grant",
              amount: "BDT 8 Lakh"
            },
          ].map((funding, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">
                      {funding.year}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">
                      {funding.amount}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{funding.title}</h3>
                  <p className="text-xs text-gray-600">{funding.agency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">🤝</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Collaborations</h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">National Institute of Cardiovascular Diseases (NICD)</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Collaborating on AI-powered medical imaging solutions for early diagnosis of cardiovascular conditions.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Combined Military Hospital (CMH)</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Joint research on applying deep learning for medical diagnostics and patient care optimization.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Department of Botany, University of Dhaka</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Research partnership on AI-based plant disease detection and climate impact assessment.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 md:p-4">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">Department of Geology, University of Dhaka</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Collaborative projects on environmental monitoring and geological data analysis using AI.
            </p>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">👥</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">People</h2>
        </div>

{/* Principal Investigator */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center"> Founding Director & Principal Investigator </h3>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 bg-gray-200 rounded-lg overflow-hidden border-2 border-blue-200 shadow-sm">
                <Image
                  src=".\\assets\\shifat-arman.png" 
                  alt="Shifat E. Arman"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900">Shifat E Arman</h4>
              <p className="text-sm text-gray-600">Assistant Professor</p>
              <p className="text-xs text-gray-500 mt-1">Department of Robotics & Mechatronics Engineering</p>
              <p className="text-xs text-gray-500">University of Dhaka</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-3">
                {(() => {
                  const links = {
                    linkedin: "https://www.linkedin.com/in/shifatearman",
                    scholar: "https://scholar.google.com/citations?user=9IRPbVkAAAAJ&hl=en",
                    github: "https://github.com/shifatearman",
                    website: "https://shifatearman.github.io"
                  };
                  
                  return (
                    <>
                      {links.linkedin && (
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                      {links.scholar && (
                        <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" title="Google Scholar">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                        </a>
                      )}
                      {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors" title="GitHub">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {links.website && (
                        <a href={links.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" title="Personal Website">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                        </a>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>



{/* Academic Collaborators */}
        <div className="mt-12 md:mt-16 mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">Academic Collaborators</h3>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { 
                name: "Dr. Mohammad Zabed Hossain", 
                title: "Professor",
                department: "Department of Botany",
                institution: "University of Dhaka",
                imageSrc: "/team/zabed_sir.jpg",
                links: {
                  linkedin: "https://www.linkedin.com/in/zabed-hossain-63907242/?originalSubdomain=bd",
                  scholar: "https://scholar.google.com/citations?user=1vGdL8sAAAAJ&hl=en",
                  github: "",
                  website: "https://www.du.ac.bd/faculty/faculty_details/HSH/1574"
                }
              },
              { 
                name: "Dr. Md. Ashraful Islam", 
                title: "Associate Professor",
                department: "Dept. of Geology",
                institution: "University of Dhaka",
                imageSrc: "/team/himel_sir.jpg",
                links: {
                  linkedin: "",
                  scholar: "https://scholar.google.com/citations?user=iEdWlIoAAAAJ&hl=en",
                  github: "",
                  website: "https://du.ac.bd/body/faculty_details/GLG/1919"
                }
              },
              { 
                name: "Dr. Ahsan Habib", 
                title: "Associate Professor",
                department: "Dept. of EEE",
                institution: "University of Dhaka",
                imageSrc: "/team/habib_sir.png",
                links: {
                  linkedin: "",
                  scholar: "https://scholar.google.com/citations?hl=en&user=I_kMFEIAAAAJ&view_op=list_works&sortby=pubdate",
                  github: "",
                  website: "https://www.du.ac.bd/faculty/faculty_details/HEK/1428"
                }
              },
            ].map((collaborator, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 bg-gray-200 rounded-lg overflow-hidden border-2 border-blue-200 shadow-sm">
                  {collaborator.imageSrc ? (
                    <Image
                      src={collaborator.imageSrc}
                      alt={collaborator.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <h4 className="text-sm md:text-base font-semibold text-gray-900">{collaborator.name}</h4>
                <p className="text-xs md:text-sm text-gray-600">{collaborator.title}</p>
                <p className="text-xs text-gray-500 mt-1">{collaborator.department}</p>
                <p className="text-xs text-gray-500">{collaborator.institution}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-2 mt-2">
                  {collaborator.links.linkedin && (
                    <a href={collaborator.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                  {collaborator.links.scholar && (
                    <a href={collaborator.links.scholar} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" title="Google Scholar">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                    </a>
                  )}
                  {collaborator.links.github && (
                    <a href={collaborator.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors" title="GitHub">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {collaborator.links.website && (
                    <a href={collaborator.links.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" title="Personal Website">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Industrial Collaborators */}
        <div className="mt-12 md:mt-16 mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">Industrial Collaborators</h3>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { 
                name: "Dr. Nahid Hasan", 
                title: "Medical Officer",
                department: "Cardiology (Course), NICD",
                institution: "MUHC, Rajshahi",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Col. Dr. Rashid Khan", 
                title: "Head of Medical Imaging",
                department: "Radiology Department",
                institution: "Combined Military Hospital",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Shahrear Bin Amin", 
                title: "Founding Engineer, VLM Run",
                department: "Cloud Engineer",
                institution: "",
                imageSrc: "/team/sharear.jpg",
                links: {
                  linkedin: "https://www.linkedin.com/in/shahrear-amin/",
                  scholar: "",
                  github: "https://github.com/ShahrearBinAmin",
                  website: ""
                }
              },
            ].map((collaborator, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 bg-gray-200 rounded-lg overflow-hidden border-2 border-blue-200 shadow-sm">
                  {collaborator.imageSrc ? (
                    <Image
                      src={collaborator.imageSrc}
                      alt={collaborator.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <h4 className="text-sm md:text-base font-semibold text-gray-900">{collaborator.name}</h4>
                <p className="text-xs md:text-sm text-gray-600">{collaborator.title}</p>
                <p className="text-xs text-gray-500 mt-1">{collaborator.department}</p>
                <p className="text-xs text-gray-500">{collaborator.institution}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-2 mt-2">
                  {collaborator.links.linkedin && (
                    <a href={collaborator.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                  {collaborator.links.scholar && (
                    <a href={collaborator.links.scholar} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" title="Google Scholar">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                    </a>
                  )}
                  {collaborator.links.github && (
                    <a href={collaborator.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors" title="GitHub">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {collaborator.links.website && (
                    <a href={collaborator.links.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" title="Personal Website">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
{/* Research Assistants */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">Research Assistants</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                name: "Jul Jalal Al-Mamur Sayor", 
                level: "MSc Student",
                interest: "Computer Vision",
                imageSrc: "/team/jalal.png",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Tapodhir Karmakar Taton", 
                level: "MSc Student",
                interest: "Computer Vision",
                imageSrc: "/team/taton.jpg",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Syed Nazmus Sakib", 
                level: "BSc Student",
                interest: "Computer Vision",
                imageSrc: "/team/Sakib.png",
                links: {
                  linkedin: "https://www.linkedin.com/in/nazmus-sakib-syed/",
                  scholar: "https://scholar.google.com/citations?user=4j76UvsAAAAJ&hl=en",
                  github: "https://github.com/SyedNazmusSakib-SNS",
                  website: "https://nazmus-sakib-nasa.netlify.app/"
                }
              },
              { 
                name: "Samudra Jit Saha", 
                level: "BSc Student",
                interest: "Bio-inspired Robotics",
                imageSrc: "/team/sam.jpg",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Md Tashrif Uzzaman", 
                level: "BSc Student",
                interest: "Computer Vision",
                imageSrc: "/team/tashrif.jpg",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "M.M Mahabub Morshed Prottoy", 
                level: "BSc Student",
                interest: "Computer Vision",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "MD Abid Chowdhury", 
                level: "BSc Student",
                interest: "Robotics",
                imageSrc: "/team/abod.jpg",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
              { 
                name: "Nafiul Haque", 
                level: "BSc Student",
                interest: "Robotics",
                links: {
                  linkedin: "",
                  scholar: "",
                  github: "",
                  website: ""
                }
              },
            ].map((ra, index) => (
              <div key={index} className="text-center">
                {/* Circular Image Container */}
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300">
                  {ra.imageSrc ? (
                    <Image
                      src={ra.imageSrc}
                      alt={ra.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Text Content */}
                <h4 className="text-sm md:text-base font-semibold text-gray-900">{ra.name}</h4>
                <p className="text-xs md:text-sm text-blue-600 font-medium">{ra.level}</p>
                <p className="text-xs text-gray-500 mt-1">{ra.interest}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-2 mt-2">
                  {ra.links.linkedin && (
                    <a href={ra.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                  {ra.links.scholar && (
                    <a href={ra.links.scholar} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" title="Google Scholar">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                    </a>
                  )}
                  {ra.links.github && (
                    <a href={ra.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors" title="GitHub">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {ra.links.website && (
                    <a href={ra.links.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" title="Personal Website">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>

      {/* Join Our Lab Section */}
      <section id="join" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">🚀</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Join Our Lab</h2>
        </div>
        <div className="text-xs md:text-sm text-gray-700 space-y-3">
          <p>
            If You are Interested in joining the Cortex AI Lab, we welcome motivated individuals who are passionate about research and innovation in the fields of AI, robotics, and biomedical applications.
          </p>
          <p className="font-medium">
            Opportunities available for:
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-1">
            <li>Undergrad and PostGrad Students</li>
            <li>Visiting researchers and collaborators</li>
          </ul>
          <p>
            Please reach out via the contact section below with your CV and research interests.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">📧</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Contact</h2>
        </div>
        <div className="text-xs md:text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium text-gray-900">Cortex AI Lab</p>
            <p>Department of Robotics and Mechatronics Engineering</p>
            <p>University of Dhaka</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div>
            <p><span className="font-medium">Email:</span> cortexai-lab@coretxai.du.ac.bd</p>
            <p><span className="font-medium">PI Email:</span> shifatearman@du.ac.bd</p>
          </div>
        </div>
      </section>
    </div>
  )
}