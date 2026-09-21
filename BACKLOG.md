# digest-bot backlog

## BL-001 — Add a total row to the digest output
**Status:** ready

Append a final line to `out/digest.txt` showing the total across all teams.
Self-contained, no external dependencies.

---

## BL-002 — Emit the notification payload with each recipient's opt-out status
**Status:** BLOCKED — waiting on `shared-config`

Write a second output file, `out/digest.json`, listing one entry per recipient so
downstream notification consumers can decide who to send to.

Each entry carries the user's id, their team, their count, and whether they have
opted out of notifications. The opt-out value already exists in the input feed —
`data/reports.json` carries it per user as the local key `opted_out`.

**Why this is blocked:** the *output* key must use the canonical field name owned
by the `shared-config` project, not our local `opted_out`. Downstream consumers
read the canonical name. If we emit our local name instead, every consumer
silently misses the flag and notifies people who opted out.

We must not guess that name here — two services each picking a sensible name for
the same field is exactly the bug this convention exists to prevent.

**Needs from shared-config:** the canonical field name for "user has opted out of
notifications", defined in its `config/fields.json`.
