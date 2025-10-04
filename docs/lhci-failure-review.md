# LHCI Failure Review

This document summarizes the CI failures encountered after merging `fix/contact-email` and the subsequent changes, explains root causes, and lists recommended fixes and follow-ups.

## Summary of events

- Added GA consent & analytics code and other tweaks earlier (merged to `main`).
- Added LHCI configuration and attempted to run Lighthouse CI in a separate workflow.
- CI failing with LHCI error: `Failed to automatically determine 'staticDistDir'`.
- Attempted local fixes: added `.lighthouserc.json`, added `@lhci/cli` to devDependencies, updated workflows to run LHCI against a live Next server.
- During local verification, encountered Windows-specific issues (Chrome profile / temp file locks, Lighthouse 404 when autorun started its own server, npm lockfile out-of-sync after dependency changes).

## Root causes

1. LHCI couldn't detect static output (staticDistDir) because Next v15 removed `next export` and project wasn't configured for static export. LHCI autorun expects either a config or CLI flag.

2. We added `@lhci/cli` in package.json but didn't update `package-lock.json`, which caused `npm ci` to fail in CI. This was fixed by running `npm install` and committing the updated lockfile.

3. Local verification on Windows caused additional failures:
   - `next export` removed in Next v15, so `npm run export` failed.
   - LHCI autorun started a temporary server and returned 404 on requests (likely due to wrong target or missing static files for the autorun mode).
   - Chrome temp profile / process cleanup failed on Windows (EBUSY / taskkill not found behavior), causing LHCI to error out.
   - File locks (next-swc binary) caused `npm ci` to fail initially; stopping node processes and retrying fixed this.

## Actions taken

- Created `.lighthouserc.json` initially, but switched to a live-site approach because `next export` is deprecated.
- Updated `.github/workflows/lighthouse-ci.yml` to build, start the Next server on CI, wait for it, and run `lhci autorun --collect.url=http://localhost:3000`.
- Added `@lhci/cli` to `devDependencies` and updated `package-lock.json`, then committed the lockfile and pushed to `main`.
- Verified locally that `npm ci` now runs cleanly.

## Recommended fixes (prioritized)

1. Keep the LHCI workflow that runs LHCI against a running Next server (the changes in the repo already do this). On CI (ubuntu) this is stable and avoids `next export` incompatibilities.

2. Improve server readiness check in the workflow using `wait-on`:

```yaml
- name: Wait for server
  run: npx wait-on http://127.0.0.1:3000
```

This avoids flaky polling.

3. Add Chrome flags if CI errors about sandboxing or process killing:

```
lhci autorun --collect.url=http://127.0.0.1:3000 --collect.chromeFlags="--no-sandbox --disable-setuid-sandbox"
```

4. Reproduce LHCI runs in CI rather than on Windows locally to avoid Windows-specific file-lock and `taskkill` issues. If you must run locally on Windows, use WSL2 or close Chrome and Node processes before running LHCI.

5. Optionally remove `.lighthouserc.json` if not using static export; it's harmless to keep but not necessary for live-site runs.

6. Add `wait-on` as a devDependency and update the workflow to use it.

## Follow-ups I can do for you

- Create a PR that polishes the `lighthouse-ci.yml` workflow to use `wait-on`, ensure PORT=3000 is set, and add chrome flags; I can include an explanation and a small README snippet for maintainers.
- Revert to a static export approach (requires updating `next.config.js` to use `output: 'export'` and ensuring all pages are export-compatible). This is more invasive and may break features.

---

If you'd like, I will create a PR with the workflow polish (wait-on + chrome flags + minor docs). Reply `Create PR` and I'll push the branch and open the PR for review.
