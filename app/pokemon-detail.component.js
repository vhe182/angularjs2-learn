"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_1 = require('./pokemon');
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pokemon_1.Pokemon)
    ], PokemonDetailComponent.prototype, "pokemon", void 0);
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-pokemon-detail',
            template: "\n    <div *ngIf=\"pokemon\">\n      <h2>{{pokemon.name}} details!</h2>\n      <div><label>id: </label>{{pokemon.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"pokemon.name\" placeholder=\"name\">\n        <label>type: </label>\n        <input [(ngModel)]=\"pokemon.type\" placeholder=\"type\">\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=pokemon-detail.component.js.map