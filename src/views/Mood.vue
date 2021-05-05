<template>
  <div id="Mood">
            <video
    
    id="webcam"
      ref="videoEl"
      autoplay="true"
      playsinline
      @loadedmetadata="runModel"
    />
        <!-- <li class="board">
      <ul
        v-for="(item,key) in board"
        :key="key"
      >
        {{ key }} ： {{ item }}
      </ul>
    </li> -->
      <canvas ref="canvasEl" :width="450" :height="337.5"/>
      <div class="title" v-show="!start && !content">
        <h1>ตอนนี้คุณรู้สึกอย่างไร</h1>
        <h3>แสดงความรู้สึกของคุณออกมา แล้วกดที่กล้อง</h3>
        <h3>เพื่อให้เราตรวจจับอารมณ์ และแนะนำสิ่งที่น่าสนใจให้คุณ</h3>
        <button @click="Startemoji">START</button>
      </div>
    <div class="animate" v-if="start && !content">
      <div class="camera-shoot">
        <button type="button" class="button" @click="takePhoto">
          <img
            src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
          />
        </button>
      </div>
      <video src="../assets/neutral.mp4" autoplay loop v-if="board.mood == 'neutral' || board.mood == ''"></video>
      <video src="../assets/happy1.mp4" autoplay loop v-if="board.mood == 'happy' || board.mood == 'disgusted'"></video>
      <video src="../assets/wow1.mp4" autoplay loop v-if="board.mood == 'surprised' || board.mood == 'fearful'"></video>
      <video src="../assets/angry.mp4" autoplay loop v-if="board.mood == 'angry' || board.mood == 'sad'"></video>
    </div>
    <div class="content" v-show="content">
      <button @click="Startemoji">X</button>
      <Happycontent v-if="board.mood == 'happy' || board.mood == 'disgusted'"/>
      <Sadcontent v-if="board.mood == 'angry' || board.mood == 'sad'"/>
      <Wowcontent v-if="board.mood == 'surprised' || board.mood == 'fearful'"/>
    </div>
  </div>
</template>

<script>
import * as faceAPI from 'face-api.js'
import { onMounted, reactive, ref } from 'vue'
import Happycontent from "../components/Happycontent.vue"
import Sadcontent from "../components/Sadcontent.vue"
import Wowcontent from "../components/Wowcontent.vue"
export default {
  name: 'Mood',
  components: {
    Happycontent,
    Sadcontent,
    Wowcontent
  },
  data() {
    return {
      start: false,
      content: false,
    };
  },
  setup () {
    const initParams = reactive({
      modelUri: '/models',
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
    // var photo = reactive({
    //   isPhotoTaken: false,
    //   isShotPhoto: false
    // })
    /**
     * caculate fps for detection
     * @function
     * @param number
     */

    /**
       * @function
       * @description detect input video
       */
    const runModel = async () => {
      const cap = await faceAPI.detectAllFaces(canvasEl.value, initParams.option).withFaceExpressions()
      if (cap) {
        board.mood = prediction_string(cap[0])
      }
      setTimeout(() => runModel(),100)
    }

   const prediction_string = (obj) => {
  let top_prediction = '';
  let maxVal = 0;
  var str = top_prediction;
 
  if (!obj) return str;
 
  obj = obj.expressions;
  for (var p in obj) {
    
      if (obj[p] > maxVal) {
        maxVal = obj[p];
        top_prediction = p;
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
        await faceAPI.nets.ageGenderNet.loadFromUri(initParams.modelUri)
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
      board
    }
  },
  methods:{
    takePhoto() {
      const context = this.$refs.canvasEl.getContext('2d');
      context.drawImage(this.$refs.videoEl, 0, 0, 450, 337.5);
      setTimeout(() => this.Showcontent(),4000)
    },

    Startemoji() {
      this.start = !this.start
      if(this.content){
        this.content = !this.content
      }
    },

    Showcontent() {
      this.content = !this.content
      this.start = !this.start
    }

  }
}
</script>

<style scoped>
#Mood{
  background-color: #ffcc01;
  position: relative;
}
video{
  width: 100%;
}
canvas{
  display: none;
}

.animate{
  background-color: #ffcc01;
  height: 100vh;
}
.title{
  background-color: #ffcc01;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title h1{
  font-size: 50px;
}
.title h3{
  font-size: 30px;
  font-weight: 500;
}
.title button{
  border: 1px white solid;
  border-radius: 25px;
  background-color: #fff;
  padding: 20px;
  font-size: 20px;
  margin: 10px;
}

#webcam {
  display: none;
    /* position: absolute;
    object-fit: cover;
    top: 20vh;
    width: 30vh;
    height: 30vh; */
  }
.board{
    font-size: 20px;
    list-style: none;
    z-index: 20;
    text-align: left;
    height: 50px;
    position: absolute;
    top: 20px;
  }

  .button{
  z-index: 2;
  position: absolute;
  top: 10px;
  right: 10px;
}

.content button{
  z-index: 2;
  position: absolute;
  top: 50px;
  right: 80px;
  border: 1px white solid;
  border-radius: 25px;
  background-color: #fff;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
}
</style>
