---
description: Fetch and summarize current documentation for a library via context7
---

Fetch current documentation for the library: $ARGUMENTS

Follow these steps exactly:

1. **Resolve the library ID** — call `mcp__context7__resolve-library-id` with the library name "$ARGUMENTS".
   - Choose the best match based on name similarity, source reputation, and number of code snippets.
   - If no confident match exists, list 2–3 of the closest candidates (name, library ID, and one-line description each) and ask the user which one they meant. Do not proceed until they confirm.

2. **Fetch the docs** — call `mcp__context7__query-docs` with the resolved library ID. Use a query focused on current best practices, recommended patterns, and common usage.

3. **Return a focused summary** structured as:
   - **Overview** — what the library does and current stable version if mentioned
   - **Best practices** — the patterns the docs actively recommend today
   - **Key API / config** — the most important methods, options, or configuration
   - **Examples** — 1–3 real code examples taken directly from the fetched docs, unmodified
   - **Gotchas** — any deprecations, version-specific caveats, or common mistakes the docs warn about
