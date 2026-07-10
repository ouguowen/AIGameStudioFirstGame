import { _decorator, Component, instantiate, JsonAsset, Node, Prefab, resources, Vec3 } from 'cc';

console.log('[CityBattleSpawnProofRuntime] module loaded');

const { ccclass, property } = _decorator;

type GeneratedLevelConfig = {
    tables?: {
        level?: unknown[];
        wave?: unknown[];
        spawn?: unknown[];
        levelObjective?: unknown[];
    };
};

type MovementProofEnemy = {
    node: Node;
    targetWorldPosition: Vec3;
    completed: boolean;
};

@ccclass('CityBattleSpawnProofRuntime')
export class CityBattleSpawnProofRuntime extends Component {
    @property(Node)
    public enemyRoot: Node | null = null;

    @property(Node)
    public spawnPoints: Node | null = null;

    @property(Node)
    public basePoint: Node | null = null;

    @property(Prefab)
    public enemyPrefab: Prefab | null = null;

    @property
    public levelConfigPath = 'config/attack-defense-city/level-config';

    @property
    public spawnOnlyProof = true;

    private readonly movementProofSpeed = 180;
    private readonly movementProofThreshold = 4;
    private movementProofEnemies: MovementProofEnemy[] = [];
    private movementProofRunning = false;
    private baseReachedCount = 0;
    private reachedBaseEnemies: string[] = [];

    protected onLoad(): void {
        console.log('[CityBattleSpawnProofRuntime] onLoad');
    }

    protected onEnable(): void {
        console.log('[CityBattleSpawnProofRuntime] onEnable');
    }

    protected start(): void {
        console.log('[CityBattleSpawnProofRuntime] start');
        this.validateBindings();
        this.loadLevelConfigAndSpawn();
    }

    protected update(deltaTime: number): void {
        if (!this.movementProofRunning) {
            return;
        }

        let completedCount = 0;

        for (const proofEnemy of this.movementProofEnemies) {
            if (proofEnemy.completed) {
                completedCount += 1;
                continue;
            }

            const node = proofEnemy.node;
            const currentWorldPosition = node.worldPosition;
            const targetWorldPosition = proofEnemy.targetWorldPosition;
            const remainingX = targetWorldPosition.x - currentWorldPosition.x;
            const remainingY = targetWorldPosition.y - currentWorldPosition.y;
            const distance = Math.sqrt(remainingX * remainingX + remainingY * remainingY);

            if (distance <= this.movementProofThreshold) {
                node.setWorldPosition(targetWorldPosition);
                proofEnemy.completed = true;
                completedCount += 1;
                console.log(`[CityBattleSpawnProofRuntime] Movement proof reached target threshold: ${node.name}, distance=${distance.toFixed(2)}`);
                this.recordObjectiveProofState(node.name);
                continue;
            }

            const step = Math.min(this.movementProofSpeed * deltaTime, distance);
            const nextWorldPosition = new Vec3(
                currentWorldPosition.x + (remainingX / distance) * step,
                currentWorldPosition.y + (remainingY / distance) * step,
                currentWorldPosition.z,
            );
            node.setWorldPosition(nextWorldPosition);
        }

        if (completedCount === this.movementProofEnemies.length) {
            this.movementProofRunning = false;
            console.log(`[CityBattleSpawnProofRuntime] Movement proof complete: movedEnemies=${completedCount}`);
            console.log(`[CityBattleSpawnProofRuntime] Objective proof final count: ${this.baseReachedCount}`);
            console.log('[CityBattleSpawnProofRuntime] Objective-state-only proof complete. Combat, health/damage, win/loss, economy, inventory, and save/load are intentionally not implemented here.');
        }
    }

    private validateBindings(): void {
        console.log('[CityBattleSpawnProofRuntime] binding check');
        console.log('enemyRoot:', this.enemyRoot ? this.enemyRoot.name : 'MISSING');
        console.log('spawnPoints:', this.spawnPoints ? this.spawnPoints.name : 'MISSING');
        console.log('basePoint:', this.basePoint ? this.basePoint.name : 'MISSING');
        console.log('enemyPrefab:', this.enemyPrefab ? this.enemyPrefab.name : 'MISSING');
        console.log('levelConfigPath:', this.levelConfigPath);

        if (!this.enemyRoot || !this.spawnPoints || !this.basePoint || !this.enemyPrefab) {
            console.warn('[CityBattleSpawnProofRuntime] Scene bindings are incomplete. Spawn proof cannot PASS until all required bindings exist.');
        }
    }

