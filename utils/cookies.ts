// Utility functions for cookie management

export const clearAllCookies = () => {
  if (typeof document === 'undefined') return; // Server-side check
  
  const cookies = document.cookie.split(";");
  
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    
    // Clear cookie by setting it to expire in the past
    // Try different paths and domains to ensure complete removal
    const domains = [
      '', // Current domain
      window.location.hostname,
      `.${window.location.hostname}`,
      '.localhost'
    ];
    
    const paths = ['/', '/dashboard', '/api'];
    
    domains.forEach(domain => {
      paths.forEach(path => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
        if (domain) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain};`;
        }
      });
    });
  });
};

export const clearSpecificCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  
  const domains = [
    '', // Current domain
    window.location.hostname,
    `.${window.location.hostname}`,
    '.localhost'
  ];
  
  const paths = ['/', '/dashboard', '/api'];
  
  domains.forEach(domain => {
    paths.forEach(path => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
      if (domain) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain};`;
      }
    });
  });
};

export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}; 