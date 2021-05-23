<template>
  <div class="Neutralcontent">
      <h1>มาหาอะไรน่าสนใจ เปลี่ยนอารมณ์กันเถอะ</h1>
    <div class="group">
      <div class="con">
        <a
          href="https://www.thairath.co.th/lifestyle/life/1804646?fbclid=IwAR1jBCAC96N10JRrrurWBRCaYtwHcTfcOYk2deLw2E5q9voXf6h-cgELSKE"
        >
          <img
            src="https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsUi3ZKwlcZ4kVSVW5KHUDHr8N4yPxxAvIlAqCi0rTfFi8dzu6bXDsE.webp"
          />
        </a>
        <p>
          พิษเจ้าไวรัสโคโรนา (โควิด-19) ทำให้เราต้องทำงานอยู่บ้าน (Work from
          Home) ช่วยกันหยุดเชื้อเพื่อชาติ และเมื่อต้องอยู่ที่บ้านนาน ๆ แบบนี้
          การดูแลสุขภาพ ด้วยอาหารการกินที่มีประโยชน์จึงสำคัญ
          ไทยรัฐออนไลน์จึงขอนำ 30 เมนูทำง่ายที่บ้านมาฝากกัน
        </p>
      </div>
      <div class="con">
        <a
          href="https://www.hotcourses.in.th/study-abroad-info/applying-to-university/free-online-courses-with-certificates-from-un-organisation/"
        >
          <img
            src="https://images4.content-hci.com/commimg/myhotcourses/blog/post/myhc_90264.jpg"
          />
        </a>
        <p>
          อยากเพิ่มเงินเดือนตั้งแต่ต้นปี 2564 แต่ไม่รู้ทำยังไงดี
          “คอร์สเรียนออนไลน์ฟรี” เพื่อพัฒนาทักษะของคุณ
          FINSTREET รวบรวม “เว็บไซต์เรียนออนไลน์” จากหลายสายอาชีพ
          นอกจากจะเรียนได้ฟรีแล้ว ยังได้ทั้ง เกียรติบัตร (Certificate), วุฒิบัตร
          หรือประกาศนียบัตรด้วย !
        </p>
      </div>
      <div class="con">
        <a href="https://www.wongnai.com/beauty-tips/work-from-home-hobbies">
          <img
            src="https://img.wongnai.com/p/800x0/2020/03/21/4ae675a12c38468cb0b40de8c3406a32.jpg"
          />
        </a>
        <p>
          เชื่อแหละว่าการเปลี่ยนจากนั่งทำงานในออฟฟิศมาเป็นอยู่บ้านอาจจะทำให้หลายคนเหงาจนหมดไฟ
          ไม่มีแรงจะทำงาน กลายเป็นขี้เกียจและนอนทั้งวันไปอีก มาหางานอดิเรกสนุก ๆ
          ทำแก้เบื่อในช่วงที่มีเวลาว่างกัน อ่านต่อได้ที่
        </p>
      </div>
      <div class="con">
        <a href="https://www.dharmniti.co.th/10activity-wfh/">
          <img
            src="https://www.dharmniti.co.th/wp-content/uploads/2020/04/10-%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%97%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B0%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7-1038x584-1-672x378.jpg"
          />
        </a>
        <p>
          แน่นอนว่าช่วงเวลาที่ออกไปไหนไม่ได้ นอกจากงานที่ต้องรับผิดชอบให้ครบแล้ว
          ยังมีเวลาว่างๆ
          ที่ชาวออฟฟิศสามารถแบ่งมาทำกิจกรรมเสริมเพิ่มทักษะและศักยภาพในการทำงาน
          รวมทั้งยังแก้เบื่อเมื่ออยู่บ้าน แถมบางงานยังสร้างรายได้อีกด้วย
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Neutralcontent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Neutralcontent{
  height: 100vh;
  background: url('../assets/emojoy_web.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.Neutralcontent h1{
  position: absolute;
  top: 4vh;
  font-size: 30px;
}

.group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  margin-top: 50px;
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
  margin: 10px;
}
.con img {
  width: 100%;
}
.con p {
  margin-top: 18px;
}
</style>
