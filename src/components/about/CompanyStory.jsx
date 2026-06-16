function CompanyStory() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-400 font-semibold mb-3">

              OUR STORY

            </p>

            <h2 className="text-4xl font-bold text-white mb-6">

              Passion Driven Technology

            </h2>

            <p className="text-slate-400 mb-5 leading-relaxed">

              Passy Technologies was founded with a vision
              to provide affordable, reliable and innovative
              digital solutions that empower businesses and
              individuals.

            </p>

            <p className="text-slate-400 leading-relaxed">

              From website development and branding to
              telecommunications and multimedia services,
              we strive to deliver excellence in every project.

            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team"
              className="rounded-3xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default CompanyStory;