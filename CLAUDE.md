# MH Landing — Agent Instructions

Trang link-in-bio (kiểu Linktree). Rules below are loaded every session.

@AGENTS.md
@.claude/rules/project.md
@.claude/rules/design-system.md
@.claude/rules/accessibility.md
@.claude/rules/code-style.md
@.claude/rules/verification.md

## Workflow

```
/plan → (review) → /execute → /design-review → /finish → /commit
                      ↑           ↓
                      └── /debug ─┘
```

| Command | Use for |
|---------|---------|
| `/plan` | Design a change before writing it. Produces `task.md` + `implementation-plan.md`. |
| `/execute` | Implement an approved plan, layer by layer, with checkpoints. |
| `/design-review` | Design-system + a11y + correctness review of the working diff. |
| `/debug` | Disciplined bug hunt. No blind edits. |
| `/finish` | Verify, extract durable learnings, write the walkthrough. |
| `/commit` | Conventional-commit message, reviewed before it lands. |
| `/teach` | Narrative debrief in `docs/teach/` — why, not just what. |

## Specialist Agents

| Agent | Delegate when |
|-------|---------------|
| `design-system-guardian` | Auditing token/component consistency across many files. |
| `a11y-auditor` | Accessibility sweep of a change or a page. |
| `ui-implementer` | Building a component from an approved spec. |
| `frontend-scout` | Read-only search for existing patterns before building new. |

## Standing Reminders

- Detect the stack, never assume it — `.claude/hooks/detect-stack.sh`.
- Tokens over magic numbers. Semantics over ARIA. Both themes, every time.
- Report what you actually verified. Skipped is `⏭️ skipped (reason)`, not `✅`.
