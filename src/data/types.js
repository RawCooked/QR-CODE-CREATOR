import {
  Link, Type, Wifi, Mail, Phone, MessageSquare, User, MapPin, Share2, Calendar
} from 'lucide-react';

const social = (platform, handle) => {
  const h = (handle || '').trim();
  if (/^https?:\/\//i.test(h)) return h;
  const clean = h.replace(/^@/, '');
  const map = {
    instagram: `https://instagram.com/${clean}`,
    tiktok: `https://www.tiktok.com/@${clean}`,
    x: `https://x.com/${clean}`,
    linkedin: `https://www.linkedin.com/in/${clean}`,
    facebook: `https://www.facebook.com/${clean}`,
    youtube: `https://www.youtube.com/@${clean}`,
    github: `https://github.com/${clean}`
  };
  return map[platform] || h;
};

const fmtICS = (d) => {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
};

export const types = {
  url: {
    label: 'URL',
    icon: Link,
    fields: [
      { name: 'url', label: 'Website URL', type: 'url', value: 'https://myqr.app', placeholder: 'https://...' }
    ],
    build: (v) => v.url || ''
  },
  text: {
    label: 'Text',
    icon: Type,
    fields: [
      { name: 'content', label: 'Plain text', type: 'textarea', value: 'Hello from myQr ✨' }
    ],
    build: (v) => v.content || ''
  },
  wifi: {
    label: 'Wi-Fi',
    icon: Wifi,
    fields: [
      { name: 'ssid', label: 'Network name (SSID)', type: 'text', value: 'MyNetwork' },
      { name: 'password', label: 'Password', type: 'text', value: 'password123' },
      {
        name: 'encryption', label: 'Security', type: 'select', value: 'WPA',
        options: [
          { label: 'WPA / WPA2', value: 'WPA' },
          { label: 'WEP', value: 'WEP' },
          { label: 'None', value: 'nopass' }
        ]
      },
      { name: 'hidden', label: 'Hidden network', type: 'checkbox', value: false }
    ],
    build: (v) => `WIFI:T:${v.encryption};S:${v.ssid};P:${v.password};H:${v.hidden ? 'true' : 'false'};;`
  },
  email: {
    label: 'Email',
    icon: Mail,
    fields: [
      { name: 'to', label: 'Recipient', type: 'email', value: 'hello@example.com' },
      { name: 'subject', label: 'Subject', type: 'text', value: 'Hello' },
      { name: 'body', label: 'Message', type: 'textarea', value: 'Reaching out via your QR code.' }
    ],
    build: (v) => `mailto:${v.to}?subject=${encodeURIComponent(v.subject || '')}&body=${encodeURIComponent(v.body || '')}`
  },
  phone: {
    label: 'Call',
    icon: Phone,
    fields: [{ name: 'phone', label: 'Phone number', type: 'tel', value: '+15555550123' }],
    build: (v) => `tel:${v.phone}`
  },
  sms: {
    label: 'SMS',
    icon: MessageSquare,
    fields: [
      { name: 'phone', label: 'Phone number', type: 'tel', value: '+15555550123' },
      { name: 'message', label: 'Message', type: 'textarea', value: 'Hi!' }
    ],
    build: (v) => `sms:${v.phone}?body=${encodeURIComponent(v.message || '')}`
  },
  contact: {
    label: 'vCard',
    icon: User,
    fields: [
      { name: 'fullname', label: 'Full name', type: 'text', value: 'Jane Doe' },
      { name: 'org', label: 'Company', type: 'text', value: 'Acme Inc.' },
      { name: 'phone', label: 'Phone', type: 'tel', value: '+15555550123' },
      { name: 'email', label: 'Email', type: 'email', value: 'jane@acme.com' },
      { name: 'website', label: 'Website', type: 'url', value: 'https://acme.com' }
    ],
    build: (v) =>
      `BEGIN:VCARD\nVERSION:3.0\nFN:${v.fullname}\nORG:${v.org}\nTEL:${v.phone}\nEMAIL:${v.email}\nURL:${v.website}\nEND:VCARD`
  },
  location: {
    label: 'Location',
    icon: MapPin,
    fields: [{ name: 'place', label: 'Place or address', type: 'text', value: 'Eiffel Tower, Paris' }],
    build: (v) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.place || '')}`
  },
  social: {
    label: 'Social',
    icon: Share2,
    fields: [
      {
        name: 'platform', label: 'Platform', type: 'select', value: 'instagram',
        options: [
          { label: 'Instagram', value: 'instagram' },
          { label: 'TikTok', value: 'tiktok' },
          { label: 'X / Twitter', value: 'x' },
          { label: 'LinkedIn', value: 'linkedin' },
          { label: 'Facebook', value: 'facebook' },
          { label: 'YouTube', value: 'youtube' },
          { label: 'GitHub', value: 'github' }
        ]
      },
      { name: 'handle', label: 'Handle or full URL', type: 'text', value: '@myqr' }
    ],
    build: (v) => social(v.platform, v.handle)
  },
  event: {
    label: 'Event',
    icon: Calendar,
    fields: [
      { name: 'title', label: 'Title', type: 'text', value: 'Launch Party' },
      { name: 'location', label: 'Location', type: 'text', value: 'Online' },
      { name: 'start', label: 'Starts', type: 'datetime-local', value: '2026-05-01T18:00' },
      { name: 'end', label: 'Ends', type: 'datetime-local', value: '2026-05-01T20:00' },
      { name: 'description', label: 'Description', type: 'textarea', value: 'See you there!' }
    ],
    build: (v) =>
      `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${v.title}\nLOCATION:${v.location}\nDTSTART:${fmtICS(v.start)}\nDTEND:${fmtICS(v.end)}\nDESCRIPTION:${v.description}\nEND:VEVENT\nEND:VCALENDAR`
  }
};

export const defaultValues = (type) =>
  types[type].fields.reduce((acc, f) => ({ ...acc, [f.name]: f.value ?? '' }), {});