    private loadLevelConfigAndSpawn(): void {
        resources.load(this.levelConfigPath, JsonAsset, (error, asset) => {
            if (error) {
                console.error('[CityBattleSpawnProofRuntime] Failed to load level config:', error);
                return;
            }

            const config = asset.json as GeneratedLevelConfig;
            console.log('[CityBattleSpawnProofRuntime] Level config loaded:', config);

            const tables = config?.tables ?? {};
            const levelCount = Array.isArray(tables.level) ? tables.level.length : 0;
            const waveCount = Array.isArray(tables.wave) ? tables.wave.length : 0;
            const spawnTable = Array.isArray(tables.spawn) ? tables.spawn : [];
            const objectiveCount = Array.isArray(tables.levelObjective) ? tables.levelObjective.length : 0;

            console.log(`[CityBattleSpawnProofRuntime] Config summary: levels=${levelCount}, waves=${waveCount}, spawns=${spawnTable.length}, objectives=${objectiveCount}`);
            console.log(`[CityBattleSpawnProofRuntime] Spawn table count: ${spawnTable.length}`);

            this.spawnEnemies(spawnTable.length);
        });
    }

    private spawnEnemies(spawnCount: number): void {
        if (!this.enemyRoot) {
            console.error('[CityBattleSpawnProofRuntime] Cannot spawn: enemyRoot is missing.');
            return;
        }

        if (!this.enemyPrefab) {
            console.error('[CityBattleSpawnProofRuntime] Cannot spawn: enemyPrefab is missing.');
            return;
        }

        if (spawnCount <= 0) {
            console.warn('[CityBattleSpawnProofRuntime] Spawn proof produced no enemies because spawn table is empty.');
            console.log('[CityBattleSpawnProofRuntime] Spawned enemy count: 0');
            return;
        }

        this.enemyRoot.removeAllChildren();

        for (let index = 0; index < spawnCount; index += 1) {
            const enemy = instantiate(this.enemyPrefab);
            const displayIndex = String(index + 1).padStart(3, '0');
            enemy.name = `SpawnedEnemy_${displayIndex}`;

            const x = -120 + index * 60;
            enemy.setPosition(new Vec3(x, 0, 0));
            enemy.active = true;
            enemy.parent = this.enemyRoot;

            console.log(`[CityBattleSpawnProofRuntime] Spawned ${enemy.name} at x=${x}, y=0`);
        }

        console.log(`[CityBattleSpawnProofRuntime] Spawned enemy count: ${this.enemyRoot.children.length}`);

        if (this.spawnOnlyProof) {
            console.log('[CityBattleSpawnProofRuntime] Spawn proof complete. Starting movement-only proof; combat, objective state, and result path are intentionally not implemented here.');
        }

        this.startMovementProof();
    }

    private startMovementProof(): void {
        this.movementProofEnemies = [];
        this.movementProofRunning = false;
        this.baseReachedCount = 0;
        this.reachedBaseEnemies = [];

        if (!this.enemyRoot) {
            console.error('[CityBattleSpawnProofRuntime] Cannot start movement proof: enemyRoot is missing.');
            return;
        }

        if (!this.basePoint) {
            console.error('[CityBattleSpawnProofRuntime] Cannot start movement proof: basePoint is missing.');
            return;
        }

        const proofTargetWorldPosition = this.basePoint.worldPosition;
        const targetWorldPosition = new Vec3(proofTargetWorldPosition.x, proofTargetWorldPosition.y, proofTargetWorldPosition.z);
        const proofEnemies = this.enemyRoot.children.filter((enemy) => enemy.name === 'SpawnedEnemy_001' || enemy.name === 'SpawnedEnemy_002');

        if (proofEnemies.length === 0) {
            console.warn('[CityBattleSpawnProofRuntime] Movement proof has no spawned enemies to move.');
            return;
        }

        for (const enemy of proofEnemies) {
            this.movementProofEnemies.push({
                node: enemy,
                targetWorldPosition: new Vec3(targetWorldPosition.x, targetWorldPosition.y, targetWorldPosition.z),
                completed: false,
            });

            const currentWorldPosition = enemy.worldPosition;
            console.log(`[CityBattleSpawnProofRuntime] Movement proof started: ${enemy.name}, from=(${currentWorldPosition.x.toFixed(2)}, ${currentWorldPosition.y.toFixed(2)}), target=BasePoint(${targetWorldPosition.x.toFixed(2)}, ${targetWorldPosition.y.toFixed(2)})`);
        }

        this.movementProofRunning = true;
    }

    private recordObjectiveProofState(enemyName: string): void {
        if (this.reachedBaseEnemies.includes(enemyName)) {
            return;
        }

        this.reachedBaseEnemies.push(enemyName);
        this.baseReachedCount = this.reachedBaseEnemies.length;

        console.log(`[CityBattleSpawnProofRuntime] Objective proof state updated: enemy=${enemyName}, baseReachedCount=${this.baseReachedCount}, reachedBaseEnemies=${this.reachedBaseEnemies.join(',')}`);
    }
}
