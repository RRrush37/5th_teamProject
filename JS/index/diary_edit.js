$(() => {
  let send = document.querySelector(".button .send");
  send.addEventListener("click", () => {
    if (!document.getElementById("title").value) {
      alert("請輸入文章標題");
      return;
    }
    if (!document.getElementById("content").value) {
      alert("請輸入文章內容");
      return;
    }
    $.ajax({
      url: "php/renderArticle.php",
      method: "post",
      type: "json",
      data: {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
      },
      success: (response) => {
        alert(response);
        location.href = "diary_new.html";
      },
      error: (xhr, status, error) => {
        // 在此處處理錯誤情況
        alert("Error: " + error);
      },
    });
  });
});
