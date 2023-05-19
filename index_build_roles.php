<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./CSS/global.css">
  <link rel="stylesheet" href="CSS/index/index_build_roles.html.css">
  <title>創建角色</title>
</head>

<body>


  <?php require("common.php"); ?>

  <div class="return">
    <img src="./img/index/return.png" alt="" height="60">
    <h2>創建角色</h2>
  </div>

  <!-- 上面是返回 -->

  <div class="box">

    <div class="choose">

      <div class="text">
        <div>全部</div>
        <div>頭髮</div>
        <div>上衣</div>
        <div>下裝</div>
        <div>配件</div>
      </div>


    </div>


    <div class="role">
      <div class="baby">
        <img src="./IMG/index/a.png" alt="a">
        <div class="button"> <span> 確認 </span> </div>
      </div>

      <div class="slider">
        <div class="boxs">
          <img src="./IMG/index/img/image 37.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 38.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 39.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 40.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 41.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 37.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 38.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 39.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 40.png" alt="your-image">
        </div>
        <div class="boxs">
          <img src="./IMG/index/img/image 41.png" alt="your-image">
        </div>
      </div>
    </div>




  </div>












  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>
    // 下面的js是給配件有滑動的


    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector(".slider");
    const boxWrapper = document.querySelector(".box-wrapper");
    const scrollbar = document.querySelector(".scrollbar");

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;

      updateScrollbar();
    });

    const updateScrollbar = () => {
      const scrollbarHeight = slider.offsetHeight;
      const sliderHeight = slider.scrollHeight;
    }




    // 上面的js是給配件有滑動的
  </script>
  <script src="https://kit.fontawesome.com/75e9abcec6.js" crossorigin="anonymous"></script>


</body>

</html>