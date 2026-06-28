# Asset Policy

## 1. Asset Policy Date

2026-06-29

## 2. Source Animation Design

Source document:

```text
ANIMATION_DESIGN.md
```

Source decision:

```text
ANIMATION_READY_FOR_ASSET_POLICY
```

## 3. Working Title

Moonlight Delivery

## 4. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

## 5. Asset Scope Decision

```text
Use placeholder visuals only.
```

The first MVP should prove a tiny story-clear loop with default Cocos UI components, simple text, and placeholder visuals. It does not need final art, imported images, audio, custom fonts, Spine, VFX, particles, or complex prefab assets.

Confirmed asset conclusions:

- No final art required.
- No external art required.
- No audio required.
- No custom font required.
- No Spine required.
- No particle asset required.
- No complex prefab required.
- Use placeholder visuals only.

## 6. Placeholder Visual Decision

```text
static background placeholder
simple color block or empty background
optional static visual marker
```

The moonlit theme may be represented through text, a static background color, or a simple placeholder marker. The first version must not depend on final background art, character art, tilesets, lighting assets, particles, VFX textures, or scene art packs.

## 7. UI Asset Decision

```text
Use default Cocos UI components.
No custom UI art required.
No custom button art required.
No imported image required for first MVP.
No final HUD art required.
```

The first MVP can use Cocos Label and Button components with default styling. UI polish and custom art are not required before the first implementation story.

## 8. Text Asset Decision

```text
Story text may live in code or simple config later.
No localization system required for first MVP.
No dialogue database required.
No text pipeline required.
```

The first version has only three short story beats, one objective, one or two choices, and one ending. A full content pipeline would be unnecessary scope.

## 9. Audio Asset Decision

```text
No audio required for first MVP.
No music required.
No sound effect required.
No voice required.
```

Audio can be considered in a later version only after the playable loop and browser preview proof exist.

## 10. Font Decision

```text
No custom font required.
Use default Cocos/system font behavior for first MVP.
```

The first MVP should not import font files or depend on typography assets.

## 11. External Asset Decision

```text
No external assets.
No paid assets.
No downloaded assets.
No copyright-risk assets.
No AI-generated final art required for first MVP.
```

The first version must avoid license, provenance, import, and review risk by using only built-in UI components and placeholder nodes.

## 12. Naming Rules

If later work creates placeholder nodes or assets, names should be plain and purpose-specific:

```text
ui_title_label
ui_story_text_label
ui_objective_label
ui_choice_button_a
ui_choice_button_b
ui_ending_text
placeholder_background
placeholder_moon_marker
```

Rules:

- Use lowercase snake_case for placeholder node or asset names.
- Include `placeholder_` for temporary visual markers.
- Do not name assets `final`, `new`, `test`, `temp2`, or `real`.
- Do not introduce asset folders or naming schemes before architecture approves project structure.

## 13. Allowed First-Version Assets

Only these first-version asset or asset-like elements are approved:

```text
static background placeholder
simple color block or empty background
title label
story text label
objective label
one or two default Cocos buttons
ending text
optional static visual marker
```

These are placeholder-level UI or scene elements, not final production art.

## 14. Forbidden First-Version Assets

- final character art
- final background art
- tileset
- Spine files
- skeletal animation files
- particle effects
- VFX textures
- custom fonts
- music
- sound effects
- voice files
- shop icons
- inventory icons
- reward icons
- currency icons
- gacha art
- combat effects
- large scene art pack
- second chapter assets

## 15. Cocos Asset Path Risk Rules

1. Do not modify `assets/scenes/**` in this step.
2. Do not modify `assets/prefabs/**` in this step.
3. Do not modify `assets/**/*.meta` in this step.
4. Future asset imports must preserve Cocos `.meta` files.
5. First MVP can use built-in UI components and placeholder nodes only.
6. No asset import is required before the first implementation story.

Risk classification:

- Documentation file `ASSET_POLICY.md`: low risk.
- `PROJECT_MEMORY.md` update: low risk.
- Scene, prefab, meta, runtime code, imported art, audio, font, Spine, and VFX changes: blocked for this command.

## 16. Validation Requirements

1. Asset policy does not authorize implementation.
2. No asset import is required for first MVP.
3. First MVP must not depend on final art.
4. If future work imports art, audio, fonts, Spine, VFX, or paid assets, asset policy must be reopened.
5. Browser preview proof is still required later for runtime readiness.

## 17. Asset Risks

### Placeholder Becomes Final Art Dependency

Risk:

Temporary visuals could be treated as required final art or block the first playable.

Control:

Keep placeholders simple and replaceable. The first MVP must be playable without final art.

### Import Risk Before Architecture

Risk:

Importing images, fonts, audio, Spine, or VFX before architecture could create unmanaged `.meta` files and asset ownership problems.

Control:

Do not import assets before the first implementation story. Preserve `.meta` files when future imports are approved.

### Theme Pulls In Art Scope

Risk:

The moonlit delivery theme could invite final city backgrounds, character art, lighting, particles, or ambience too early.

Control:

Represent the theme with text, static color, and optional placeholder marker only.

### License And Provenance Risk

Risk:

Downloaded, paid, external, or AI-generated final art could introduce review and copyright risk.

Control:

No external assets are approved for the first MVP.

### Runtime Readiness Confusion

Risk:

Passing asset policy could be mistaken for implementation readiness.

Control:

Asset policy is a pre-production gate only. Runtime readiness remains NOT_PROVEN until browser preview proof passes later.

## 18. Next Required Command

```text
cocos-game-architecture
```

Purpose:

Define scene structure, script boundaries, data/config boundary, runtime ownership, and forbidden shortcuts before creating the first implementation story.

## 19. Final Asset Policy Decision

```text
ASSET_POLICY_READY_FOR_ARCHITECTURE
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
