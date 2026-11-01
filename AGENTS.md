# tinykit

A dependency-free ES module library. One function per file in `src/`, re-exported from `src/index.js`, with one test file per function in `test/`, and one line per function under "Functions" in `README.md`.

- **Setup:** none. There is nothing to install.
- **Verification:** `node --test`. There is no typecheck, build, preview or deployment, and no ports to allocate.
- **Scope:** tickets are small on purpose. Build what the ticket states and stop. Keep tests to the cases it lists.
- **Code review:** run `/code-review low` once, and fix only what it confirms.
- **Tracker:** GitHub Issues in this repo. There are no status fields, so skip every status change. Merging with `Closes #<n>` closes the issue, which counts as Done.
- **Evidence:** the PR body names the head commit and the `node --test` pass count for it.
- **Worktrees:** `.worktrees/<issue>-<slug>`.
- **Owner decisions:** none are reserved beyond the skill's defaults.
