import { useEffect, useRef, useMemo } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { motion } from 'framer-motion';

export default function QRPreview({ payload, style, onReady }) {
  const containerRef = useRef(null);
  const qrRef = useRef(null);

  const options = useMemo(() => {
    const dotsOptions = style.gradient
      ? {
          type: style.dotStyle,
          gradient: {
            type: 'linear',
            rotation: (style.gradientAngle || 45) * (Math.PI / 180),
            colorStops: [
              { offset: 0, color: style.fg },
              { offset: 1, color: style.fg2 }
            ]
          }
        }
      : { type: style.dotStyle, color: style.fg };

    return {
      width: 360,
      height: 360,
      type: 'svg',
      data: payload || ' ',
      margin: style.margin,
      qrOptions: { errorCorrectionLevel: style.ecLevel },
      image: style.logo || undefined,
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: style.logoSize,
        margin: 6,
        crossOrigin: 'anonymous'
      },
      dotsOptions,
      backgroundOptions: { color: style.bg },
      cornersSquareOptions: { type: style.cornerSquareStyle, color: style.fg },
      cornersDotOptions: { type: style.cornerDotStyle, color: style.fg }
    };
  }, [payload, style]);

  useEffect(() => {
    qrRef.current = new QRCodeStyling(options);
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      qrRef.current.append(containerRef.current);
    }
    onReady?.(qrRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.update(options);
      onReady?.(qrRef.current);
    }
  }, [options, onReady]);

  return (
    <motion.div
      className="qr-preview"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="qr-frame" style={{ background: style.bg }}>
        <div ref={containerRef} className="qr-canvas" />
      </div>
      <div className="qr-caption">
        <span className="qr-dot" />
        <span className="qr-text">Live preview · scans as you type</span>
      </div>
    </motion.div>
  );
}
