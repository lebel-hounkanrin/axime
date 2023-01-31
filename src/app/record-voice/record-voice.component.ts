import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-voice',
  templateUrl: './record-voice.component.html',
  styleUrls: ['./record-voice.component.css']
})
export class RecordVoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();
        this.mediaRecorder.ondataavailable = (e) => {this.chunks.push(e)}
      }).catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
      })
    }
    else{
      console.log("getUserMedia not supported on your browser!");
    }
  }
  stopRecording(){
    this.mediaRecorder.stop();
    const blob = new Blob(this.chunks, {type: "audio/webm;codecs=opus"});
    this.chunks = [];
    //const audioURL = window.URL.createObjectURL(blob);
    this.isRecording = false;
    //const audio = new Audio(audioURL)
    this.endOfRecording.emit(blob)
  }
  
}
