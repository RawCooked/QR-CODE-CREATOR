import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, Github } from 'lucide-react';

import TypeSelector from './components/TypeSelector.jsx';
import DynamicFields from './components/DynamicFields.jsx';
import StyleControls from './components/StyleControls.jsx';
import QRPreview from './components/QRPreview.jsx';
import Actions from './components/Actions.jsx';
import { types, defaultValues } from './data/types.js';

const Background3D = lazy(() => import('./components/Background3D.jsx'));

const initialStyle = {
  fg: '#7c5cff',
  fg2: '#22d3ee',
  bg: '#ffffff',
  gradient: true,
  gradientAngle: 45,
  dotStyle: 'rounded',
  cornerSquareStyle: 'extra-rounded',
  cornerDotStyle: 'dot',
  margin: 8,
  ecLevel: 'Q',
  logo: null,
  logoSize: 0.28
};

export default function App() {
  const [type, setType] = useState('url');
  const [values, setValues] = useState(() => defaultValues('url'));
  const [style, setStyle] = useState(initialStyle);
  const [qr, setQr] = useState(null);
  const [enable3D, setEnable3D] = useState(true);

  useEffect(() => {
    setValues(defaultValues(type));
  }, [type]);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = matchMedia('(max-width: 720px)').matches;
    if (reduced || small) setEnable3D(false);
  }, []);

  const payload = useMemo(() => {
    try { return types[type].build(values) || ''; }
    catch { return ''; }
  }, [type, values]);

  const charCount = payload.length;

  return (
    <div className="app-shell">
      {enable3D && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}

      <header className="topbar">
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo">
            <QrCode size={22} />
          </div>
          <div className="brand-text">
            <h1>myQr</h1>
            <p>Beautiful, customizable QR codes</p>
          </div>
        </motion.div>

        <div className="topbar-meta">
          <span className="badge">
            <Sparkles size={13} /> Live
          </span>
          <a
            className="ghost-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </header>

      <main className="grid">
        <motion.section
          className="panel left"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="panel-head">
            <h2>Content</h2>
            <span className="hint">Choose what your QR points to</span>
          </div>

          <TypeSelector value={type} onChange={setType} />
          <DynamicFields type={type} values={values} onChange={setValues} />

          <div className="panel-foot">
            <span className={`char ${charCount > 1000 ? 'warn' : ''}`}>
              {charCount} chars
            </span>
          </div>
        </motion.section>

        <motion.section
          className="panel center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <QRPreview payload={payload} style={style} onReady={setQr} />
          <Actions qr={qr} payload={payload} />
        </motion.section>

        <motion.section
          className="panel right"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="panel-head">
            <h2>Style</h2>
            <span className="hint">Make it yours</span>
          </div>
          <StyleControls style={style} setStyle={setStyle} />
        </motion.section>
      </main>

      <footer className="footer">
        <span>myQr · crafted with care</span>
      </footer>
    </div>
  );
}
