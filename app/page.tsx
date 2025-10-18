import { LayoutWrapper } from "@/components/layout-wrapper"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="max-w-6xl">
        {/* Hero Section - Simple Layout */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left side - Text */}
            <div className="flex-1">
              <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Welcome to Cortex AI Lab
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Innovating at the Intersection of AI, Healthcare, and Bio-Inspired Robotics
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Located within the Department of Robotics and Mechatronics Engineering at the University of Dhaka, <strong>Cortex AI Lab</strong> stands at the cutting edge of applied artificial intelligence in <strong>Biomedical AI</strong>, <strong>Multi-Modal Learning</strong>, <strong>Self-Supervised Learning</strong>, <strong>3D Scene Understanding</strong>, and <strong>bio-inspired robotics</strong>. We are dedicated to transforming healthcare through innovative AI solutions and exploring robotics inspired by nature.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our lab proudly collaborates with the <strong>National Institute of Cardiovascular Diseases</strong>, <strong>Combined Military Hospital</strong>, and multiple departments within the University of Dhaka. These partnerships enhance our research and broaden our impact.
                </p>
                <p className="text-blue-700 font-medium text-lg">
                  Join us as we innovate for a healthier and smarter future.
                </p>
              </div>
            </div>

            {/* Right side - Logo */}
            <div className="md:flex-shrink-0">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center border-2 border-blue-200">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">CORTEX</div>
                  <div className="text-sm text-gray-600 font-medium">AI LAB</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🔥</span>
            <h2 className="text-2xl font-semibold text-gray-900">News</h2>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025.06</span>
              <span className="text-gray-700">Promoted to Assistant Professor at the Department of Robotics & Mechatronics Engineering, University of Dhaka</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025</span>
              <span className="text-gray-700">Received the Provost Award for standing first in MSc with a CGPA of 3.98</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025</span>
              <span className="text-gray-700">Received Dhaka University Research Excellence Award for contributions to academic research.</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2024</span>
              <span className="text-gray-700">Received Special Merit Award in Foundation Certificate for University Teaching and Learning (FCUTL)</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2022.06</span>
              <span className="text-gray-700">Completed <span className="font-medium">MSc in Robotics & Mechatronics Engineering</span>, University of Dhaka.</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2019.12</span>
              <span className="text-gray-700">Completed <span className="font-medium">BSc in Robotics & Mechatronics Engineering</span>, University of Dhaka.</span>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">📄</span>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Publications</h2>
          </div>

          <div className="space-y-8">
            {/* BananaSqueezeNet */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\banasqueezenet.jpg" alt="Banana leaf disease model" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded">Smart Agricultural Tech</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2023</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://www.sciencedirect.com/science/article/pii/S2772375523000448" target="_blank" rel="noopener noreferrer">
                    BananaSqueezeNet: A very fast, lightweight convolutional neural network for the diagnosis of three prominent banana leaf diseases
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Bhuiyan MA, Abdullah HM, <strong>Arman SE</strong> (Corresponding Author), et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 6.3</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sub-20MB CNN optimized for edge deployment with strong accuracy.</li>
                  <li>• Real-time inference suitable for field diagnostics.</li>
                </ul>
              </div>
            </div>

            {/* PlantVillageVQA (arXiv) */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\plantVillage.png" alt="PlantVillageVQA dataset" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-gray-900 text-white text-xs px-2 py-1 rounded">arXiv</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2025</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://arxiv.org/pdf/2508.17117" target="_blank" rel="noopener noreferrer">
                    PlantVillageVQA: A Visual Question Answering Dataset for Benchmarking Vision-Language Models in Plant Science
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Preprint (arXiv); under review.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• New VQA benchmark for plant science grounded in expert-curated queries.</li>
                  <li>• Designed for evaluating generalist vision-language models.</li>
                </ul>
              </div>
            </div>

            {/* PlantCareNet */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\plantcareNet.png" alt="PlantCareNet visual" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded">Plant Methods</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2025</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://link.springer.com/article/10.1186/s13007-025-01366-9" target="_blank" rel="noopener noreferrer">
                    PlantCareNet: an advanced system to recognize plant diseases with dual-mode recommendations for prevention
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Islam M, Azad AK, Arman SE, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 5.6</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• End-to-end system coupling disease recognition with prevention recommendations.</li>
                  <li>• Dual-mode guidance for proactive and reactive crop care.</li>
                </ul>
              </div>
            </div>

            {/* Generative Nanoparticle Design */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\nana_particle.png" alt="Generative nanoparticle design" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-cyan-700 text-white text-xs px-2 py-1 rounded">Nanoscale Advances</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2024</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://pubs.rsc.org/en/content/articlehtml/2025/na/d4na00859f" target="_blank" rel="noopener noreferrer">
                    Leveraging Generative Neural Networks for Accurate, Diverse, and Robust Nanoparticle Design
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Rahman T, Tahmid A, <strong>Arman SE</strong>, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 4.6</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Generative frameworks to explore robust nanoparticle configurations.</li>
                  <li>• Balances accuracy, diversity, and stability in design space.</li>
                </ul>
              </div>
            </div>

            {/* Mango Leaf (ViT) */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\mango_leaf.jpg" alt="Mango leaf disease with ViT" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-orange-600 text-white text-xs px-2 py-1 rounded">Heliyon</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2024</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://www.cell.com/heliyon/home" target="_blank" rel="noopener noreferrer">
                    Deep Learning for Mango Leaf Disease Identification: A Vision Transformer Perspective
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Hossain MA, Sakib S, Abdullah HM, <strong>Arman SE</strong> (Corresponding Author)</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 3.4</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ViT-based pipeline for fine-grained agricultural disease recognition.</li>
                  <li>• Demonstrates strong generalization across cultivars and conditions.</li>
                </ul>
              </div>
            </div>

            {/* ICH CT + BO */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\intercranial.png" alt="Intracranial hemorrhage CT" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded">IEEE Access</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2023</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10198438" target="_blank" rel="noopener noreferrer">
                    Intracranial Hemorrhage Classification From CT Scan Using Deep Learning and Bayesian Optimization
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Arman SE</strong>, Rahman SS, Irtisam N, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 3.4</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CNN classifiers with BO-driven hyperparameter tuning for CT ICH detection.</li>
                  <li>• Improved operating points under clinical sensitivity constraints.</li>
                </ul>
              </div>
            </div>

            {/* COVIDXception-Net */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\CovidXception.png" alt="COVID-19 X-ray diagnosis" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-slate-700 text-white text-xs px-2 py-1 rounded">SN Computer Science</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2022</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://link.springer.com/article/10.1007/s42979-021-00980-3" target="_blank" rel="noopener noreferrer">
                    COVIDXception-Net: A Bayesian Optimization-Based Deep Learning Approach to Diagnose COVID-19 from X-Ray Images
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Arman SE</strong>, Rahman S, Deowan SA</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Xception-based transfer learning tuned with Bayesian optimization.</li>
                  <li>• Improves sensitivity at clinically relevant thresholds.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Grants Section */}
        <section id="fundings" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">💰</span>
            <h2 className="text-2xl font-semibold text-gray-900">Research Grants</h2>
          </div>

          <div className="space-y-6">
            <div>
              <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
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
          </div>
        </section>

        {/* Collaborations Section */}
        <section id="collaborations" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🤝</span>
            <h2 className="text-2xl font-semibold text-gray-900">Collaborations</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>Ecology Lab, Department of Botany, University of Dhaka</li>
            <li>Microsystems & Nanoengineering Lab, Department of Electrical and Electronics Engineering, University of Dhaka</li>
            <li>Geoinformatics Lab, Department of Geology, University of Dhaka</li>
            <li>GIS and Remote Sensing Lab, Gazipur Agricultural University</li>
          </ul>
        </section>

        {/* People Section */}
        <section id="people" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">👥</span>
            <h2 className="text-2xl font-semibold text-gray-900">People</h2>
          </div>

          {/* Principal Investigator */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Principal Investigator</h3>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden border-2 border-blue-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Shifat E Arman</h4>
                <p className="text-sm text-gray-600">Assistant Professor</p>
                <p className="text-xs text-gray-500 mt-1">Department of Robotics & Mechatronics Engineering</p>
                <p className="text-xs text-gray-500">University of Dhaka</p>
              </div>
            </div>
          </div>

          {/* Research Assistants */}
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Research Assistants</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Research Assistant 1", role: "Machine Learning" },
                { name: "Research Assistant 2", role: "Computer Vision" },
                { name: "Research Assistant 3", role: "Robotics" },
                { name: "Research Assistant 4", role: "Bio-inspired Systems" },
                { name: "Research Assistant 5", role: "Deep Learning" },
                { name: "Research Assistant 6", role: "Medical Imaging" },
                { name: "Research Assistant 7", role: "Agricultural AI" },
                { name: "Research Assistant 8", role: "3D Vision" }
              ].map((ra, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900">{ra.name}</h4>
                  <p className="text-xs text-gray-600">{ra.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Lab Section */}
        <section id="join" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🚀</span>
            <h2 className="text-2xl font-semibold text-gray-900">Join Our Lab</h2>
          </div>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              We are always looking for motivated students and researchers interested in AI, healthcare, and bio-inspired robotics. If you're passionate about pushing the boundaries of technology and making a real-world impact, we'd love to hear from you.
            </p>
            <p className="font-medium">
              Opportunities available for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
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
        <section id="contact" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">📧</span>
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          </div>
          <div className="text-sm text-gray-700 space-y-3">
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
    </LayoutWrapper>
  )
}