# Animation Design

## 1. Animation Design Date

2026-06-29

## 2. Source Economy Design

Source document:

```text
ECONOMY_DESIGN.md
```

Source decision:

```text
ECONOMY_READY_FOR_ANIMATION_DESIGN
```

## 3. Working Title

Moonlight Delivery

## 4. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

## 5. Presentation Scope Decision

```text
No complex animation system required.
```

The first MVP should prove a tiny story-clear loop with readable static UI and placeholder visuals. Presentation exists only to make the title, story prompt, objective, choices, and ending visible.

Confirmed presentation exclusions:

- No complex animation system required.
- No Spine.
- No character animation.
- No combat animation.
- No timeline/cutscene system.
- No camera animation.
- No particle/VFX system.
- No gameplay truth hidden in animation callbacks.

## 6. Animation System Decision

```text
No animation system required for MVP.
```

The first version must not introduce Spine, skeletal animation, character animation controllers, AnimationClip state machines, cinematic timeline systems, particle systems, or complex Tween chains.

If later versions need motion, animation design must be reopened before implementation.

## 7. UI Motion Decision

```text
No required UI animation for MVP.
Button press feedback may use default Cocos UI state only.
No custom Tween required.
No animation-driven state changes.
```

The MVP may rely on default Button visual states for pressed, hover, or disabled feedback if Cocos provides them through normal UI component behavior. No custom UI transition, panel motion, fade chain, scale pulse, or timing-controlled reveal is required.

## 8. Scene Visual Decision

```text
placeholder background only
simple moonlit theme can be represented by text or static color
no final art required
no lighting system required
no camera movement required
```

The moonlit delivery theme can be conveyed with title text, story copy, a static background color, or one static placeholder marker. The first version does not require authored art, lighting, post-processing, camera movement, weather effects, or environmental VFX.

## 9. Feedback Decision

```text
choice click changes story state immediately
ending text appears after choice
no animation timing controls completion
no reward animation
no particle effect
```

Feedback is textual and immediate. The player clicks a choice, the story state changes, and the completion ending is displayed. Completion must not wait for animation timing.

## 10. Allowed First-Version Presentation

Only these presentation elements are approved:

```text
static background placeholder
title label
story text label
objective label
one or two buttons
ending text
optional simple button state change
optional static visual marker
```

Allowed presentation must remain placeholder-level and must not introduce runtime systems beyond what is needed to show the tiny story-clear UI.

## 11. Forbidden Presentation Systems

- Spine
- skeletal animation
- character animation controller
- combat animation
- damage animation
- reward animation
- timeline cutscene
- camera animation
- particle VFX
- complex Tween chains
- animation event gameplay triggers
- animation callback level clear
- animation callback reward grant
- cinematic transition system
- lighting system
- post-processing system

## 12. Gameplay Truth Boundary

1. Gameplay/story state must be controlled by story logic, not animation callbacks.
2. UI only displays current story beat, objective, choices, and ending.
3. Animation or presentation must not grant completion, rewards, currency, inventory, or progression.
4. Button click may request state change, but final state truth must live in story state logic.

Presentation boundary:

```text
story state -> UI display
button click -> story state request
story state confirmation -> visible text update
```

Forbidden boundary:

```text
animation callback -> completion
animation callback -> reward
animation callback -> currency
animation callback -> inventory
animation callback -> progression
```

## 13. Runtime Proof Requirements

Current animation design step:

```text
Cocos Creator opened: NO for this animation design step
Browser preview tested: NO for this animation design step
Runtime readiness: NOT_PROVEN
Preview Visibility Gate required later
Do not claim READY_FOR_IMPLEMENTATION from animation design alone
```

Later runtime proof must verify that the first playable UI is visible in browser preview. Editor hierarchy or documentation alone must not be treated as runtime readiness.

## 14. Validation Requirements

1. Animation design does not authorize implementation.
2. First MVP must not create Spine, skeletal animation, timeline, cutscene, camera animation, particle, VFX, lighting, post-processing, or complex Tween systems.
3. First MVP must not create animation callbacks that own story completion, rewards, currency, inventory, or progression.
4. Default Cocos Button state feedback is allowed only as passive UI feedback.
5. If future features add character motion, UI transitions, VFX, cutscenes, camera movement, or animation-driven timing, animation design must be reopened.
6. Browser preview proof is still required later for runtime readiness.

## 15. Animation / Presentation Risks

### Quiet Theme Becomes Visual Overbuild

Risk:

The moonlit delivery theme could attract lighting, camera movement, particles, weather, post-processing, or cinematic transitions before the core loop is proven.

Control:

Use static text, static placeholder background, and optional static marker only.

### Button Feedback Becomes Tween System

Risk:

A simple choice click could expand into custom panel transitions, chained tweens, delayed reveals, or animation-managed state.

Control:

Use immediate story state changes. Default Button visual state is enough for first MVP.

### Animation Owns Story Completion

Risk:

Ending display, completion, or future rewards could be tied to animation completion callbacks.

Control:

Story logic owns state. Presentation only displays the current state.

### Runtime Readiness Confusion

Risk:

Passing animation design could be mistaken for implementation readiness.

Control:

Animation design is a pre-production gate only. Runtime readiness remains NOT_PROVEN until browser preview proof passes later.

## 16. Next Required Command

```text
cocos-asset-policy
```

Purpose:

Define placeholder asset policy, naming, ownership, and source rules before any Cocos implementation or asset work begins.

## 17. Final Animation Decision

```text
ANIMATION_READY_FOR_ASSET_POLICY
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
