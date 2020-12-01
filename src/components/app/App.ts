import { Component } from "../../engine/Component";
import { AppRouter } from "../../utils/AppRouter";

export class App extends Component {

  constructor() {
    super('app', () => AppRouter.getInstance().init());
  }
}
