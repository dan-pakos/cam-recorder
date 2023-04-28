import { getBestFrontCamera } from "./utils/media-devices";

async function app() {
  // 1. check compability
  // 2. get stream from preferable camera
  // 3. record defined sequence (init => stop + clear)
  // 4. display output

  // tests
  let constraints = {
    audio: false,
    video: { width: 1280, height: 720, frameRate: 30 },
  };
  stream = await window.navigator.mediaDevices.getUserMedia(constraints);
  let video = document.getElementById("src");
  video.srcObject = stream;
}

document.body.onload = app;
