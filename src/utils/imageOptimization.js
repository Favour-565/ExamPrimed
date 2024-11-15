export const preloadStoreIcons = () => {
    const criticalImages = [
      '/Icons/playstore-icon.svg',
      '/Icons/apple-icon.svg'
    ];
  
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/svg+xml';
      document.head.appendChild(link);
    });
  };
  
  // Optional: Image error handling utility
  export const handleImageError = (e, fallbackSrc) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
  };
  
  // Optional: SVG optimization utility
  export const optimizeSVG = async (svgUrl) => {
    try {
      const response = await fetch(svgUrl);
      const svgText = await response.text();
      // Basic SVG optimization
      return svgText
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/\s+/g, ' ') // Normalize spaces
        .replace(/"\s+/g, '"') // Remove spaces after attributes
        .trim();
    } catch (error) {
      console.error('Error optimizing SVG:', error);
      return svgUrl;
    }
  };