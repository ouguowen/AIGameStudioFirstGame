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
cocos-classify-game
```

Loaded rules:

- `SKILL.md`
- `COMMANDS.md`
- `GAME_CLASSIFIER_SYSTEM.md`
- `GAME_TYPE_TEMPLATES.md`
- `GAME_PRODUCTION_READINESS_GATE.md`
- `QUALITY_GATES.md`
- `COMMAND_ROUTING_ALIGNMENT.md`
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

Game classification / pre-production planning.

No game implementation has started.

## Current Decision

Classify the current first-version direction as:

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
- The project is suitable for staged Codex development after design and readiness gates are complete.

## Active Assumptions

- The first playable should prove a complete tiny loop, not a large feature set.
- The first version should be understandable by a new Cocos/Codex workflow user.
- Text, buttons, and simple visible markers are enough for early validation.
- The first implementation story should come only after GDD, architecture, asset policy, and readiness are updated.

## Accepted Risks

- Runtime readiness is not satisfied yet because browser preview has not been tested.
- Game architecture is not approved yet.
- The first implementation story is not dev-ready yet.

## Next Allowed Command

```text
cocos-gdd
```
