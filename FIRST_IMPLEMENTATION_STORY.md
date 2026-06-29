# First Implementation Story

## 1. Story Date

2026-06-29

## 2. Source Architecture

Source document:

```text
GAME_ARCHITECTURE.md
```

Source decision:

```text
ARCHITECTURE_READY_FOR_FIRST_IMPLEMENTATION_STORY
```

## 3. Working Title

Moonlight Delivery

## 4. Implementation Story Name

```text
Chapter 1 Shell
```

## 5. Story Goal

Create the smallest playable Moonlight Delivery scene shell with title, story text, objective text, one or two choices, and one completion ending.

## 6. User-Facing Result

Player can open the first scene, read the delivery prompt, click a route choice, and see the delivery completed ending.

## 7. Allowed File Changes For Implementation

These are planned implementation paths only. They are not created during this story-writing step.

Required planned changes:

```text
assets/scenes/chapter_01.scene
assets/scripts/story/MoonlightDeliveryController.ts
```

Optional planned changes, only if they keep the first implementation simpler:

```text
assets/scripts/ui/StoryView.ts
assets/scripts/data/MoonlightDeliveryData.ts
```

No other runtime, asset, prefab, scene, or meta paths are approved by this story.

## 8. Forbidden File Changes For Implementation

- `assets/prefabs/**`
- external assets
- final art
- audio
- fonts
- Spine
- particles
- VFX
- combat systems
- economy systems
- inventory systems
- shop systems
- gacha systems
- save/load systems
- multi-chapter framework
- large dialogue database
- quest system
- second chapter

## 9. Required Implementation Files

```text
assets/scenes/chapter_01.scene
assets/scripts/story/MoonlightDeliveryController.ts
```

These files are required only after the later implementation command begins and passes its pre-write approval checklist.

## 10. Optional Implementation Files

```text
assets/scripts/ui/StoryView.ts
assets/scripts/data/MoonlightDeliveryData.ts
```

Optional file rules:

- `StoryView.ts` may exist only if it reduces UI binding confusion.
- `MoonlightDeliveryData.ts` may exist only if it keeps the three story beats clearer.
- Optional files must not create a generic dialogue, quest, chapter, save, or content pipeline.

## 11. Scene Requirements

- one Cocos scene only
- Canvas
- TitleLabel
- StoryTextLabel
- ObjectiveLabel
- ChoiceButtonA
- ChoiceButtonB optional
- EndingText
- PlaceholderBackground optional
- No prefab required
- No imported asset required

## 12. UI Requirements

- show title: Moonlight Delivery
- show story prompt
- show objective: Deliver the package before the night ends.
- show one or two route choice buttons
- show ending text after choice
- ending text: Delivery completed before the night ends.

## 13. Story Logic Requirements

- state starts at intro
- button click moves state to completion
- story controller owns current beat
- story controller owns selected choice
- story controller owns completion state
- story controller owns ending visibility
- UI only displays state
- animation callbacks must not own story completion

## 14. Data Requirements

- may hardcode three story beats in controller
- optional small data object allowed only if simpler
- no JSON pipeline
- no database
- no localization
- no remote config

## 15. Asset Requirements

- use default Cocos UI components
- placeholder visuals only
- no external imports
- no final art
- no audio
- no custom font

## 16. Runtime Proof Requirements

```text
Cocos Creator opened: NO for this story-writing step
Browser preview tested: NO for this story-writing step
Runtime readiness: NOT_PROVEN
Preview Visibility Gate required during implementation validation
Browser preview must later show visible playable UI or marker
```

Runtime proof must happen during a later implementation validation step. This story-writing step does not prove runtime readiness.

## 17. Acceptance Criteria

1. Scene file exists after implementation.
2. Controller script exists after implementation.
3. Browser preview shows Moonlight Delivery title.
4. Browser preview shows delivery objective.
5. Browser preview shows at least one route choice button.
6. Clicking a choice shows ending text.
7. No combat, economy, inventory, shop, gacha, save/load, or second chapter exists.
8. No external assets are required.
9. Runtime proof includes browser preview evidence.
10. Git diff shows only approved implementation files.

## 18. Out-Of-Scope List

- combat
- enemies
- damage
- currency
- shop
- bag
- inventory
- gacha
- upgrade
- reward system
- save/load
- second chapter
- multi-scene framework
- large branching story
- complex animation
- final art
- audio
- external assets

## 19. Implementation Risks

### Scope Drift

Risk:

The first playable could expand from a tiny story shell into combat, economy, inventory, chapter, dialogue, or quest systems.

Control:

Implementation may only create the approved scene shell and minimal story controller listed in this document.

### Scene Or Meta Damage

Risk:

Direct editing of Cocos serialized scene, prefab, or meta files outside approved tooling can damage UUID references.

Control:

The later implementation must use Cocos-safe workflows for scene work and must not modify unrelated scene, prefab, or meta files.

### UI Owns Story Truth

Risk:

Label text or button state could become the hidden source of story progress.

Control:

Story state must live in the story controller. UI only displays state and forwards click requests.

### Runtime Proof Missed

Risk:

The implementation could be considered complete without browser preview evidence.

Control:

Preview Visibility Gate is required during implementation validation.

## 20. Required Pre-Write Approval Checklist

Before implementation begins, Codex must state:

1. exact files to create or modify
2. why each file is needed
3. files that must not be touched
4. runtime validation plan
5. rollback plan
6. expected git diff scope

## 21. Next Required Command

```text
cocos-production-readiness
```

Purpose:

Re-run production readiness now that the first implementation story exists, while keeping runtime readiness truth separate from documentation readiness.

## 22. Final Implementation Story Decision

```text
FIRST_STORY_READY_FOR_PRODUCTION_READINESS
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
