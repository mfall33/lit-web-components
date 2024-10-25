var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
let Header = class Header extends LitElement {
    render() {
        return html `<header class="header">
            <h1 class="header-title">HEADER</h1>
        </header>`;
    }
};
Header.styles = css `
        .header {
            background: blue;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 10px;
            justify-content: center;
            align-items: center
        }

        .header-title {
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            width: 100%;
            text-align: center;
        }
    `;
Header = __decorate([
    customElement('my-header')
], Header);
export { Header };
