import { motion } from 'framer-motion';
import { Upload, X, Wand2 } from 'lucide-react';
import {
  palettes, dotStyles, cornerSquareStyles, cornerDotStyles, errorLevels
} from '../data/palettes.js';

function Section({ title, children }) {
  return (
    <div className="ctrl-section">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children, style }) {
  return (
    <motion.button
      type="button"
      className={`chip ${active ? 'active' : ''}`}
      onClick={onClick}
      whileTap={{ scale: 0.93 }}
      whileHover={{ y: -1 }}
      style={style}
    >
      {children}
    </motion.button>
  );
}

export default function StyleControls({ style, setStyle }) {
  const update = (patch) => setStyle({ ...style, ...patch });

  const handleLogo = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update({ logo: reader.result });
    reader.readAsDataURL(file);
  };

  const randomize = () => {
    const p = palettes[Math.floor(Math.random() * palettes.length)];
    const d = dotStyles[Math.floor(Math.random() * dotStyles.length)];
    update({
      fg: p.fg, fg2: p.fg2, bg: p.bg,
      gradient: p.fg !== p.fg2,
      dotStyle: d.id,
      cornerSquareStyle: cornerSquareStyles[Math.floor(Math.random() * cornerSquareStyles.length)].id
    });
  };

  return (
    <div className="controls">
      <Section title="Palettes">
        <div className="palette-row">
          {palettes.map((p) => {
            const active = style.fg === p.fg && style.bg === p.bg;
            return (
              <button
                key={p.id}
                className={`palette ${active ? 'active' : ''}`}
                onClick={() => update({ fg: p.fg, fg2: p.fg2, bg: p.bg, gradient: p.fg !== p.fg2 })}
                title={p.name}
                type="button"
              >
                <span className="palette-swatch" style={{
                  background: `linear-gradient(135deg, ${p.fg}, ${p.fg2})`
                }} />
                <span className="palette-bg" style={{ background: p.bg }} />
              </button>
            );
          })}
          <button className="palette random" onClick={randomize} title="Surprise me" type="button">
            <Wand2 size={16} />
          </button>
        </div>
      </Section>

      <Section title="Colors">
        <div className="color-row">
          <label className="color-pick">
            <span>Foreground</span>
            <input type="color" value={style.fg} onChange={(e) => update({ fg: e.target.value })} />
          </label>
          <label className="color-pick">
            <span>Background</span>
            <input type="color" value={style.bg} onChange={(e) => update({ bg: e.target.value })} />
          </label>
          <label className={`color-pick ${!style.gradient ? 'dim' : ''}`}>
            <span>Accent</span>
            <input
              type="color"
              value={style.fg2}
              onChange={(e) => update({ fg2: e.target.value })}
              disabled={!style.gradient}
            />
          </label>
        </div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={style.gradient}
            onChange={(e) => update({ gradient: e.target.checked })}
          />
          <span>Gradient fill</span>
        </label>
        {style.gradient && (
          <label className="slider">
            <span>Angle · {style.gradientAngle}°</span>
            <input
              type="range" min="0" max="360" step="5"
              value={style.gradientAngle}
              onChange={(e) => update({ gradientAngle: +e.target.value })}
            />
          </label>
        )}
      </Section>

      <Section title="Dot style">
        <div className="chip-row">
          {dotStyles.map((d) => (
            <Chip key={d.id} active={style.dotStyle === d.id} onClick={() => update({ dotStyle: d.id })}>
              {d.name}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Corners">
        <div className="chip-row">
          {cornerSquareStyles.map((c) => (
            <Chip
              key={c.id}
              active={style.cornerSquareStyle === c.id}
              onClick={() => update({ cornerSquareStyle: c.id })}
            >
              ▢ {c.name}
            </Chip>
          ))}
        </div>
        <div className="chip-row">
          {cornerDotStyles.map((c) => (
            <Chip
              key={c.id}
              active={style.cornerDotStyle === c.id}
              onClick={() => update({ cornerDotStyle: c.id })}
            >
              ● {c.name}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Logo">
        <div className="logo-row">
          <label className="logo-upload">
            <Upload size={16} />
            <span>{style.logo ? 'Replace logo' : 'Upload logo'}</span>
            <input type="file" accept="image/*" onChange={handleLogo} hidden />
          </label>
          {style.logo && (
            <button className="logo-clear" onClick={() => update({ logo: null })} type="button">
              <X size={14} /> Remove
            </button>
          )}
        </div>
        {style.logo && (
          <label className="slider">
            <span>Logo size · {Math.round(style.logoSize * 100)}%</span>
            <input
              type="range" min="0.1" max="0.5" step="0.02"
              value={style.logoSize}
              onChange={(e) => update({ logoSize: +e.target.value })}
            />
          </label>
        )}
      </Section>

      <Section title="Advanced">
        <label className="slider">
          <span>Margin · {style.margin}px</span>
          <input
            type="range" min="0" max="40" step="1"
            value={style.margin}
            onChange={(e) => update({ margin: +e.target.value })}
          />
        </label>
        <div className="chip-row">
          {errorLevels.map((l) => (
            <Chip key={l.id} active={style.ecLevel === l.id} onClick={() => update({ ecLevel: l.id })}>
              {l.name}
            </Chip>
          ))}
        </div>
      </Section>
    </div>
  );
}
