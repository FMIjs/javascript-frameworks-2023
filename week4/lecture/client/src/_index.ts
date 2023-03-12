// import { LitElement, html, css } from 'lit';
// import { customElement, property, query } from 'lit/decorators.js';

// @customElement('my-element')
// export class MyElement extends LitElement {
//   static styles = css`
//     span {
//       color: green;
//     }
//   `;

//   @property() mood = 'great';
//   @query('#my-input') myInput: HTMLInputElement;

//   saveButtonClickHandler = () => {
//     const { value } = this.myInput;
//     this.mood = value;
//     this.myInput.value = '';
//   }

//   render() {
//     return html`
//       Web Components are <span>${this.mood}</span>!
//       <input id="my-input" type="text" />
//       <button @click=${this.saveButtonClickHandler}>Save</button>
//     `;
//   }
// }