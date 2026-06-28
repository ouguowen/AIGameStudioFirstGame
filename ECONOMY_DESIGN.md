# Economy Design

## 1. Economy Design Date

2026-06-29

## 2. Source Numerical Design

Source document:

```text
NUMERICAL_DESIGN.md
```

Source decision:

```text
NUMERICAL_READY_FOR_ECONOMY_DESIGN
```

## 3. Working Title

Moonlight Delivery

## 4. Game Type

```text
story-clear / light-interaction / narrative micro-game
```

## 5. Economy Scope Decision

```text
No economy system required.
```

The first MVP is a one-scene, one-delivery, story-clear micro-game. It can prove the core loop with static story text, one delivery objective, one or two choice buttons, and one completion state. It does not need value production, spending, accumulation, pricing, rewards, inventory, monetization, or long-term progression.

Confirmed economy exclusions:

- No economy system required.
- No currency.
- No shop.
- No inventory.
- No bag.
- No gacha.
- No upgrades.
- No reward amounts.
- No energy.
- No stamina.
- No ads.
- No monetization.
- No item collection.
- No payment loop.

## 6. Currency Decision

```text
No currency.
```

No coins, gems, cash, delivery fee, token, score currency, premium currency, or hidden wallet is approved for the first version.

## 7. Reward Decision

```text
No reward amounts.
```

The first version may show delivery completion text only. It must not grant money, items, points, XP, unlocks, daily rewards, quest rewards, or any reward value.

## 8. Shop Decision

```text
No shop.
```

No shop, store, catalog, prices, purchase panel, item list, IAP, or purchase loop is approved for the first version.

## 9. Inventory / Bag Decision

```text
No inventory.
No bag.
```

The delivery theme must not become an item ownership system. No bag screen, item collection, inventory capacity, item gain, item use, or inventory update is approved for the first version.

## 10. Gacha Decision

```text
No gacha.
```

No gacha pool, loot box, random reward, drop rate, rarity, pull currency, pity rule, duplicate conversion, or probability table is approved for the first version.

## 11. Upgrade Decision

```text
No upgrades.
```

No upgrade level, cost curve, power curve, XP, progression stat, unlock gate, or improvement track is approved for the first version.

## 12. Energy / Stamina Decision

```text
No energy.
No stamina.
```

The first MVP must not limit play with stamina, energy, lives, retry costs, daily limits, cooldown currency, or session gating.

## 13. Ad / Monetization Decision

```text
No ads.
No monetization.
```

No rewarded video, interstitial ad, ad placement, IAP, battle pass, product catalog, premium currency, purchase limit, or monetization tuning is approved for the first version.

## 14. Allowed First-Version Economy-Related Behavior

Only these economy-adjacent behaviors are allowed:

```text
delivery completion text only
story ending confirmation only
no reward value
no item gain
no money gain
no inventory update
```

The success moment is narrative confirmation, not a reward grant.

## 15. Forbidden Economy Systems

- currency
- coins
- gems
- cash
- prices
- shop
- store
- inventory
- bag
- items
- item collection
- gacha
- loot box
- upgrade
- reward amounts
- daily reward
- stamina
- energy
- ads
- monetization
- IAP
- battle pass
- quest reward
- drop rate

## 16. Validation Requirements

1. Economy design does not authorize implementation.
2. First MVP must not create any economy config.
3. First MVP must not create shop, inventory, gacha, reward, currency, stamina, ad, or monetization code.
4. If future features add rewards, items, currency, upgrades, ads, or monetization, economy design must be reopened.
5. Browser preview proof is still required later for runtime readiness.

## 17. Economy Risks

### Delivery Theme Becomes Payment Logic

Risk:

The delivery premise could accidentally introduce fees, tips, coins, or completion rewards.

Control:

Use story ending confirmation only. Do not represent payment, currency gain, or reward value.

### Story Object Becomes Inventory

Risk:

The delivered package could become a collectible item or inventory object.

Control:

Treat the package as story text, not inventory state. No item gain or bag update is allowed.

### Completion Screen Becomes Reward Screen

Risk:

The ending could drift into scores, ratings, XP, daily rewards, or unlocks.

Control:

The only approved ending result is: `Delivery completed before the night ends.`

### Readiness Confusion

Risk:

Passing economy design could be mistaken for implementation readiness.

Control:

Economy design is only a design gate. Runtime readiness remains unproven, and browser preview proof is still required later.

## 18. Next Required Command

```text
cocos-animation-design
```

Purpose:

Confirm first-version presentation scope before any Cocos implementation. Presentation must remain placeholder-level and must not add complex animation systems.

## 19. Final Economy Decision

```text
ECONOMY_READY_FOR_ANIMATION_DESIGN
```

Expected status:

- Cocos Creator opened: NO
- Browser preview tested: NO
- Game implementation started: NO
