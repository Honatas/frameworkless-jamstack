import { Component } from "../../engine/Component";
import { Router } from "../../engine/Router";

export class Home extends Component {

  constructor(router: Router) {
    super('home', () => {
      document.getElementById('bt-link-crud')?.addEventListener('click', () => void router.routeTo('/crud'));
      document.getElementById('bt-link-tech')?.addEventListener('click', () => void router.routeTo('/tech'));
    }, router);
  }
}
