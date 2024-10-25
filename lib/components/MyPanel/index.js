var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { createComponent } from "@lit-labs/react";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import React from "react";
let MyPanel = class MyPanel extends LitElement {
    render() {
        return html `
      <div>
        My Panel
      </div>
    `;
    }
};
MyPanel = __decorate([
    customElement("my-panel")
], MyPanel);
export { MyPanel };
// Fix the createComponent method
export const MyPanelReact = createComponent({
    react: React,
    tagName: 'my-panel',
    elementClass: MyPanel,
    events: {
        // Map Lit custom events to React events if needed
        'custom-event': 'onCustomEvent'
    },
});
