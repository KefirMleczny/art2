import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import esbuild from 'esbuild';

const sourceFiles = [
  'atoms.jsx',
  'hero.jsx',
  'sections-a.jsx',
  'sections-b.jsx',
  'sections-c.jsx',
  'sections-pricing.jsx',
  'app.jsx',
];

await mkdir('.build', { recursive: true });

const source = await Promise.all(sourceFiles.map((file) => readFile(file, 'utf8')));
const entry = [
  "import React from 'react';",
  "import * as ReactDOM from 'react-dom/client';",
  '',
  ...source,
].join('\n');

await writeFile('.build/app-entry.jsx', entry);

await esbuild.build({
  entryPoints: ['.build/app-entry.jsx'],
  outfile: 'assets/app.min.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['es2018'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  jsx: 'transform',
  logLevel: 'info',
});

await esbuild.build({
  entryPoints: ['styles.css'],
  outfile: 'assets/styles.min.css',
  bundle: true,
  minify: true,
  sourcemap: false,
  loader: {
    '.png': 'file',
    '.webp': 'file',
    '.avif': 'file',
    '.svg': 'dataurl',
  },
  logLevel: 'info',
});

await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('assets/app.min.js', 'dist/assets/app.min.js');
await cp('assets/styles.min.css', 'dist/assets/styles.min.css');
await cp('assets/artpuff-logo.png', 'dist/assets/artpuff-logo.png');

const optimizedAssets = [
  'artpuff-logo-full-250.webp',
  'artpuff-logo-full.webp',
  'artpuff-logo-nav-156.webp',
  'artpuff-logo-nav-232.webp',
  'artpuff-logo-nav.webp',
  'artpuff-logo-128.webp',
  'artpuff-logo.webp',
  'artpuff-wordmark-555.webp',
  'artpuff-wordmark.webp',
  'lazienka-after-360.webp',
  'lazienka-after.webp',
  'lazienka-before-360.webp',
  'lazienka-before.webp',
  'portfolio-agroturystyka-480.webp',
  'portfolio-agroturystyka.webp',
  'portfolio-boho-480.webp',
  'portfolio-boho.webp',
  'portfolio-kaszubska-360.webp',
  'portfolio-kaszubska-480.webp',
  'portfolio-kaszubska.webp',
  'portfolio-myhome-480.webp',
  'portfolio-myhome.webp',
  'portfolio-terminarz-480.webp',
  'portfolio-terminarz.webp',
  'service-korekta-240.webp',
  'service-korekta-360.webp',
  'service-korekta-480.webp',
  'service-korekta.webp',
  'service-post-240.webp',
  'service-post-360.webp',
  'service-post-480.webp',
  'service-post.webp',
  'service-www-240.webp',
  'service-www-360.webp',
  'service-www-480.webp',
  'service-www.webp',
];

await Promise.all(
  optimizedAssets.map((asset) => cp(`assets/${asset}`, `dist/assets/${asset}`)),
);
