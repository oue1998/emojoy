<template>
  <div id="Video">
            <video
    id="webcam"
      ref="videoEl"
      autoplay="true"
      playsinline
      @loadedmetadata="runModel"
    />
    <canvas ref="canvasEl" />
     <div class="menu">
        <router-link to="/">
         <i class="material-icons nav__icon">home</i>
        </router-link>
      </div>
    <div class="button">
      <router-link to="/Mood">Mood</router-link>
    </div>
        <li class="board">
      <ul
        v-for="(item,key) in board"
        :key="key"
      >
        {{ key }} ： {{ item }}
      </ul>
    </li>
    <div class="animate">
      <video :src="chosenemoji.emoji" autoplay loop></video>
    </div>
  </div>
</template>

<script>
import * as faceAPI from 'face-api.js'
import { onMounted, reactive, ref } from 'vue'
export default {
  name: 'Video',
  data() {
    return {
      
    };
  },
  setup () {
    const initParams = reactive({
      modelUri: './models',
      option: new faceAPI.SsdMobilenetv1Options({ minConfidence: 0.5 })
    })
    const constraints = reactive({
      video: {
        width: {
          min: 320,
          ideal: 1280,
          max: 1920
        },
        height: {
          min: 240,
          ideal: 720,
          max: 1080
        },
        frameRate: {
          min: 15,
          ideal: 30,
          max: 60
        },
        facingMode: 'environment'
      }
    })
    const videoEl = ref(null)
    const canvasEl = ref(null)
    const board = reactive({
      mood: ''
    })
    const feel = reactive({
      happy: [require('@/assets/happy1.mp4'), require('@/assets/happy2.mp4'), require('@/assets/happy3.mp4')],
      surprised: [require('@/assets/wow1.mp4'), require('@/assets/wow2.mp4'), require('@/assets/wow3.mp4')],
      angry: [require('@/assets/angry.mp4'), require('@/assets/angry2.mp4'), require('@/assets/angry3.mp4')],
      neutral: [require('@/assets/neutral.mp4'), require('@/assets/neutral2.mp4')]
    })
    let chosenemoji = reactive({
      emoji: ''
    })
    /**
     * caculate fps for detection
     * @function
     * @param number
     */
    // const updateTimeStats = (timeInMs) => {
    //   forwardTimes = [timeInMs].concat(forwardTimes).slice(0, 30)
    //   // const avgTimeInMs = forwardTimes.reduce((total, t) => total + t) / forwardTimes.length
    //   // board.fps = faceAPI.utils.round(1000 / avgTimeInMs)
    // }

    /**
       * @function
       * @description detect input video
       */
    const runModel = async () => {
      // const beforeDetect = Date.now()
      const result = await faceAPI.detectAllFaces(videoEl.value, initParams.option).withFaceExpressions()
      // updateTimeStats(Date.now() - beforeDetect)
      if (result) {
        // const dims = faceAPI.matchDimensions(canvasEl.value, videoEl.value, true)
        // const resizeResults = faceAPI.resizeResults(result, dims)
        board.mood = prediction_string(result[0])
        chosenemoji.emoji = picker(board.mood)
        // faceAPI.draw.drawDetections(canvasEl.value, resizeResults)
        // faceAPI.draw.drawFaceExpressions(canvasEl.value, resizeResults)
      }
      setTimeout(() => runModel(),3000)
    }

const picker = (value) => {
  var data, chosenNumber
    if (value === 'neutral' || value === ''){
    data = feel.neutral
    chosenNumber = Math.floor(Math.random() * data.length);
    chosenemoji.emoji = data[chosenNumber]; 
      } 
    if (value === 'happy' || value === 'disgusted'){
    data = feel.happy
    chosenNumber = Math.floor(Math.random() * data.length);
    chosenemoji.emoji = data[chosenNumber]; 
      }
    if (value === 'surprised' || value === 'fearful'){
    data = feel.surprised
    chosenNumber = Math.floor(Math.random() * data.length);
    chosenemoji.emoji = data[chosenNumber]; 
      }
    if (value === 'angry' || value === 'sad'){
    data = feel.angry
    chosenNumber = Math.floor(Math.random() * data.length);
    chosenemoji.emoji = data[chosenNumber]; 
      }
    
    return  chosenemoji.emoji;
  
  }

   const prediction_string = (obj) => {
  let top_prediction = 'neutral';
  let maxVal = 0;
  var str = top_prediction;
  
 
  if (!obj) return str;
 
  obj = obj.expressions;
  for (var p in obj) {
    
      if (obj[p] > maxVal) {
        maxVal = obj[p];
        top_prediction = p;
        if (p === 'happy' || p === 'disgusted'){
        top_prediction="happy"
        }
        if (p === 'surprised' || p === 'fearful'){
        top_prediction="surprised"
        }
        if (p === 'angry' || p === 'sad'){
        top_prediction="angry"
        }
      }
  }
 
  return  top_prediction;
}


    onMounted(() => {
      /**
       * @function
       * @description load the trained model
       */
      const initModel = async () => {
        await faceAPI.nets.ssdMobilenetv1.loadFromUri(initParams.modelUri)
        await faceAPI.nets.faceExpressionNet.loadFromUri(initParams.modelUri)
      }

      /**
       * startup webcam
       * @function
       */
      const startStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints)
          videoEl.value.srcObject = stream
        } catch (error) {
          console.error(error.message)
        }
      }

      initModel()
      startStream()
    })

    return {
      videoEl,
      canvasEl,
      runModel,
      board,
      chosenemoji
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#Video{
  background-color: #fdc002;
  position: relative;
}
video{
  width: 100%;
}
#webcam {
  /* display: none; */
    position: absolute;
    object-fit: cover;
    top: 10vh;
    left: 1%;
    width: 150px;
    height: 150px;
  }
.animate{
background-color: #fdc002;
}
.board{
    font-size: 20px;
    list-style: none;
    z-index: 1;
    text-align: left;
    height: 50px;
    position: absolute;
    top: 20px;
    left: 1%;
  }

.button{
  z-index: 2;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px white solid;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px;
}
.button a{
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
}

.menu{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  position: absolute;
  top: 1vh;
  right: 3%;
  z-index: 2;
}
.menu .nav__icon{
  color: #fff;
  font-size: 50px;
}

canvas {
        position: absolute;
      }
</style>
