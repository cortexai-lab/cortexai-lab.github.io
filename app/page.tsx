
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
            <span className="text-gray-700">Received the Dhaka University Research Excellence Award for our contributions to academic research.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2024</span>
            <span className="text-gray-700">Awarded the ICT Division's prestigious <span className="font-medium">Innovation Fund</span> for our research on smart biomimetic robots.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2024</span>
            <span className="text-gray-700">Our project, <span className="font-medium">"TurtleBot"</span>, an underwater exploration robot inspired by sea turtles, became the champion at the National Project Showcase.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2023</span>
            <span className="text-gray-700">Secured the <span className="font-medium">UGC Research Fund</span> to develop an AI framework for assessing climate-induced stress in plants.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
            <span className="text-gray-500 sm:w-20 flex-shrink-0 font-medium sm:font-normal">2023</span>
            <span className="text-gray-700">Awarded <span className="font-medium">"Best Research Paper"</span> at the International Conference on Robotics and Automation.</span>
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
              image: ".\\assets\\mango_leaf.jpg",
              badge: "Heliyon",
              badgeColor: "bg-orange-600",
              year: "2024",
              title: "Deep Learning for Mango Leaf Disease Identification: A Vision Transformer Perspective",
              authors: "Hossain MA, Sakib S, Abdullah HM, Arman SE (Corresponding Author)",
              link: "https://www.cell.com/heliyon/home",
              impact: "3.4",
              quartile: "Q1",
              highlights: [
                "ViT-based pipeline for fine-grained agricultural disease recognition",
                "Demonstrates strong generalization across cultivars and conditions"
              ]
            },
            {
              image: ".\\assets\\intercranial.png",
              badge: "IEEE Access",
              badgeColor: "bg-blue-700",
              year: "2023",
              title: "Intracranial Hemorrhage Classification From CT Scan Using Deep Learning and Bayesian Optimization",
              authors: "Arman SE, Rahman SS, Irtisam N, et al.",
              link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10198438",
              impact: "3.4",
              quartile: "Q1",
              highlights: [
                "CNN classifiers with BO-driven hyperparameter tuning for CT ICH detection",
                "Improved operating points under clinical sensitivity constraints"
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
            }
          ].map((pub, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-40 md:w-48 flex-shrink-0">
                  <div className="aspect-[3/2] bg-white rounded border overflow-hidden">
                    <Image src={pub.image} alt={pub.title} width={192} height={128} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className={`inline-block ${pub.badgeColor} text-white text-xs px-2 py-1 rounded`}>{pub.badge}</span>
                    <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">{pub.year}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-medium text-blue-600 hover:text-blue-800 mb-2 leading-snug">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">{pub.authors}</p>
                  {pub.impact && (
                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                      <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: {pub.impact}</span>
                      {pub.quartile && <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">{pub.quartile}</span>}
                    </div>
                  )}
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    {pub.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Grants Section */}
      <section id="fundings" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">💰</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Research Grants</h2>
        </div>

        <div className="space-y-4">
          <ul className="list-disc pl-4 md:pl-5 space-y-3 text-xs md:text-sm text-gray-700">
            <li>
              <span className="italic">2024,</span> ICT Innovation Fund, ICT Division, Bangladesh (Principal Investigator): <span className="font-medium">Building Smart Biomimic Robots for Underwater Operations.</span>
            </li>
            <li>
              <span className="italic">2024,</span> University Grants Commission of Bangladesh Grant (Co-Principal Investigator): <span className="font-medium">Development of a Protocol for Rapid Assessment of Plants Responses to Climate-Induced Stress Using an AI-based Framework.</span>
            </li>
            <li>
              <span className="italic">2023,</span> UGC Grant in collaboration with University of Dhaka (Co-Principal Investigator): <span className="font-medium">SmartPDE: Deep Learning Based Plant Disease Epidemiology and Forecasting.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">🤝</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Collaborations</h2>
        </div>
        <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-700 text-xs md:text-sm">
          <li>Ecology Lab, Department of Botany, University of Dhaka</li>
          <li>Microsystems & Nanoengineering Lab, Department of Electrical and Electronics Engineering, University of Dhaka</li>
          <li>Geoinformatics Lab, Department of Geology, University of Dhaka</li>
          <li>GIS and Remote Sensing Lab, Gazipur Agricultural University</li>
          <li>National Institute of Cardiovascular Diseases, Combined Military Hospital</li>
          <li>VLM-Run</li>
        </ul>
      </section>

      {/* People Section */}
      <section id="people" className="scroll-mt-20 mb-12 md:mb-16">
        <div className="flex items-center mb-4 md:mb-6">
          <span className="text-orange-500 mr-2">👥</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">People</h2>
        </div>

        {/* Principal Investigator */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">Lab Director and Principal Investigator</h3>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 bg-gray-200 rounded-lg overflow-hidden border-2 border-blue-200 shadow-sm">
                <Image
                  src=".\\assets\\shifat-arman.png" 
                  alt="Shifat E. Arman"
                  width={192} // Corresponds to w-48
                  height={192} // Corresponds to h-48
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900">Shifat E Arman</h4>
              <p className="text-sm text-gray-600">Assistant Professor</p>
              <p className="text-xs text-gray-500 mt-1">Department of Robotics & Mechatronics Engineering</p>
              <p className="text-xs text-gray-500">University of Dhaka</p>
            </div>
          </div>
        </div>

        {/* Research Assistants */}
        {/* Research Assistants */}
        {/* Research Assistants */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">Research Assistants</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                name: "Jul Jalal Al-Mamur Sayor", 
                level: "MSc Student",
                interest: "Computer Vision",
                // imageSrc: "/team/assistant1.jpg" // This person has an image
              },
              { 
                name: "Tapodhir Karmakar Taton", 
                level: "MSc Student",
                interest: "Computer Vision",
                // imageSrc: "/team/assistant2.jpg" // This person has an image
              },
              { 
                name: "Syed Nazmus Sakib", 
                level: "BSc Student",
                interest: "Computer Vision",
                // imageSrc is missing, so the avatar will be shown
              },
              { 
                name: "Samudra Jit Saha", 
                level: "BSc Student",
                interest: "Bio-inspired Robotics",
                // imageSrc: "/team/assistant4.jpg" // This person has an image
              },
              { 
                name: "Md Tashrif Uzzaman", 
                level: "BSc Student",
                interest: "Computer Vision",
                // imageSrc is missing, so the avatar will be shown
              },
              { 
                name: "M.M Mahabub Morshed Prottoy", 
                level: "BSc Student",
                interest: "Computer Vision",
                // imageSrc: "/team/assistant6.jpg" // This person has an image
              },
              { 
                name: "MD Abid Chowdhury", 
                level: "BSc Student",
                interest: "Robotics",
                // imageSrc: "/team/assistant6.jpg" // This person has an image
              },
              { 
                name: "Nafiul Haque", 
                level: "BSc Student",
                interest: "Robotics",
                // imageSrc: "/team/assistant6.jpg" // This person has an image
              },
            ].map((ra, index) => (
              <div key={index} className="text-center">
                {/* Circular Image Container */}
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300">
                  {ra.imageSrc ? (
                    // If imageSrc exists, render the Image component
                    <Image
                      src={ra.imageSrc}
                      alt={ra.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Otherwise, render the placeholder SVG avatar
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
            We are always looking for motivated students and researchers interested in AI, healthcare, and bio-inspired robotics. If you're passionate about pushing the boundaries of technology and making a real-world impact, we'd love to hear from you.
          </p>
          <p className="font-medium">
            Opportunities available for:
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-1">
            <li>Undergraduate research assistants</li>
            <li>MSc students (thesis and research)</li>
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
            <p><span className="font-medium">Email:</span> cortexailab@du.ac.bd</p>
            <p><span className="font-medium">PI Email:</span> shifat.arman@du.ac.bd</p>
          </div>
        </div>
      </section>
    </div>
  )
}