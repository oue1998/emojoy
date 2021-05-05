<template>
  <div id="Home">
        <div class="button"><router-link to="/Video">START</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    };
  },
  setup () {
    

    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#Home{
  width: 100%;
  background: url('../assets/home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #ffcc01; */
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.button{
  position: absolute;
  bottom: 20vh;
  border: 1px white solid;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px 80px 10px 80px;
}
.button a{
  color: #000;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
}
</style>
