# ostrom-sandbox

A practice repository for [Ostrom](https://github.com/onsager-ai/ostrom). Ostrom's Workers take
issues filed here, open PRs, and answer reviews, so the loop can be tested end to end on real
GitHub without touching a real project.

The project is a deliberately small CSV parser (`src/csv.js`) with tests (`npm test`, Node 24). It
keeps a final row even when the input has no trailing newline. It has known gaps, such as CRLF line
endings, which make good practice issues.

Nothing here is production code. Issues, PRs and branches may be created and closed freely.

## Headerless input

The parser does not infer column headers. It returns every CSV row as data, including the first
row even when it looks like a header:

```js
import { parse } from "./src/csv.js";

const rows = parse("name,age\nAda,37");
console.log(rows);
// [["name", "age"], ["Ada", "37"]]
```
