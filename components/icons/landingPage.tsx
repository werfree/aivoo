// components/icons.js
type IconProps = React.SVGProps<SVGSVGElement>;
export const BrainCircuit = (props:IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.142M9 8h7a2 2 0 0 1 2 2v4"/><path d="M12 12a3 3 0 1 0 5.993-.142M15 16H8a2 2 0 0 1-2-2V8"/><path d="M12 19a3 3 0 1 0-5.993-.142M9 16v-4"/><path d="M15 8v4"/>
    <path d="M5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M19 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M19 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
);

export const ShieldCheck = (props:IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export const Zap = (props:IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const User = (props:IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

export const Briefcase = (props:IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
