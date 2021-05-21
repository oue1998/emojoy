<template>
  <div class="Sadcontent">
    <h1>โกรธหรอ มาหากิจกรรมทำเพื่อผ่อนคลายอารมณ์กันดีกว่านะ</h1>
    <div class="group">
      <div class="con">
        <a href="https://www.thainarak.net/movies-list-best-funny-comedy.html">
          <img
            src="https://www.thainarak.net/uploads/4/8/5/0/48500987/collage-comedy_orig.jpg"
          />
        </a>
        <p>
          วันนี้ Thainarak.net เลยมารวบรวมรายชื่อ “หนังตลก” ที่ดูกี่ครั้งก็ฮา
          จนน้ำตาไหล เป็นหนังตลกแบบที่ไม่ต้องพยายาม ตลกโดยธรรมชาติ รับรองว่า
          คนดูจะต้องฮากรามค้าง หุบยิ้มไม่ได้อย่างแน่นอน
          ใครที่กำลังเครียดๆหรืออยากหัวเราะแนะนำให้ดูเลย
        </p>
      </div>
      <div class="con">
        <a href="https://salehere.co.th/articles/funny-movies-on-netflix">
          <img
            src="https://img.proxumer.com/p/1200x0/2021/03/04/pbxvn0b2qkwo.jpg"
          />
        </a>
        <p>
          แจกลิสต์ 20 หนังตลก บางเรื่องมีที่ Netflix 🎬 ช่วงนี้ต้องพักก่อน
          ขอแนะนำให้หากิจกรรมคลายเครียดทำ จัดลิสต์มาให้แล้ว การันตีความฮา
          ดูกี่รอบ ยังไงก็ขำ ดูวนไปเดือนนึง เฮฮาได้ตลอดเดือน
        </p>
      </div>
      <div class="con">
        <a href="https://my-best.in.th/50111">
          <img
            src="https://cms.dmpcdn.com/travel/2020/08/11/f4e4ec50-dbad-11ea-8433-c5d4d14f3a3c_original.jpg"
          />
        </a>
        <p>
          จัดทำลิสต์ 20 อันดับ
          หนังไทยตลกเรื่องเยี่ยมที่ผ่านการคัดสรรและการันตีโดยผู้ชมทั่วไปและนักวิจารณ์มาแล้วว่าสนุกครบรสและไม่ควรพลาด
          เพื่อที่คุณจะได้ไม่ต้องเสียเวลานั่งดูหนังน่าเบื่อยาวยืดนั่นเอง
        </p>
      </div>
      <div class="con">
        <a href="https://www.punpro.com/p/Podcasts-Recommended">
          <img
            src="https://st-th-1.byteark.com/assets.punpro.com/cover-contents/i8208/1583741280498-%E0%B8%A3%E0%B8%A7%E0%B8%A1-20-Podcasts-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%9F%E0%B8%B1%E0%B8%87.png"
          />
        </a>
        <p>
          Podcasts ในช่วงปีสองปีที่ผ่านมาถือว่าเป็นช่วงที่บูมมากๆ
          สังเกตได้จากรายการใหม่ๆ ที่ผุดขึ้นมาเป็นดอกเห็ด
          วันนี้ปันโปรเลยอยากจะมาแนะนำ พอดแคสต์ฟังสนุก
          เปิดเมื่อไหร่ก็ฟังได้ไม่มีเบื่อ ส่วนจะมีอะไรบ้าง ไปดูกัน!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sadcontent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Sadcontent {
  height: 100vh;
  background: url('../assets/emojoy_web.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.Sadcontent h1{
  position: absolute;
  top: 2%;
}
.group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.con {
  width: 300px;
  align-items: center;
  background-color: #fff;
  border: 1px white solid;
  border-radius: 30px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.con img {
  width: 250px;
  margin-top: 20px;
}
.con p {
  margin-top: 20px;
}
@media (max-width:1280px) {
.Sadcontent {
  height: fit-content;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 50%;
}
.group {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: fit-content;
  margin-top: 10vh;
  margin-bottom: 50px;
}
.con {
  width: 100%;
  height: 550px;
  justify-content: center;
  padding: 20px;
  margin: 20px;
}
.con img {
  width: 250px;
  margin-top: 20px;
}
.con p {
  font-size: 25px;
  width: 80%;
}
}
</style>
