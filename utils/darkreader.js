export const enable = async (isDark) => {
  if (typeof window === 'undefined') return;

  const options = {
    brightness: 100,
    contrast: 90,
    sepia: 10,
  };

  try {
    const darkreader = await import('darkreader');
    
    if (isDark) {
      darkreader.enable(options);
    } else {
      darkreader.disable();
    }
  } catch (e) {
    console.log('DarkReader error:', e);
  }
}; 