import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            bg-slate-950
            flex
            items-center
            justify-center
            z-[9999]
          "
        >

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.8
            }}
            className="text-4xl font-bold text-white"
          >
            Passy
            <span className="text-cyan-400">
              Tech
            </span>
          </motion.h1>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default Loader;