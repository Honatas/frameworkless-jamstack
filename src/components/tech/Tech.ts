import { Component } from "src/engine/Component";
import { Router } from "src/engine/Router";

export class Tech extends Component {

  constructor(router: Router) {
    super('tech', undefined, router);
  }
}
