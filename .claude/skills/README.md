# Claude Code Skills

Skills vendored into this repo so they load automatically in every Claude Code
session (including Claude Code on the web) for this project.

## Installed

| Skill | Source |
|-------|--------|
| `frontend-design` | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| `ui-ux-pro-max`, `design`, `design-system`, `brand`, `banner-design`, `slides`, `ui-styling` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (v2.11.0) |

The `ui-ux-pro-max-skill` package is distributed as an npm plugin
(`npx ui-ux-pro-max-cli init`). Its bundled skills are vendored here directly
rather than installed globally, because the web/cloud container's global
`~/.claude` is ephemeral and wiped between sessions — committing them to the
repo is what makes them persist.

To update, re-copy from the upstream sources above.
