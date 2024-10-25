import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('my-header')
export class Header extends LitElement {

    static styles = css`
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

    render() {
        return html`<header class="header">
            <h1 class="header-title">HEADER</h1>
        </header>`;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'my-header': Header
    }
}