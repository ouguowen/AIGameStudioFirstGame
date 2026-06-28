# Numerical Design

## 1. Numerical Design Date

2026-06-29

## 2. Source GDD

Source document:

```text
GAME_DESIGN_DOCUMENT.md
```

Source decision:

```text
GDD_READY_FOR_NUMERICAL_DESIGN
```

## 3. Working Title

Moonlight Delivery

## 4. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

## 5. Numerical Complexity Decision

```text
No balance-heavy numerical system required.
```

The first MVP is a tiny story-clear flow. It does not need combat tuning, enemy stats, damage values, currency, shop prices, upgrade costs, score rules, save/load numbers, stamina, or progression curves.

Confirmed exclusions:

- No combat values.
- No enemy stats.
- No damage.
- No economy.
- No currency.
- No shop prices.
- No upgrade costs.
- No score.
- No save/load numbers.

## 6. Balance-Sensitive Systems

Balance-sensitive systems for first version:

```text
none
```

The first version has no HP, attack, defense, enemy pressure, reward amounts, economy, prices, inventory capacity, XP, level curve, stamina, or monetization tuning.

## 7. Required First-Version Numbers

Only lightweight scope limits are approved:

```text
chapter_count: 1
scene_count: 1
delivery_objective_count: 1
story_beat_count: 3
choice_button_count: 1 to 2
ending_count: 1
fail_state_count: 0
score_system: none
save_system: none
```

These are production scope limits, not gameplay balance values.

## 8. Placeholder Limits

Approved placeholder limits:

```text
title_text_count: 1
story_text_blocks: 3
objective_label_count: 1
choice_button_count: max 2
completion_state_count: 1
```

These limits exist to prevent scope drift during the first implementation story.

## 9. Text And UI Limits

First-version UI count limits:

- one title label
- one story text label
- one objective label
- one or two choice buttons
- one ending text

Text rule:

Each story beat should remain short enough to read quickly in a 30 to 90 second session.

## 10. Choice Limits

Choice limits:

```text
minimum_choice_buttons: 1
maximum_choice_buttons: 2
```

Approved choices:

- Choice A: Take the quiet alley
- Choice B: Take the main street

Choice behavior:

- no stats
- no hidden variables
- no branching tree
- no fail branch
- no inventory requirement
- no currency requirement

## 11. State Limits

Approved first-version state limits:

```text
start_state_count: 1
story_progression_path_count: 1
completion_state_count: 1
fail_state_count: 0
save_state_count: 0
score_state_count: 0
```

The state model should only support moving from start to choice to delivery completion.

## 12. Timing Guidance

Timing guidance is placeholder only, not final tuning:

```text
target_session_length: 30 to 90 seconds
choice_response_delay: immediate
ending_display: static until restart or close
```

Timing guidance must not become hidden gameplay logic. It only supports readability and first-playable pacing.

## 13. Forbidden Numerical Systems

- HP
- damage
- attack
- defense
- enemy stats
- currency
- prices
- reward amounts
- drop rates
- gacha probability
- inventory capacity
- upgrade levels
- XP
- level curve
- stamina
- energy
- daily limits
- monetization tuning

## 14. Validation Requirements

1. Numerical design does not authorize implementation.
2. No gameplay balance tuning is needed for first MVP.
3. If future features add combat, economy, scoring, inventory, or progression, numerical design must be reopened.
4. Browser preview proof is still required later for runtime readiness.

## 15. Numerical Risks

### Scope Limits Treated As Gameplay Balance

Risk:

Simple counts such as `story_beat_count` or `choice_button_count` could be mistaken for final tuning rules.

Control:

Treat these values as MVP scope limits only.

### Hidden Economy Drift

Risk:

The delivery theme could accidentally introduce payment, reward amount, inventory, item value, or shop pricing.

Control:

All economy and currency values are forbidden for first version.

### Hidden Progression Drift

Risk:

Chapter count and ending count could expand into level curves, XP, progression, or save data.

Control:

First version has one chapter, one ending, no XP, no save/load, and no level curve.

### Runtime Readiness Confusion

Risk:

Passing numerical design could be mistaken for implementation readiness.

Control:

Runtime readiness remains NOT_PROVEN until browser preview proof passes later.

## 16. Next Required Command

```text
cocos-economy-design
```

Purpose:

Confirm that the first MVP has no economy, currency, shop, inventory, gacha, upgrade, reward, stamina, or monetization scope.

## 17. Final Numerical Decision

```text
NUMERICAL_READY_FOR_ECONOMY_DESIGN
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
