import { Routes } from "@angular/router";

import { MainComponent } from "./main/main";
import { LeftDrawerComponent } from "./drawers/left/left";
import { RightDrawerComponent } from "./drawers/right/right";
import { TopDrawerComponent } from "./drawers/top/top";
import { BottomDrawerComponent } from "./drawers/bottom/bottom";

export const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent }
];

export const navigatableComponents = [
    MainComponent,
    LeftDrawerComponent,
    RightDrawerComponent,
    TopDrawerComponent,
    BottomDrawerComponent
];