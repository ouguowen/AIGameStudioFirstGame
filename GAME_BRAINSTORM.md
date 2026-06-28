# Game Brainstorm

Current command: `cocos-game-brief`

Scope: brainstorm only. No game implementation starts here.

## Direction 1: Moonlight Delivery

Type:

```text
story-clear / light-interaction
```

Fantasy:

The player is a night courier delivering one important package through a quiet city block before the last train leaves.

Dominant action:

Choose one of two simple route or dialogue options, then see the story advance.

Tiny MVP:

- One chapter.
- One delivery objective.
- Three short story beats.
- Two player choices.
- One clear ending screen.

Why it fits:

- Works well in Cocos Creator 3.8.8 with simple UI and scene markers.
- Good for new developers and Codex because it can be built one small story at a time.
- Avoids combat, economy, inventory, shops, gacha, and complex animation.

Main risk:

If the story text grows too much, scope can expand silently.

Scope guard:

Keep Chapter 1 to one scene, one delivery, and no branching content beyond two choices.

## Direction 2: Signal Keeper

Type:

```text
single-screen observation / light puzzle
```

Fantasy:

The player watches a small control room and turns three signal lights on in the correct order to guide a traveler home.

Dominant action:

Click the correct signal control based on a short hint.

Tiny MVP:

- One screen.
- Three signal buttons.
- Three hints.
- One success state.
- One fail or retry state.

Why it fits:

- Very small UI footprint.
- Clear input and result.
- Can be validated without large assets.

Main risk:

Puzzle rules may need more explanation than expected.

Scope guard:

Only one puzzle sequence. No level list, score, timer, or upgrades.

## Direction 3: Memory Postcard

Type:

```text
interactive vignette / choice collection
```

Fantasy:

The player restores one postcard by choosing three remembered details: place, person, and feeling.

Dominant action:

Pick one option from small choice groups to complete a short memory.

Tiny MVP:

- One postcard.
- Three choice groups.
- One composed final message.
- One completion screen.

Why it fits:

- Strongly story-focused.
- Easy to prototype with labels and buttons.
- No need for combat, economy, or complex animation.

Main risk:

It may feel more like a form than a game if feedback is too thin.

Scope guard:

Use one visible completion change, such as the postcard text becoming complete.

## Recommendation

Recommended first MVP:

```text
Moonlight Delivery
```

Reason:

It gives the clearest first playable promise: the player starts a tiny story, makes one or two choices, completes a delivery, and sees an ending. It is small enough for a first Cocos/Codex implementation story while still feeling like a game moment rather than a settings screen.

## Not Selected For First MVP

`Signal Keeper` is viable, but it needs puzzle-rule clarity earlier.

`Memory Postcard` is charming, but it risks feeling too static unless presentation work expands.

## Next Required Command

```text
cocos-classify-game
```
