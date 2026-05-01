---
description: Stage all changes, commit with the provided message, and push to GitHub
---

# Commit and Push

Run the full git workflow with the commit message: $ARGUMENTS

Steps:
1. Run `git status` to show what's about to be committed
2. Run `git add -A` to stage all changes (new, modified, deleted)
3. Run `git commit -m "$ARGUMENTS"` to commit with the user's message
4. Run `git push` to send the commit to GitHub
5. Run `git log --oneline -1` to confirm the new commit is on top

If any step fails, stop immediately and report the error clearly. Do not try to fix it automatically.
