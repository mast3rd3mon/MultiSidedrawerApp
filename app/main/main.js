"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var MainComponent = (function () {
    function MainComponent() {
        this.drawerLocation = "Left";
        console.log("Test");
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    MainComponent.prototype.openDrawer = function (position) {
        var _this = this;
        this.drawerLocation = position;
        setTimeout(function () { return _this.drawer.showDrawer(); }, 5);
    };
    MainComponent.prototype.closeDrawer = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], MainComponent.prototype, "drawerComponent", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "main",
            templateUrl: "main.html"
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsa0VBQWdGO0FBUWhGO0lBS0k7UUFGQSxtQkFBYyxHQUFXLE1BQU0sQ0FBQztRQUc1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsa0NBQVUsR0FBVixVQUFXLFFBQVE7UUFBbkIsaUJBR0M7UUFGRyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQXhCLENBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFoQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQUR6RSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQzs7T0FDVyxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIm1haW4uaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICAgIGRyYXdlckxvY2F0aW9uOiBzdHJpbmcgPSBcIkxlZnRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RcIilcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB9XHJcbiAgICBvcGVuRHJhd2VyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJMb2NhdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpLCA1KTtcclxuICAgIH1cclxuICAgIGNsb3NlRHJhd2VyKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB9ICAgIFxyXG59Il19