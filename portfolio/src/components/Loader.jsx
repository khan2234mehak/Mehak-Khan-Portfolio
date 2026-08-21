import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-14 w-14">
              <div
                className="absolute inset-0 rounded-full border-2 animate-spin-slow"
                style={{ borderColor: "var(--border)", borderTopColor: "var(--accent-2)" }}
              />
              <div className="absolute inset-[6px] rounded-full" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", opacity: 0.18 }} />
            </div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: "var(--text-muted)" }}>
              Loading portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
