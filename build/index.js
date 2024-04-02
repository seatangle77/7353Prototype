const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export function setupBuild() {
  return {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        index: './index.html',
        prototype: './prototype.html',
        storyboard: './storyboard.html',
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const moduleNameMatch = id.toString().match(/\/node_modules\/(?!.pnpm)([^\/]*)\//);
            const moduleName = moduleNameMatch ? moduleNameMatch[1] : 'vendor';
            return moduleName;
          }
        }
      }
    }
  };
}