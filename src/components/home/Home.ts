import { Component } from "../../engine/Component";
import { AppRouter } from "../../utils/AppRouter";

export class Home extends Component {
  
  constructor() {
    super('home', () => {
      document.getElementById('btRoute')?.addEventListener('click', () => Home.onClickBtRoute());
    });
  }

  public static onClickBtRoute(): void {
    AppRouter.getInstance().routeTo('/routed');
  }
}