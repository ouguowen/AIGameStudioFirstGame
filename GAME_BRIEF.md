# Game Brief

Current command: `cocos-game-brief`

## 1. Working Title

Moonlight Delivery

## 2. Game Type

Primary type:

```text
story-clear / light-interaction
```

Current classification status:

```text
Needs formal classification in cocos-classify-game.
```

## 3. Core Fantasy

The player is a night courier completing one small but important delivery before the city goes quiet.

The fantasy is not about fighting, earning, collecting, or optimizing. It is about moving through one short story and making a simple choice that confirms the player is participating.

## 4. Target Player

- New or casual players who can understand a one-screen story interaction quickly.
- Developers using Cocos Creator 3.8.8 and Codex in small, reviewable steps.
- A first internal validation audience checking whether the workflow can produce a tiny complete playable.

## 5. Dominant Player Action

Read a short prompt and choose one simple route or dialogue option.

The action should be:

- visible
- low pressure
- easy to explain
- easy to validate in browser preview later

## 6. First-Version Promise

The first version promises one tiny complete scene:

```text
Start delivery -> choose route/dialogue -> complete delivery -> see ending.
```

The first version should prove that the project can support a complete story-clear loop in Cocos Creator 3.8.8 without building large systems.

## 7. MVP Scope

MVP target:

- One chapter only.
- One Cocos scene.
- One delivery objective.
- Three short story beats.
- Two player choices at most.
- One success ending.
- Simple UI labels and buttons.
- Placeholder visuals only.
- No persistence required.
- No scoring required.

MVP success condition:

The player reaches the delivery completion ending.

MVP fail condition:

No fail state is required for the first MVP. If a fail state is later needed, it must be approved in a separate design step.

Target session length:

```text
30 to 90 seconds
```

## 8. Explicit Non-Goals

- No combat system.
- No enemy system.
- No economy system.
- No shop.
- No inventory.
- No gacha.
- No Chapter 2.
- No upgrades.
- No stamina or energy.
- No monetization.
- No complex animation system.
- No branching story tree beyond the tiny approved first scene.
- No large content pipeline.
- No broad runtime architecture before `cocos-game-architecture`.
- No TypeScript or JavaScript gameplay implementation during this brief command.
- No scene, prefab, or meta modification during this brief command.

## 9. Current Assumptions

- Cocos Creator target version is 3.8.8.
- The active project path is `D:\CocosProjects\AIGameStudioFirstGame\AIGameStudioFirstGame`.
- Cocos Creator has opened the project.
- Browser preview has not been tested.
- The project is still in pre-production planning.
- Production readiness is not passed yet.
- The first playable should be deliberately tiny.
- Economy, combat, shop, inventory, gacha, and Chapter 2 remain out of scope.
- A later baseline browser preview marker will be required before gameplay implementation can be accepted.

## 10. Next Required Command

```text
cocos-classify-game
```

Purpose:

Confirm the game type and route the project to the correct architecture, data model, and MVP template before writing a first implementation story.
