import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <h1 className="text-3xl font-bold text-white animate-pulse">
        Passy<span className="text-cyan-400">Tech</span>
      </h1>
    </div>
  );
}

export default Loader;