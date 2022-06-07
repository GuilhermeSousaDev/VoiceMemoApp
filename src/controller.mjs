export default class Controller {
    constructor({ view }) {
        this.view = view;
    }

    static initialize(dependecies) {
        const instance = new Controller(dependecies)

        return instance._init()
    }

    _init() {
        this.view.configureStartRecordButton(this.onStartRecording.bind(this))
    }

    async onStartRecording() {
        console.log("Iniciou a gravação")
    }
}