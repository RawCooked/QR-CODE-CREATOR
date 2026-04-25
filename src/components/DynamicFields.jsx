import { motion, AnimatePresence } from 'framer-motion';
import { types } from '../data/types.js';

export default function DynamicFields({ type, values, onChange }) {
  const cfg = types[type];

  const update = (name, val) => onChange({ ...values, [name]: val });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type}
        className="fields"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        {cfg.fields.map((f) => {
          const id = `f-${type}-${f.name}`;
          return (
            <div key={f.name} className={`field field-${f.type}`}>
              {f.type !== 'checkbox' && <label htmlFor={id}>{f.label}</label>}

              {f.type === 'textarea' && (
                <textarea
                  id={id}
                  rows={3}
                  value={values[f.name] ?? ''}
                  placeholder={f.placeholder}
                  onChange={(e) => update(f.name, e.target.value)}
                />
              )}

              {f.type === 'select' && (
                <select
                  id={id}
                  value={values[f.name] ?? ''}
                  onChange={(e) => update(f.name, e.target.value)}
                >
                  {f.options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              )}

              {f.type === 'checkbox' && (
                <label className="checkbox" htmlFor={id}>
                  <input
                    id={id}
                    type="checkbox"
                    checked={!!values[f.name]}
                    onChange={(e) => update(f.name, e.target.checked)}
                  />
                  <span>{f.label}</span>
                </label>
              )}

              {!['textarea', 'select', 'checkbox'].includes(f.type) && (
                <input
                  id={id}
                  type={f.type}
                  value={values[f.name] ?? ''}
                  placeholder={f.placeholder}
                  onChange={(e) => update(f.name, e.target.value)}
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
