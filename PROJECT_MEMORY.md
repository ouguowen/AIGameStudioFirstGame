# Project Memory

Last updated: 2026-06-29

## Active Skill

`cocos-studio-ouguowen`

Skill path:

```text
C:\Users\欧国文\.codex\skills\cocos-studio-ouguowen
```

## Skill Status

Active for Cocos Creator 3.8.8 production workflow control.

Applied command path:

```text
cocos-first-implementation-story
```

Loaded rules:

- `SKILL.md`
- `COMMANDS.md`
- `TASK_DECOMPOSITION_RULES.md`
- `MVP_PROTOTYPE_RULES.md`
- `GAME_PRODUCTION_READINESS_GATE.md`
- `QUALITY_GATES.md`
- `COCOS_PATH_SCOPED_RULES.md`
- `CODEX_WRITE_APPROVAL_PROTOCOL.md`
- `COMMAND_ROUTING_ALIGNMENT.md`
- `QUALITY_GATE_ALIGNMENT.md`
- `AGENT_REGISTRY.md`
- `AI_GAME_STUDIO_SYSTEM.md`

## Active Cocos Project Path

```text
D:\CocosProjects\AIGameStudioFirstGame\AIGameStudioFirstGame
```

The parent folder `D:\CocosProjects\AIGameStudioFirstGame` is not the active Cocos project root.

## Cocos Version Target

Cocos Creator 3.8.8.

## Current Stage

First implementation story / pre-production planning.

No game implementation has started.

## Current Decision

Approve the current first-version design direction as:

```text
story-clear / light-interaction / narrative micro-game
```

Recommended working direction:

```text
Moonlight Delivery
```

This is a tiny story-clear game where the player makes simple route or dialogue choices to complete one short delivery scene.

Final classification decision:

```text
CLASSIFIED_FOR_GDD
```

Final GDD decision:

```text
GDD_READY_FOR_NUMERICAL_DESIGN
```

Final numerical decision:

```text
NUMERICAL_READY_FOR_ECONOMY_DESIGN
```

Final economy decision:

```text
ECONOMY_READY_FOR_ANIMATION_DESIGN
```

Final animation decision:

```text
ANIMATION_READY_FOR_ASSET_POLICY
```

Final asset policy decision:

```text
ASSET_POLICY_READY_FOR_ARCHITECTURE
```

Final architecture decision:

```text
ARCHITECTURE_READY_FOR_FIRST_IMPLEMENTATION_STORY
```

Final first implementation story decision:

```text
FIRST_STORY_READY_FOR_PRODUCTION_READINESS
```

Correct template family:

```text
Narrative Exploration Template, reduced to a tiny authored story-clear MVP.
```

## Forbidden Scope

- Do not create a battle system.
- Do not create an economy system.
- Do not create shop, inventory, gacha, or Chapter 2 content.
- Do not create complex animation systems.
- Do not expand MVP beyond a tiny first playable.
- Do not modify `assets/scenes/**` during documentation-only commands.
- Do not modify `assets/prefabs/**` during documentation-only commands.
- Do not modify `assets/**/*.meta` during documentation-only commands.
- Do not write TypeScript or JavaScript runtime gameplay code during documentation-only commands.

## Confirmed Facts

- The Cocos project exists at the active project path.
- Cocos Creator opened: YES.
- Browser preview tested: NO.
- Game implementation started: NO.
- Production readiness decision before this classification: DESIGN_NOT_READY.
- Game classification decision: CLASSIFIED_FOR_GDD.
- GDD decision: GDD_READY_FOR_NUMERICAL_DESIGN.
- Numerical decision: NUMERICAL_READY_FOR_ECONOMY_DESIGN.
- Economy decision: ECONOMY_READY_FOR_ANIMATION_DESIGN.
- Animation decision: ANIMATION_READY_FOR_ASSET_POLICY.
- Asset policy decision: ASSET_POLICY_READY_FOR_ARCHITECTURE.
- Architecture decision: ARCHITECTURE_READY_FOR_FIRST_IMPLEMENTATION_STORY.
- First implementation story decision: FIRST_STORY_READY_FOR_PRODUCTION_READINESS.
- The project is suitable for staged Codex development after design and readiness gates are complete.

## Active Assumptions

- The first playable should prove a complete tiny loop, not a large feature set.
- The first version should be understandable by a new Cocos/Codex workflow user.
- Text, buttons, and simple visible markers are enough for early validation.
- The first implementation story is ready for production readiness review before any implementation starts.

## Accepted Risks

- Runtime readiness is not satisfied yet because browser preview has not been tested.
- Production readiness has not re-passed after the first implementation story was written.

## Next Allowed Command

```text
cocos-production-readiness
```
