import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = 'G-9PF4PCBW1P'; // Replace with your Measurement ID
  
  ReactGA.initialize(measurementId, {
    gaOptions: {
      anonymizeIp: true, // Privacy-friendly
      cookieFlags: 'SameSite=None;Secure', // Modern cookie settings
    },
    gtagOptions: {
      send_page_view: false, // We'll manually track page views
    },
  });
  
  console.log('Google Analytics initialized');
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: document.title
  });
  console.log(`Page view tracked: ${path}`);
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
  console.log(`Event tracked: ${category} - ${action} - ${label}`);
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent('Button', 'Click', buttonName);
};

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('Form', 'Submit', formName);
};

// Track external link clicks
export const trackExternalLink = (url, linkName) => {
  trackEvent('External Link', 'Click', linkName, url);
};

// Track project demo clicks
export const trackProjectDemo = (projectName) => {
  trackEvent('Project', 'View Demo', projectName);
};

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('Navigation', 'View Section', sectionName);
};