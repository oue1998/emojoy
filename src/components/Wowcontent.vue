<template>
  <div class="Wowcontent">
    <h1>มาทำอะไรที่ยิ่งตื่นเต้นสุด ๆ กันไปเลยดีกว่า</h1>
    <div class="group">
      <div class="con">
        <a
          href="https://www.punpro.com/p/27-podcast-horror-and-ghost-story-at-spotify"
        >
          <img
            src="https://st-th-1.byteark.com/assets.punpro.com/cover-contents/i10084/1598586710085-118065892_3653801467989513_4048143141020143483_o.jpg"
          />
        </a>
        <p>
          รวมฮิตเรื่องหลอนจาก Spotify เดี๋ยวนี้คนหันมาฟัง Podcast
          กันมากขึ้น มีทั้งฝึกภาษาอังกฤษ ข่าว เรื่องน่ารู้ และอื่นๆ อีกเพียบ
          วันนี้แอดจะชวนมาฟังแนวเรื่องหลอนๆ กันบ้าง รับรองว่าทั้งสนุก
          ทั้งน่ากลัว ฟังตอนกลางคืนระวังไม่กล้านอนคนเดียวน้า
        </p>
      </div>
      <div class="con">
        <a href="https://www.wongnai.com/articles/horror-murder-movies">
          <img
            src="https://img.wongnai.com/p/1600x0/2020/12/24/cd6c35fd04c940b8b1487c129703257e.jpg"
          />
        </a>
        <p>
          หนังสยองขวัญ 25 เรื่อง รับรองว่าเป็นหนัง กระตุกจิต!
          กระชากใจ! จนทำให้อะดรีนาลีนพุ่งปรี๊ด ๆ อย่างแน่นอน! แถมนักวิจัยจาก
          Westminster วิจัยว่า การดูหนังสยองขวัญ 90 นาที ช่วยเผาผลาญได้ถึง 113
          แคลอรี อีกด้วย พร้อมแล้วไปดูกันเลยค่ะ
        </p>
      </div>
      <div class="con">
        <a
          href="https://shortrecap.co/social-trend/%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B9%8C%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%AA%E0%B8%B7%E0%B8%9A%E0%B8%AA%E0%B8%A7%E0%B8%99/"
        >
          <img
            src="https://shortrecap.co/wp-content/uploads/2020/08/InvestigateSeries_cover_web.jpg"
          />
        </a>
        <p>
          สายซีรีส์แนวสืบสวน ชอบความตื่นเต้น ลุ้นระทึก จนหยุดดูไม่ได้ Short
          Recap ได้รวบรวมซีรีส์แนวสืบสวนที่ดีที่สุดไว้ให้ที่นี่แล้ว
          ถูกใจเรื่องไหนตามไปดูกันได้เลย รับรองไม่ผิดหวัง
        </p>
      </div>
      <div class="con">
        <a href="https://my-best.in.th/49169">
          <img
            src="https://amarinbooks.com/wp-content/uploads/2018/11/%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B7%E0%B8%9A%E0%B8%AA%E0%B8%A7%E0%B8%99_1360X826-pix.jpg"
          />
        </a>
        <p>
          วันนี้เราจึงอยากพาคุณมารู้จักกับ 10 อันดับ นวนิยายแนวสืบสวนสอบสวนขายดี
          ที่รวบรวมโดยทีมงานมายเบสท์ทั้งนวนิยายไทยและนวนิยายแปลต่างประเทศ
          ไม่ว่าจะเป็นแนวสืบสวนอาชญากรรม แนวสืบสวนสยองขวัญ
          หรือแม้แต่แนวสืบสวนอิงประวัติศาสตร์ มาให้คุณได้อ่านอย่างจุใจ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wowcontent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Wowcontent{
  height: 100vh;
  background: url('../assets/emojoy_web.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.Wowcontent h1{
  position: absolute;
  top: 4vh;
  font-size: 28px;
}

.group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  margin-top: 100px;
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
