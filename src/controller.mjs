export default class Controller {
    constructor({ view, media, recorder }) {
        this.view = view;
        this.media = media;
        this.recorder = recorder;
    }

    static initialize(dependecies) {
        const instance = new Controller(dependecies)

        return instance._init()
    }

    _init() {
        this.view.configureStartRecordButton(this.onStartRecording.bind(this))
    }

    async onStartRecording() {
        const audioStream = await this.media.getAudio();
        this.recorder.startRecording(audioStream);
    }
}