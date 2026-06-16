import CountUp from "react-countup";

function Stats() {

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">
            120+
          </h2>
          <p className="text-slate-400 mt-2">Projects</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">
            80+
          </h2>
          <p className="text-slate-400 mt-2">Clients</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">
            5+
          </h2>
          <p className="text-slate-400 mt-2">Years</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">
            24/7
          </h2>
          <p className="text-slate-400 mt-2">Support</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;