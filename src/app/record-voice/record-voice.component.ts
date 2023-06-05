import { Component, EventEmitter, OnInit } from '@angular/core';
declare var MediaRecorder: any;
@Component({
  selector: 'app-record-voice',
  templateUrl: './record-voice.component.html',
  styleUrls: ['./record-voice.component.css']
})
export class RecordVoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  audioContext =  new (AudioContext)({sampleRate: 16000});
  endOfRecording: EventEmitter<any> = new EventEmitter();
  isRecording = false
  chunks: any[] = [];
  mediaRecorder! :MediaRecorder;
  startRecording(){
    this.isRecording =  true
    if(navigator.mediaDevices){
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(stream => {
        this.mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'audio/webm',
        });
        this.mediaRecorder.start();
      }).catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
      })
    }
    else{
      console.log("getUserMedia not supported on your browser!");
    }
  }
  async stopRecording(){
    this.mediaRecorder.ondataavailable = (e) => {
      this.endOfRecording.emit(e.data)
    }
    this.mediaRecorder.stop();
    this.isRecording = false;
    this.chunks = [];
   // 
  }
  
}
