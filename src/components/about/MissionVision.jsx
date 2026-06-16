import {
  Target,
  Eye
} from "lucide-react";

function MissionVision() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800">

            <Target
              size={45}
              className="text-cyan-400 mb-6"
            />

            <h3 className="text-3xl font-bold text-white mb-4">

              Our Mission

            </h3>

            <p className="text-slate-400">

              To provide innovative, affordable and
              high-quality technology solutions that
              help businesses grow and succeed.

            </p>

          </div>

          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800">

            <Eye
              size={45}
              className="text-cyan-400 mb-6"
            />

            <h3 className="text-3xl font-bold text-white mb-4">

              Our Vision

            </h3>

            <p className="text-slate-400">

              To become one of Africa's leading
              technology companies delivering
              transformative digital experiences.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;