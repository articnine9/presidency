import { FileText, UserCheck, Home, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'SUBMIT APPLICATION',
    description: 'Fill out our online application form and submit required documents'
  },
  {
    icon: UserCheck,
    title: 'REVIEW PROCESS',
    description: 'Our admissions team reviews your application and credentials'
  },
  {
    icon: Home,
    title: 'CAMPUS VISIT',
    description: 'Schedule a campus tour and meet with academic advisors'
  }
];

export function ApplicationSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-gray-50 to-white skew-x-12 transform translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1e3a5f] mb-6">
            YOUR JOURNEY FROM<br />
            <span className="text-[#ff8c42]">APPLICATION TO ADMISSION</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our streamlined admissions process makes it easy to join our community of learners. Follow these simple steps to begin your educational journey.
          </p>
        </div>

        {/* Steps with modern card design */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#ff8c42] to-transparent -translate-x-4"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff8c42] rounded-full flex items-center justify-center text-white shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={36} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="relative bg-gradient-to-r from-[#ff8c42] to-[#e67a32] rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a5f] rounded-full blur-3xl opacity-10"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/90 text-lg">
                Apply now and take the first step towards a bright future at Presidency University International.
              </p>
            </div>
            
            <button className="flex-shrink-0 bg-white text-[#ff8c42] px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              Apply Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}