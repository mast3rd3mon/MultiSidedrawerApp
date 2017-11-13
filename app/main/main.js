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
    MainComponent.prototype.onSwipe = function (args) {
        if (args.direction == 1) {
            this.openDrawer("Left");
        }
        else if (args.direction == 2) {
            this.openDrawer("Right");
        }
        else if (args.direction == 4) {
            this.openDrawer("Bottom");
        }
        else if (args.direction == 8) {
            this.openDrawer("Top");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsa0VBQWdGO0FBU2hGO0lBS0k7UUFGQSxtQkFBYyxHQUFXLE1BQU0sQ0FBQztRQUc1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0NBQVUsR0FBVixVQUFXLFFBQVE7UUFBbkIsaUJBR0M7UUFGRyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQXhCLENBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUEzQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQUR6RSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQzs7T0FDVyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIm1haW4uaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICAgIGRyYXdlckxvY2F0aW9uOiBzdHJpbmcgPSBcIkxlZnRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RcIilcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB9XHJcbiAgICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRyYXdlcihcIkxlZnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRyYXdlcihcIlJpZ2h0XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5EcmF3ZXIoXCJCb3R0b21cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRyYXdlcihcIlRvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuRHJhd2VyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJMb2NhdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpLCA1KTtcclxuICAgIH1cclxuICAgIGNsb3NlRHJhd2VyKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB9ICAgIFxyXG59Il19