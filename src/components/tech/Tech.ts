import { Component } from "../../engine/Component";
import { Router } from "../../engine/Router";

export class Tech extends Component {

  constructor(router: Router) {
    super('tech', undefined, router);
  }
}
