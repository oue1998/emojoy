<template>
  <div id="Mood">
          <div class="title" v-show="!start && !content">
        <h1>ตอนนี้คุณรู้สึกอย่างไร</h1>
        <h3>แสดงความรู้สึกของคุณออกมา แล้วกดที่รูปกล้อง (ในหน้าถัดไป)</h3>
        <h3>เพื่อให้กล้องตรวจจับอารมณ์ของคุณ และนำเสนอสิ่งที่น่าสนใจ</h3>
        <h3>ถ้าพร้อมแล้วกดปุ่ม START เพื่อเข้าสู่หน้าอีโมจิกันได้เลย</h3>
        <button @click="Startemoji">START</button>
      </div>
            <video
            v-show="!content"
    id="webcam"
      ref="videoEl"
      autoplay="true"
      playsinline
      @loadedmetadata="runModel"
    />
        <li class="board" v-show="!content">
      <ul
        v-for="(item,key) in board"
        :key="key"
      >
        {{ key }} ： {{ item }}
      </ul>
    </li>
      <!-- <canvas ref="canvasEl" :width="450" :height="337.5"/> -->
      <canvas v-show="isPhotoTaken" ref="canvasEl" :width="450" :height="337.5"/>
    <div class="animate" v-if="start && !content">
      <div class="menu">
        <router-link to="/Video">
         <i class="material-icons nav__icon">arrow_back</i>
        </router-link>
        <router-link to="/">
         <i class="material-icons nav__icon">home</i>
        </router-link>
      </div>
              <button type="button" class="button" @click="takePhoto">
          <img
            src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
          />
        </button>
      <h2>กดที่รูปกล้องเพื่อให้เราตรวจจับอารมณ์จากสีหน้าของคุณ</h2>
      <video src="../assets/neutral.mp4" autoplay loop v-if="board.mood == 'neutral' || board.mood == ''"></video>
      <video src="../assets/happy1.mp4" autoplay loop v-if="board.mood == 'happy' || board.mood == 'disgusted'"></video>
      <video src="../assets/wow1.mp4" autoplay loop v-if="board.mood == 'surprised' || board.mood == 'fearful'"></video>
      <video src="../assets/angry.mp4" autoplay loop v-if="board.mood == 'angry' || board.mood == 'sad'"></video>
    </div>
    <div class="content" v-show="content">
      <button @click="Startemoji"><i class="material-icons nav__icon">clear</i></button>
      <Neutralcontent v-if="board.mood == 'neutral' || board.mood == ''"/>
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
import Neutralcontent from "../components/Neutralcontent.vue"
export default {
  name: 'Mood',
  components: {
    Happycontent,
    Sadcontent,
    Wowcontent,
    Neutralcontent
  },
  data() {
    return {
      start: false,
      content: false,
      isPhotoTaken: false
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
      board
    }
  },
  methods:{
    takePhoto() {
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvasEl.getContext('2d');
      context.drawImage(this.$refs.videoEl, 0, 0, 150, 150);
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
      if(this.isPhotoTaken){
        this.isPhotoTaken = !this.isPhotoTaken;
      }
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
  /* display: none; */
  position: absolute;
  top: 31vh;
  left: 1%;
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
  /* display: none; */
    position: absolute;
    object-fit: cover;
    top: 10vh;
    left: 1%;
    width: 20vh;
    height: 20vh;
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
  top: 10vh;
  right: 10px;
}
.menu{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vh;
  position: absolute;
  top: 1vh;
  right: 1%;
  z-index: 2;
}
.nav__icon{
  color: #fff;
  font-size: 50px;
}

.content button{
  z-index: 2;
  position: absolute;
  top: 10vh;
  right: 5%;
  border: none;
  border-radius: 25px;
  background: none;
  font-size: 20px;
}

.animate h2{
  position: absolute;
  right: 32%;
  left: 32%;
  top: 2vh;
}
</style>
