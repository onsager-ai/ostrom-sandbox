# ostrom-sandbox

A practice repository for [Ostrom](https://github.com/onsager-ai/ostrom). Ostrom's Workers take
issues filed here, open PRs, and answer reviews, so the loop can be tested end to end on real
GitHub without touching a real project.

The project is a deliberately small CSV parser (`src/csv.js`) with tests (`npm test`, Node 24). It
has known gaps, such as CRLF line endings and a last line without a trailing newline, which make
good practice issues.

Nothing here is production code. Issues, PRs and branches may be created and closed freely.
