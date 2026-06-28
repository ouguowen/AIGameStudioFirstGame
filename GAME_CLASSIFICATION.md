# Game Classification

## 1. Classification Date

2026-06-29

## 2. Source Brief

Source document:

```text
GAME_BRIEF.md
```

Source direction:

```text
Moonlight Delivery
```

This classification uses the approved brief direction as the current candidate. It does not start implementation.

## 3. Working Title

Moonlight Delivery

## 4. Primary Game Type

```text
story-clear / light-interaction / narrative micro-game
```

Classifier mapping:

```text
Narrative Exploration, reduced to a tiny authored story-clear MVP.
```

## 5. Secondary Tags

- one-scene MVP
- authored micro-story
- choice-light interaction
- chapter-one validation
- no combat
- no economy
- beginner-friendly Cocos workflow

## 6. Dominant Player Action

```text
Read a short prompt + click one choice + complete the delivery objective.
```

The player is not managing resources, fighting enemies, solving a large puzzle, collecting items, or optimizing a build.

## 7. Main Content Unit

```text
One short story scene / one delivery task / one ending.
```

The first content unit is a single authored scene, not a level pack, chapter chain, shop loop, inventory loop, combat encounter, or open map.

## 8. Progression Shape

```text
Start -> Choice -> Delivery Complete -> Ending
```

The first version has a linear completion shape with at most one or two tiny choices.

## 9. Runtime Complexity Level

```text
Very low
```

Expected first-version runtime needs:

- simple scene shell
- static story text
- one objective label
- one or two buttons
- one completion state
- placeholder visuals
- browser preview proof later

Runtime complexity deliberately excludes combat simulation, economy state, inventory persistence, save/load, complex animation state machines, and broad content pipelines.

## 10. Correct Template Family

Primary template family:

```text
Narrative Exploration Template
```

MVP usage:

```text
Use only the smallest authored story-room pattern from the template.
```

Template fit:

- The main unit is an authored story scene.
- The player advances through prompts and a clear objective.
- The first version validates story readability and basic interaction.
- The loop can stay one scene and one completion state.

Template reduction:

- No location graph for the first version.
- No quest system for the first version.
- No dialogue tooling for the first version.
- No multi-chapter progression for the first version.

## 11. Wrong Templates To Avoid

- tower defense
- combat RPG
- card battle
- idle economy
- shop/economy system
- gacha system
- inventory system
- multi-chapter narrative system
- large quest system
- open world exploration

These templates would pull the project into systems that are explicitly forbidden for the first version.

## 12. MVP Classification

```text
tiny authored narrative micro-game
```

MVP classification statement:

Moonlight Delivery is classified as a very small story-clear MVP. Its purpose is to prove that the project can present one readable story scene, accept a simple player choice, and reach a completion ending in Cocos Creator 3.8.8.

The MVP is not a full narrative game, not a combat game, not a puzzle campaign, and not an economy or progression product.

## 13. Allowed Systems For First Version

- simple scene shell
- static story text
- one objective label
- one or two buttons
- one completion state
- placeholder visuals
- browser preview proof later

## 14. Forbidden Systems For First Version

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

## 15. Classification Risks

### Scope Drift Into Full Narrative System

Risk:

The word "story" can invite chapters, branching dialogue, quest logs, and content pipelines.

Control:

Keep first version to one short scene, one delivery task, one ending, and no Chapter 2.

### Template Overreach

Risk:

The Narrative Exploration Template could be interpreted as requiring locations, quest steps, dialogue state, and unlock flags.

Control:

Use only a reduced authored micro-scene pattern until `cocos-gdd` and `cocos-game-architecture` approve more.

### Runtime Proof Gap

Risk:

Browser preview has not been tested, so implementation readiness is not proven.

Control:

Do not claim runtime readiness until a later preview proof command confirms a visible baseline marker.

### Accidental Economy Or Collection Add-On

Risk:

Delivery themes can accidentally introduce rewards, items, inventory, money, or collection.

Control:

First version has no currency, no inventory, no reward economy, no shop, and no item collection system.

## 16. Next Required Command

```text
cocos-gdd
```

Purpose:

Turn this classification into a small Game Design Document with core loop, player goal, non-goals, MVP proof, and validation requirements before architecture or implementation work.

## 17. Final Classification Decision

```text
CLASSIFIED_FOR_GDD
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
- Next required command: `cocos-gdd`
