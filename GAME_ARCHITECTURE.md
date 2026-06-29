# Game Architecture

## 1. Architecture Date

2026-06-29

## 2. Source Asset Policy

Source document:

```text
ASSET_POLICY.md
```

Source decision:

```text
ASSET_POLICY_READY_FOR_ARCHITECTURE
```

## 3. Working Title

Moonlight Delivery

## 4. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

## 5. Architecture Scope Decision

```text
Use a tiny one-scene story-clear architecture.
```

Architecture conclusions:

- Use a tiny one-scene story-clear architecture.
- No combat architecture.
- No economy architecture.
- No inventory architecture.
- No save/load architecture.
- No animation system architecture.
- No multi-scene chapter framework.
- No global manager sprawl.
- No god script.

This architecture is only a design record. It does not create scenes, prefabs, scripts, meta files, assets, or runtime implementation.

## 6. Cocos Creator Version Target

```text
Cocos Creator 3.8.8
```

The architecture should fit a normal Cocos Creator 3.8.8 TypeScript workflow and should avoid older Cocos 2.x-style assumptions.

## 7. Scene Architecture

First MVP scene plan:

```text
one playable scene for first MVP
scene name may be chapter_01.scene or moonlight_delivery.scene
do not create scene in this architecture step
actual scene creation belongs to first implementation story
browser preview proof required later
```

Recommended planned scene file:

```text
assets/scenes/chapter_01.scene
```

This file is expected later, not created during this architecture step.

## 8. Node/UI Architecture

Planned first-version hierarchy:

```text
Canvas
- TitleLabel
- StoryTextLabel
- ObjectiveLabel
- ChoiceButtonA
- ChoiceButtonB optional
- EndingText
- PlaceholderBackground optional
```

Rules:

- Keep the scene as a simple UI shell.
- Use built-in Cocos UI components.
- Use only placeholder visual elements.
- Do not add combat, economy, inventory, shop, gacha, save, quest, chapter, animation, VFX, or asset-loading nodes.

## 9. Script Architecture

Planned future script files:

```text
assets/scripts/story/MoonlightDeliveryController.ts
assets/scripts/ui/StoryView.ts optional
assets/scripts/data/MoonlightDeliveryData.ts optional
```

First implementation may stay smaller:

```text
1 controller + simple UI references
```

Rules:

- The first implementation may use one small controller if that keeps the MVP simpler.
- `StoryView.ts` is optional and should exist only if it reduces UI binding confusion.
- `MoonlightDeliveryData.ts` is optional and should exist only if it keeps the three story beats clearer.
- Do not expand into a complex framework.
- Do not create a generic dialogue system early.
- Do not create a quest system.
- Do not create a save system.
- Do not create a chapter framework.

## 10. Story State Ownership

Story logic owns:

- current beat
- selected choice
- completion state
- ending visibility

The story controller is the approved owner of first-version story truth. UI components may request state changes but must not become the source of truth.

## 11. UI Ownership Boundary

UI only displays:

- title
- story text
- objective text
- choices
- ending text

Button click may request story state change, but UI must not own final gameplay truth.

Boundary:

```text
Button click -> story controller request -> story state update -> UI refresh
```

Forbidden boundary:

```text
Button component state -> gameplay truth
Label text -> gameplay truth
Animation callback -> completion state
```

## 12. Data/Config Boundary

First MVP data rule:

```text
First MVP may hardcode the tiny 3-beat story inside one controller or simple data object.
```

Data/config exclusions:

- No database required.
- No JSON pipeline required.
- No localization pipeline required.
- No remote config required.
- No large content system required.

Optional later tiny data object:

```text
MoonlightDeliveryData.ts
```

This optional file should contain only the first MVP story text, objective, choices, and ending if needed.

## 13. Asset Boundary

Asset rules:

- Use built-in UI components and placeholder visuals only.
- No external imports.
- No final art.
- No audio.
- No custom fonts.
- No Spine.
- No VFX.
- No asset import before implementation approval.

The first implementation story must not depend on imported art or custom resources.

## 14. Runtime Proof Boundary

Runtime proof rules:

```text
Architecture does not prove runtime readiness.
Cocos Creator opened: NO for this architecture step.
Browser preview tested: NO for this architecture step.
Runtime readiness: NOT_PROVEN.
Preview Visibility Gate required later.
```

Later implementation or runtime proof must show a visible browser preview marker or playable UI, not only editor hierarchy or documentation.

## 15. Allowed First-Version Architecture

- one scene
- one small story controller
- simple UI labels/buttons
- one completion state
- placeholder visual only
- browser preview proof later

## 16. Forbidden Architecture Shortcuts

- god script with unrelated systems
- global manager sprawl
- combat manager
- enemy manager
- economy manager
- inventory manager
- shop manager
- gacha manager
- save manager
- quest system
- dialogue database
- multi-chapter framework
- animation-driven story completion
- UI-owned gameplay truth
- scene/prefab/meta modifications during architecture step

## 17. Expected First Implementation Files

Planned required files:

```text
assets/scenes/chapter_01.scene
assets/scripts/story/MoonlightDeliveryController.ts
```

Optional planned files:

```text
assets/scripts/ui/StoryView.ts
assets/scripts/data/MoonlightDeliveryData.ts
```

These are implementation-plan paths only. They must not be created during this architecture step.

## 18. Validation Requirements

1. Architecture design does not authorize implementation.
2. No scene, prefab, meta, or runtime code changes are allowed in this step.
3. First implementation story must list exact files before writing.
4. Runtime proof must later show browser preview visible marker or playable UI.
5. If scope expands into combat, economy, inventory, save/load, multi-chapter, or dialogue system, architecture must be reopened.

## 19. Architecture Risks

### One Controller Becomes A God Script

Risk:

The first controller could silently grow into a mixed owner of story, UI, assets, saves, animation, and future systems.

Control:

The first controller may own only current beat, selected choice, completion state, and ending visibility. If responsibility expands, split a small `StoryView` or data object after review.

### Template Overreach

Risk:

The Narrative Exploration template could pull in location graphs, dialogue databases, quest systems, multi-chapter progression, or content pipelines.

Control:

Use only the smallest authored story-room pattern for the first MVP.

### UI Owns Gameplay Truth

Risk:

Button state or label text could become the only source of story state.

Control:

Story state lives in story logic. UI displays and routes input only.

### Runtime Readiness Confusion

Risk:

Passing architecture could be mistaken for implementation readiness.

Control:

Runtime readiness remains NOT_PROVEN until browser preview proof passes later.

### Path Scope Drift

Risk:

Architecture planning could accidentally create scene, prefab, meta, or script files.

Control:

This step only writes Markdown documentation. Implementation paths are plans, not created files.

## 20. Next Required Command

```text
cocos-first-implementation-story
```

Purpose:

Create one dev-ready implementation story with exact files, acceptance criteria, and runtime proof requirements before any Cocos implementation starts.

## 21. Final Architecture Decision

```text
ARCHITECTURE_READY_FOR_FIRST_IMPLEMENTATION_STORY
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
