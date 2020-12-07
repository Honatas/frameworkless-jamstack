import { Component } from "../../engine/Component";
import { AppRouter } from "../../utils/AppRouter";

export class Home extends Component {
  
  constructor() {
    super('home', () => {
      document.getElementById('bt-link-crud')?.addEventListener('click', () => AppRouter.getInstance().routeTo('/crud'));
      document.getElementById('bt-link-tech')?.addEventListener('click', () => AppRouter.getInstance().routeTo('/tech'));
    });
  }
}
