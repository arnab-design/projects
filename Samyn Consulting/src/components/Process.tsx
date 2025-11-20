import { UserPlus, Target, Users, RefreshCw, TrendingUp } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: 1,
      title: 'Engage',
      description: 'Connect for an obligation free overview of services and impact areas',
      icon: <UserPlus size={32} />
    },
    {
      number: 2,
      title: 'Assess',
      description: 'Assess the needs of your company and align on key deliverables & outcomes',
      icon: <Target size={32} />
    },
    {
      number: 3,
      title: 'Embed',
      description: 'Embed our services and practice in your daily business operations',
      icon: <Users size={32} />
    },
    {
      number: 4,
      title: 'Iterate',
      description: 'Continuous delivery on work product',
      icon: <RefreshCw size={32} />
    },
    {
      number: 5,
      title: 'Scale',
      description: "Scale your business with the outcomes and practices we've collaborated on",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: What We'll Do */}
          <div>
            <h2 className="text-[#1a4d3a] mb-10" style={{ fontSize: '2rem', fontWeight: 600 }}>
              What We'll do
            </h2>
            
            {/* Circular Process Flow */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#1a4d3a] text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a4d3a] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What You'll Need to Engage */}
          <div className="bg-[#f5f2eb] p-8 rounded-lg border-2 border-[#1a4d3a] h-fit shadow-sm">
            <h2 className="text-[#1a4d3a] mb-8" style={{ fontSize: '2rem', fontWeight: 600 }}>
              What You'll need to engage
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1a4d3a] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-[#1a4d3a] mb-2" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    Content:
                  </p>
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.7 }}>
                    Please attach a copy of whatever relevant documentation you have for review before we meet. This could be a business plan, a pitch deck, a link to your website, whatever information you need me to review before we begin.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1a4d3a] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-[#1a4d3a] mb-2" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    Attitude:
                  </p>
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.7 }}>
                    Come ready to engage and collaborate on how we can achieve your business goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1a4d3a] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-[#1a4d3a] mb-2" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    Time:
                  </p>
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.7 }}>
                    The first session is a 1-hour consultation, where we'll dive into the core of your business, and the opportunities to collaborate. After that I'll embed myself in your working team & practices
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#2a2a2a] mt-8" style={{ fontSize: '0.9375rem', fontStyle: 'italic' }}>
              *Any and All content shared will remain private & confidential unless express consent is given to share & publish to a wider audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}