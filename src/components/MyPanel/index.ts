import { createComponent } from "@lit-labs/react";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import React from "react";

@customElement("my-panel")
export class MyPanel extends LitElement {

  render() {
    return html`
      <div>
        My Panel
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-panel': MyPanel;
  }
}

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
