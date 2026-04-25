import { motion } from 'framer-motion';
import { types } from '../data/types.js';

export default function TypeSelector({ value, onChange }) {
  return (
    <div className="type-grid">
      {Object.entries(types).map(([key, cfg]) => {
        const Icon = cfg.icon;
        const active = value === key;
        return (
          <motion.button
            key={key}
            type="button"
            className={`type-btn ${active ? 'active' : ''}`}
            onClick={() => onChange(key)}
            whileTap={{ scale: 0.94 }}
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 26 }}
          >
            <Icon size={18} strokeWidth={2.2} />
            <span>{cfg.label}</span>
            {active && (
              <motion.span
                layoutId="type-underline"
                className="type-underline"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
