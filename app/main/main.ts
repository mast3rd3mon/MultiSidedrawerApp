import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    moduleId: module.id,
    selector: "main",
    templateUrl: "main.html"
})
export class MainComponent implements AfterViewInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    drawerLocation: string = "Left";

    constructor() {
    }
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    onSwipe(args: SwipeGestureEventData) {
        if (args.direction == 1) {
            this.openDrawer("Left");
        } else if (args.direction == 2) {
            this.openDrawer("Right");
        } else if (args.direction == 4) {
            this.openDrawer("Bottom");
        } else if (args.direction == 8) {
            this.openDrawer("Top");
        }
    }
    openDrawer(position) {
        this.drawerLocation = position;
        setTimeout(() => this.drawer.showDrawer(), 5);
    }
    closeDrawer() {
        this.drawer.closeDrawer();
    }    
}