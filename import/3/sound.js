// sound.js

// import { init } from "/import/4/init/now.js";
import btnFile from "/assets/sound/tapeClick_1.wav";
 
const SD_1 = new Audio(btnFile);
 
//  SD_4.loop = true; 
//  SD_15.loop = true;
SD_1.pause();
 
//  const instruct_videos = [
//      document.querySelector("#instruct_video_0"),
//      document.querySelector("#instruct_video_1"),
//      document.querySelector("#instruct_video_2"),
//      document.querySelector("#instruct_video_3"),
//      document.querySelector("#disk2_video")
//  ];
 
//  const sound_array = [
//      ...instruct_videos, 
//      SD_1, SD_2, SD_3, SD_4, SD_5, SD_6,  SD_7, SD_8, SD_9, SD_10, 
//      SD_11, SD_12, SD_13, SD_14, SD_15, SD_16, SD_17, SD_18, SD_19,
//  ]
//  const render_sound = () => {
//      sound_array.forEach(sound => {
//          sound.volume = init.volume/5;
//      });
//  }
 
 export {
     SD_1
  }