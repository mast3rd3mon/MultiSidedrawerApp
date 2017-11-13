import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";

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
        console.log("Test")
    }
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    openDrawer(position) {
        this.drawerLocation = position;
        setTimeout(() => this.drawer.showDrawer(), 5);
    }
    closeDrawer() {
        this.drawer.closeDrawer();
    }    
}