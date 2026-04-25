import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Check, Share2 } from 'lucide-react';

export default function Actions({ qr, payload }) {
  const [copied, setCopied] = useState(false);

  const download = (ext) => qr?.download({ name: 'myqr', extension: ext });

  const copy = async () => {
    if (!payload) return;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const share = async () => {
    if (!navigator.share || !qr) return downloadThenShare();
    try {
      const blob = await qr.getRawData('png');
      const file = new File([blob], 'myqr.png', { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'myQr', text: payload });
      } else {
        await navigator.share({ title: 'myQr', text: payload });
      }
    } catch {}
  };

  const downloadThenShare = () => download('png');

  const Btn = ({ onClick, icon: Icon, label, primary }) => (
    <motion.button
      type="button"
      onClick={onClick}
      className={`action ${primary ? 'primary' : ''}`}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -1 }}
    >
      <Icon size={16} />
      <span>{label}</span>
    </motion.button>
  );

  return (
    <div className="actions">
      <Btn onClick={() => download('png')} icon={Download} label="PNG" primary />
      <Btn onClick={() => download('svg')} icon={Download} label="SVG" />
      <Btn onClick={() => download('jpeg')} icon={Download} label="JPG" />
      <Btn onClick={copy} icon={copied ? Check : Copy} label={copied ? 'Copied' : 'Copy data'} />
      <Btn onClick={share} icon={Share2} label="Share" />
    </div>
  );
}
