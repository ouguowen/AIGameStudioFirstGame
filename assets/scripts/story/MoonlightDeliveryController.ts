import { _decorator, Button, Component, Label, Node } from 'cc';

const { ccclass, property } = _decorator;

type StoryState = 'intro' | 'complete';
type RouteChoice = 'quiet_alley' | 'main_street' | '';

@ccclass('MoonlightDeliveryController')
export class MoonlightDeliveryController extends Component {
    @property(Label)
    public titleLabel: Label | null = null;

    @property(Label)
    public storyTextLabel: Label | null = null;

    @property(Label)
    public objectiveLabel: Label | null = null;

    @property(Button)
    public choiceButtonA: Button | null = null;

    @property(Button)
    public choiceButtonB: Button | null = null;

    @property(Label)
    public endingText: Label | null = null;

    private currentState: StoryState = 'intro';
    private selectedChoice: RouteChoice = '';
    private completionState = false;
    private endingVisible = false;

    protected start(): void {
        this.showIntro();
    }

    public onTakeQuietAlley(): void {
        this.completeDelivery('quiet_alley');
    }

    public onTakeMainStreet(): void {
        this.completeDelivery('main_street');
    }

    private showIntro(): void {
        this.currentState = 'intro';
        this.selectedChoice = '';
        this.completionState = false;
        this.endingVisible = false;
        this.refreshView();
    }

    private completeDelivery(choice: RouteChoice): void {
        this.currentState = 'complete';
        this.selectedChoice = choice;
        this.completionState = true;
        this.endingVisible = true;
        this.refreshView();
    }

    private refreshView(): void {
        if (this.titleLabel) {
            this.titleLabel.string = 'Moonlight Delivery';
        }

        if (this.storyTextLabel) {
            this.storyTextLabel.string = 'A quiet delivery waits under the moonlight. Choose your route and finish the delivery before the night ends.';
        }

        if (this.objectiveLabel) {
            this.objectiveLabel.string = 'Deliver the package before the night ends.';
        }

        if (this.choiceButtonA) {
            this.choiceButtonA.node.active = this.currentState === 'intro';
        }

        if (this.choiceButtonB) {
            this.choiceButtonB.node.active = this.currentState === 'intro';
        }

        if (this.endingText) {
            this.endingText.node.active = this.endingVisible;
            this.endingText.string = this.completionState
                ? 'Delivery completed before the night ends.'
                : '';
        }
    }
}
