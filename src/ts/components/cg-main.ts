import { css, html, LitElement } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import type { MainContent } from "./cgm-content";

@customElement("cg-main")
export class Main extends LitElement {
    static styles = css`
        :host {
            width: 800px;
            height: 100%;

            display: flex;
            flex-direction: column;
        }

        header {
            text-align: center;
        }

        header nav {
            display: grid;
            grid-template-columns: 1fr var(--border-width) 2fr var(--border-width) 1fr;

            border: var(--border);
            border-width: var(--border-width) 0;

            align-items: center;
        }

        header div {
            padding: var(--padding);
        }
    `;

    @queryAssignedElements({ selector: 'cgm-content' })
    contents!: Array<MainContent>

    @state()
    currentPageIndex: number = 0;

    @state()
    currentPageName: string = "";

    render() {
        return html`
            <header>
                <div id="title">${document.title}</div>

                <nav>
                    <cg-button name="nav-prev" @click=${() => this.setPage(-1)}>&lt;</cg-button>
                    <cg-seperator vertical></cg-seperator>
                    <span id="nav-indicator">${this.currentPageName}</span>
                    <cg-seperator vertical></cg-seperator>
                    <cg-button name="nav-next" @click=${() => this.setPage(+1)}>&gt;</cg-button>
                </nav>
            </header>

            <slot @slotchange=${() => this.setPage(0)}></slot>
        `;
    }

    setPage(index: number) {
        this.contents[this.currentPageIndex].style.display = "none";

        this.currentPageIndex += index;

        if (this.currentPageIndex > this.contents.length - 1) {
            this.currentPageIndex = 0;
        } else if (this.currentPageIndex < 0) {
            this.currentPageIndex = this.contents.length - 1;
        }

        this.currentPageName = this.contents[this.currentPageIndex].name;

        this.contents[this.currentPageIndex].style.display = "flex";
    }
}