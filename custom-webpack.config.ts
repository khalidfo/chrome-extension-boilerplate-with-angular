import type { Configuration } from 'webpack';

module.exports = {
  entry: { 
    
    content_script: { 
      import: 'src/content_script.js', 
      runtime: false,
    },
    popup: { 
      import: 'src/popup.js', runtime: false 
    },
    injected_script: {
      import: 'src/injected_script.js',
      runtime: false,
    },
    background_script: {
      import: 'src/background_script.js',
      runtime: false,
    },
  },
} as Configuration;
