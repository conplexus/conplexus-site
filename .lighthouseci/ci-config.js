module.exports = {
  ci: {
    collect: {
      // Start a local server and test the built Next.js app
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready',
      startServerReadyTimeout: 20000,
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/about',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
        'http://localhost:3000/privacy'
      ],
      numberOfRuns: 3,
    },
    assert: {
      // Use permissive thresholds initially - won't block merging
      // These can be tightened over time as performance improves
      assertions: {
        'categories:performance': ['warn', { minScore: 0.5 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      // Upload results for storage/analysis (optional, requires setup)
      // For now, just report to console
      target: 'temporary-public-storage',
    },
  },
};
