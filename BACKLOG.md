# digest-bot backlog

## BL-001 — Add a total row to the digest output
**Status:** ready

Append a final line to `out/digest.txt` showing the total across all teams.
Self-contained, no external dependencies.

---

## BL-002 — Add the notification opt-out field to the digest payload
**Status:** BLOCKED — waiting on `shared-config`

The digest payload needs to carry the per-user notification opt-out flag so
downstream consumers can filter recipients.

**Why this is blocked:** the exact field name is owned by the `shared-config`
project and is not defined in its `config/fields.json` yet. We must not invent a
name here — two services guessing different names is exactly the bug this
convention exists to prevent.

**Needs from shared-config:** the canonical field name for "user has opted out of
notifications", added to `config/fields.json`.
