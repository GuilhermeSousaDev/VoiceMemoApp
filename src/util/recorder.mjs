export default class Recorder {
    constructor() {
        this.audioType = 'audio/webm;codecs=opus'
        this.mediaRecorder = {}
        this.recorderBlobs = {}
    }

    _setup() {
        const options = { mimeType: this.audioType }

        const isSupported = MediaRecorder.isTypeSupported(options.mimeType)

        if (!isSupported) {
            const msg = `the codec: ${options.mimeType} ins't supported!!`
            alert(msg)

            throw new Error(msg)
        }

        return options;
    }

    startRecording(stream) {
        const options = this._setup()
        this.mediaRecorder = new MediaRecorder(stream, options)

        this.mediaRecorder.onstop = (event) => {
            console.log('Recorder Blobs', this.recorderBlobs)
        }

        this.mediaRecorder.ondataavaible = (event) => {
            if (!event.data || !event.data.size) return;

            this.recorderBlobs.push(event.data)
        }

        this.mediaRecorder.start()
        console.log('Media Recorder Started', this.mediaRecorder)
    }

    async stopRecording() {
        if (this.mediaRecorder.state === 'inactive') return;

        this.mediaRecorder.stop()
        console.log('media recorded stopped')
    }
}