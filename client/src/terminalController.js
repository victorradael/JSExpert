import ComponentsBuilder from "./components.js";

export default class TerminalController {
  constructor() {}

  #onInputReceived(eventEmitter) {
    return function () {
      const message = this.getValue();
      console.log(message);
      this.clearValue();
    };
  }

  async initializeTable(eventEmitter) {
    const components = new ComponentsBuilder()
      .setScreen({
        title: "Hacker Chat - Victor Radael",
      })
      .setLayoutComponent()
      .setInputComponent(this.#onInputReceived(eventEmitter))
      .setChatComponent()
      .build();

    components.input.focus();
    components.screen.render();
  }
}

//PAREI NOS 38 Minutos - Aula 1
