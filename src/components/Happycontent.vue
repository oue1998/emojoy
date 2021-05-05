<template>
  <div class="Happycontent">
    <div class="group">
      <div class="con">
        <a href="https://riccoprint.com/10-best-psychology-books-in-2021/">
          <img
            src="https://riccoprint.com/wp-content/uploads/2021/01/CT01-0011-Website.jpg.webp"
          />
        </a>
        <p>
          หนังสือจิตวิทยาที่วางขายโดยทั่วไป ก็มีให้ได้เลือกอ่านมากมายหลายเล่ม
          แต่ละเล่มก็จะมีความแตกต่างกันไป ทั้งในเรื่องของจุดประสงค์
          รูปแบบของเนื้อหาด้านใน และข้อคิดจากหนังสือ
          ดังนั้นในบทความนี้เราจึงจะมาแนะนำหนังสือจิตวิทยา 10 เล่ม
          ที่ควรอ่านในปี 2021 จะมีหนังสือเล่มไปบ้าง ไปดูกันเลยค่ะ !
        </p>
      </div>
      <div class="con">
        <a href="https://www.goodtipit.com/best-love-romance-movie-netflix/">
          <img
            src="https://www.goodtipit.com/wp-content/uploads/2020/06/Netflix-Movie.jpg"
          />
        </a>
        <p>
          หนังรักซาบซึ้งที่เราจะอิ่มเอมใจ เมื่อได้ดูหนังเรื่องจบแบบมีความสุข
          Happy Ending เพื่อหนีจากหนังที่ทำร้ายตัวเองเศร้าไป 3 วัน
          ดังนั้นเราจึงแนะนำ หนังรัก Netflix
          ที่ขอบอกว่าตอนจบไม่มีทำร้ายใจคนดูแน่ๆ
        </p>
      </div>
      <div class="con">
        <a href="https://travel.trueid.net/detail/pep1poD88ybj">
          <img
            src="https://cms.dmpcdn.com/travel/2020/08/11/f4e4ec50-dbad-11ea-8433-c5d4d14f3a3c_original.jpg"
          />
        </a>
        <p>
          กรุงเทพฯ มีที่เที่ยวเยอะมากกก เป็นเมืองที่ไม่เคยหลับใหล
          มีสีสันดึงดูดใจนักท่องเที่ยวทั่วโลก เพราะฉะนั้น
          เราคนไทยก็ต้องเที่ยวไทยกันค่ะ เอาล่ะ ตามมาปักหมุด เที่ยวกรุงเทพ
          แบบถูกและดี กับ 15 ที่เที่ยวกรุงเทพ เข้าฟรี ฟินไปเลยฟรีๆ
          เที่ยวแบบประหยัด เดินถ่ายรูปสวยๆ ไม่ต้องเสียตังค์จ้า
        </p>
      </div>
      <div class="con">
        <a
          href="https://www.ryoiireview.com/article/new-cafe-take-photos-chill/"
        >
          <img
            src="https://www.ryoiireview.com/upload/article/202007/1595590751_f3ccdd27d2000e3f9255a7e3e2c48800.jpg"
          />
        </a>
        <p>
          สำหรับวันนี้ Ryoii มีร้านคาเฟ่โลเคชั่นคูลๆ มาฝากเพื่อนๆ
          บอกได้เลยว่าแต่ละร้านน่านั่งมากค่ะ
          และหลังจากที่มีมาตราการคลายล็อคดาวน์ในวันที่ 3 พ.ค. 2563
          ที่ผ่านมาเชื่อว่าหลายคนคงอยากจะไปนั่งเล่นร้านกาแฟถ่ายรูป ชิวๆ กันแล้ว
          วันนี้เราจึงจะมาอัปเดตข้อมูลคาเฟ่ที่เปิดให้นั่งแบบ social distance
          และคาเฟ่ที่เปิดให้บริการ delivery มีร้านไหนบ้างก็ตามมาดูเลยค่ะ
          พร้อมแล้วลุยกันเลย
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Happycontent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Happycontent {
  height: 100vh;
  background-color: #ffcc01;
  display: flex;
  justify-content: center;
}
.group {
  display: flex;
  justify-content: space-between;
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
</style>
