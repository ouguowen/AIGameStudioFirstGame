# Game Design Document

## 1. Design Date

2026-06-29

## 2. Working Title

Moonlight Delivery

## 3. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

Primary classification:

```text
Narrative Exploration Template, reduced to a tiny authored story-clear MVP.
```

## 4. One-Sentence Concept

Moonlight Delivery is a tiny narrative micro-game where the player reads a short delivery prompt, chooses one route, completes a moonlit delivery, and reaches a single success ending.

## 5. Core Fantasy

The player is a night courier carrying one important package through a quiet city before the night ends.

The fantasy is small and focused:

- one quiet night
- one delivery task
- one meaningful route choice
- one peaceful completion moment

It is not about fighting, earning currency, collecting items, upgrading, managing inventory, or exploring a large world.

## 6. Target Player

- New or casual players who can understand a simple story interaction quickly.
- Developers using Cocos Creator 3.8.8 and Codex in small, reviewable steps.
- Internal validators checking whether the project can produce a tiny complete playable loop.

## 7. First-Version MVP Goal

The first version must prove one complete tiny story-clear loop:

```text
Start scene -> make one route choice -> complete delivery -> show ending.
```

First version scope:

- one chapter
- one scene
- one delivery objective
- three short story beats
- at most two button choices
- one success ending
- simple UI Label / Button
- placeholder visuals
- no save
- no scoring
- no fail state

## 8. Core Loop

```text
Start scene
-> read delivery prompt
-> choose one route/dialogue option
-> complete delivery objective
-> show ending
```

The loop must remain readable without extra systems.

## 9. Player Objective

Deliver the package before the night ends.

Objective text can be represented as:

```text
Deliver the moonlit package before the night ends.
```

The objective is complete when the player reaches the delivery completion ending.

## 10. Story Premise

On a quiet night, the player receives one small delivery request. The streets are nearly empty, and the player must choose how to cross the city block: the quiet alley or the main street. Either route leads to the same first-version success ending.

This premise supports a tiny MVP without requiring combat, enemies, economy, inventory, or branching story infrastructure.

## 11. Scene Description

The first version uses one simple scene.

Scene needs:

- title label
- story text label
- objective label
- one or two choice buttons
- ending text
- placeholder background or simple visual marker

No location graph, multi-room navigation, quest system, or open world map is required.

## 12. Story Beats

### Beat 1: Receive The Moonlit Delivery Task

The player sees the title and reads that a small package must be delivered before the night ends.

### Beat 2: Choose A Quiet Route Or Direct Route

The player chooses one route:

- quiet alley
- main street

Both choices are allowed to reach the same first-version completion path.

### Beat 3: Complete Delivery And See Ending

The player reaches the delivery point and sees the success ending.

## 13. Player Choices

Maximum first-version choices:

- Choice A: Take the quiet alley
- Choice B: Take the main street

Choice rules:

- At most two buttons.
- No large branching story.
- No hidden stats.
- No inventory check.
- No currency check.
- No fail state.
- Both choices can resolve to the same delivery completion ending in the first version.

## 14. Success Ending

```text
Delivery completed before the night ends.
```

The ending confirms that the player completed the delivery objective.

## 15. UI Requirements

The first version UI is limited to:

- title label
- story text label
- objective label
- one or two choice buttons
- ending text

UI must not own hidden gameplay truth. It only displays the current story beat, objective, available choice, and ending.

## 16. Allowed First-Version Systems

- simple scene shell
- static story text
- objective label
- one or two buttons
- completion state
- placeholder visuals
- browser preview proof later

## 17. Forbidden First-Version Systems

- combat
- enemies
- damage
- currency
- shop
- bag
- gacha
- upgrade
- inventory
- save/load
- second chapter
- complex animation
- large branching story
- large quest system
- open world exploration

## 18. MVP Acceptance Criteria

1. Player can see the story title.
2. Player can read the delivery objective.
3. Player can click one choice.
4. Player can reach the delivery completion ending.
5. Browser preview proof will be required before runtime readiness is accepted.

## 19. Runtime Proof Requirements

Current GDD step:

- Cocos Creator opened: NO for this GDD step
- Browser preview tested: NO for this GDD step
- Runtime readiness: NOT_PROVEN
- Preview Visibility Gate required later
- Do not claim READY_FOR_IMPLEMENTATION from GDD alone

Later runtime proof must show the baseline marker or first playable UI in browser preview, not only in editor hierarchy or documentation.

## 20. Design Risks

### Scope Drift

Risk:

The delivery story could expand into multiple chapters, many routes, quest chains, or a large branching story.

Control:

First version remains one chapter, one scene, one delivery task, one ending.

### System Creep

Risk:

Delivery themes can attract inventory, item collection, currency, rewards, upgrades, shops, or quest logs.

Control:

All economy, inventory, upgrade, shop, gacha, save/load, and large quest systems are forbidden for the first version.

### Runtime Proof Gap

Risk:

The design is clear, but runtime readiness is not proven.

Control:

Browser preview proof and Preview Visibility Gate must be handled later before implementation readiness can pass.

### Presentation Overbuild

Risk:

The quiet-night theme could invite complex animation, lighting, transitions, or cinematic presentation.

Control:

First version uses placeholder visuals and simple UI only.

## 21. Scope Control Rules

- Do not add a second chapter.
- Do not add combat, enemies, damage, economy, inventory, shop, gacha, upgrade, save/load, or open world exploration.
- Do not add more than two route buttons in the first version.
- Do not add a fail state unless approved in a later design step.
- Do not add a scoring system.
- Do not add complex animation.
- Do not treat GDD readiness as runtime readiness.
- Do not start implementation until later gates approve architecture, asset policy, story readiness, and runtime proof path.

## 22. Next Required Command

```text
cocos-numerical-design
```

Purpose:

Confirm that this MVP has no balance-heavy gameplay numbers and record any minimal placeholder timing or text-count constraints before architecture and implementation planning.

## 23. Final GDD Decision

```text
GDD_READY_FOR_NUMERICAL_DESIGN
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
