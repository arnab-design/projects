export function PurposeValues() {
  const values = [
    { bold: 'Founders', rest: 'come first' },
    { bold: 'Collaboration', rest: 'over solo efforts' },
    { bold: 'Listening', rest: 'before acting' },
    { bold: 'Accountability', rest: 'before deferral' },
    { bold: 'Substance', rest: 'over flash' },
    { bold: 'Flexibility', rest: 'before process' }
  ];

  return (
    <section id="purpose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Purpose */}
        <div className="mb-12">
          <h3 className="text-[#1a4d3a] mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Our Purpose
          </h3>
          <div className="bg-[#e8e8e8] border-2 border-black p-8 rounded-lg">
            <p className="text-[#2a2a2a] text-center" style={{ fontSize: '1.375rem', lineHeight: 1.6 }}>
              Help founders <strong>unlock the potential of their ideas</strong>, and bring their impact to life.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h3 className="text-[#1a4d3a] mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Our Vision
          </h3>
          <div className="bg-[#2d5016] p-8 rounded-lg">
            <p className="text-white text-center" style={{ fontSize: '1.375rem', lineHeight: 1.6 }}>
              Create a world where <strong>founders can build the skills they need</strong> to run a company, without detracting them from achieving their vision.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-[#1a4d3a] mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-[#e8e8e8] border-2 border-black p-6 rounded-lg text-center"
              >
                <p className="text-[#2a2a2a]" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                  <strong>{value.bold}</strong> {value.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}