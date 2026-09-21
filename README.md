# digest-bot

A deliberately tiny service that reads a fixed JSON feed and writes a daily summary.

Built for the MCD demo — it exists to be **boring and predictable**, so the demo
never fails for reasons that have nothing to do with MCD.

## Run it

```bash
node src/digest.js
```

No dependencies, no install step, no network calls. Takes ~15 seconds by design
(there are deliberate pauses between stages so progress streaming has something
to show).

## Depends on

`shared-config` — this project reads field names from that repo's
`config/fields.json`. See `BACKLOG.md` for the item that is currently blocked on it.
