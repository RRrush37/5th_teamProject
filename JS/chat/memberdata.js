const memeberDataSearch = document.getElementById('memberdata-search');
const memberData = document.getElementById('memberdata');



// 点击memberdataBtn时显示memberData，隐藏memberData
// memberDataBtn.addEventListener('click', function() {
//     memberData.style.display = 'block';
//     memeberDataSearch.style.display = 'none';
//   });


let list_bottom = document.getElementsByClassName("list-bottom")[0];
let ul_el = list_bottom.querySelector("ul");

console.log("ddd");
  $.ajax({
    url: "php/back_getAllMemberData.php",
    type: "POST",
    data: {},
    dataType: "json",
    success: function(response) {
      $.each(response, function(index, row) {
        // $.each(row, function(index_sub, row_sub) {

        // })
        ul_el.innerHTML += `
        <li>
          <span>${row.memberID}</span>
          <span>${row.memberName}</span>
          <span>${row.permissions}</span>
          <a class="read" href="#">查看</a>
        </li>
        `
      });


      let read_btn = document.getElementsByClassName("read");
      for ( let i = 0 ; i < read_btn.length ; i++ ) {
        read_btn[i].addEventListener("click",function(e){
          memberData.style.display = 'block';
          memeberDataSearch.style.display = 'none';
          e.preventDefault();

          let memberID = e.target.closest("li").querySelector("span").innerHTML ;

          $.ajax({
            url: "php/back_getMemberData.php",
            type: "POST",
            data: {
              "memberID": memberID
            },
            dataType: "json",
            success: function(response) {
              console.log(response);
              let membertext = document.getElementsByClassName("membertext")[0];
              membertext.innerHTML = `<img id="back-btn" src="IMG/chat/Vector.svg" alt="" />` ;
              $.each(response, function(index, row) {
                membertext.innerHTML += `
                <div class="membertext-left">
                  <table>
                    <tr>
                      <td>會員編號</td>
                      <td>${row.memberID}</td>
                    </tr>
                    <td>會員暱稱</td>
                    <td>${row.memberName}</td>
                    <tr>
                      <td>EMAIL</td>
                      <td>${row.email}</td>
                    </tr>
                    <tr>
                      <td>會員身分</td>
                      <td>
                      <select id="search_permissions2">
                      <option selected value="normal">一般</option>
                      <option value="admin">管理員</option>
                      </td>
                </select>
                    </tr>
                    <tr>
                      <td>個性簽名</td>
                      <td>${row.personalSign}</td>
                    </tr>
                    <tr>
                      <td>遊戲幣</td>
                      <td>${row.coin}</td>
                    </tr>
                  </table>
                </div>

                <div class="membertext-right">
                  <table>
                    <tr>
                      <td>會員身高</td>
                      <td>${row.height}</td>
                    </tr>
                    <tr>
                      <td>會員體重</td>
                      <td>${row.weight}</td>
                    </tr>
                    <tr>
                      <td>會員星座</td>
                      <td>${row.starSign}</td>
                    </tr>
                    <tr>
                      <td>會員年齡</td>
                      <td>${row.age}</td>
                    </tr>
                    <tr>
                      <td>會員生日</td>
                      <td>${row.birthday}</td>
                    </tr>
                    <tr>
                      <td>會員興趣</td>
                      <td>${row.interest}</td>
                    </tr>

                  </table>
                </div>
                `
              });

              

              
              const searchPermission2 = document.getElementById('search_permissions2');

              switch (response[0].permissions)  {
                case "normal":
                  searchPermission2.selectedIndex = 0;
                    break;
                case "admin":
                  searchPermission2.selectedIndex = 1;
                    break;
                
            

              }

              const backBtn = document.getElementById('back-btn');
              // 点击backBtn时显示memberText，隐藏memeberData
              backBtn.addEventListener('click', function() {
                memeberDataSearch.style.display = 'block';
                memberData.style.display = 'none';
              });

              let membertext_id = document.getElementsByClassName("membertext-left")[0];
              let save_btn = document.getElementById("save_btn");
              save_btn.addEventListener("click", function(e){
                e.preventDefault();
                edit_member(membertext_id.querySelectorAll("td")[1].innerHTML, searchPermission2.value);
                // console.log(membertext_id.querySelectorAll("td")[1].innerHTML);
                // $.ajax({
                //   url: "php/back_getMemberData.php",
                //   type: "POST",
                //   data: {
                //     "memberID":membertext_id.querySelectorAll("td")[1].innerHTML,
                //     "permissions": searchPermission2.value
                //   },
                //   dataType: "json",
                //   success: function(response) {
                //   },
                //   error: function(xhr, status, error) {
                //     console.error("error:", error);
                //   }

                // })

              })

            },
            error: function(xhr, status, error) {
              console.error("error:", error);
            }
          })
        })


      }

    },
    error: function(xhr, status, error) {
      console.error("error:", error);
    }
  });

  function edit_member( memberID, permission2){
    console.log(memberID);

    $.ajax({
      url: "php/back_editMemberPermission.php",
      type: "POST",
      data: {
        "memberID":memberID,
        "permissions": permission2
      },
      dataType: "json",
      success: function(response) {
      },
      error: function(xhr, status, error) {
        console.error("error:", error);
      }

    })
  }

  // =================================== 搜尋會員 ===========================
const memberData_Search = document.getElementById('memberdata-btn');

memberData_Search.addEventListener( "click", function(){
    ul_el.innerHTML = "" ;

    // console.log($("#search_permissions").val());
    
    $.ajax({
        url: "php/back_searchMember.php",
        method: "post",
        data: {
            "memberID" : $("#search_memberID").val(),
            "memberName" : $("#search_memberName").val(),
            "email" : $("#search_email").val(),
            "permissions" : $("#search_permissions").val()
        },
        dataType: "json",
        success: function(response) {
            // response = JSON.parse(response);
            console.log(response);
            $.each(response, function(index, row) {
                ul_el.innerHTML += `
                <li>
                  <span>${row.memberID}</span>
                  <span>${row.memberName}</span>
                  <span>${row.permissions}</span>
                    <a class="read" href="">查看</a>
                </li>`;
            });
            // console.log(comment_list);
            
            let read_btn = document.getElementsByClassName("read");
            // const eventdata = document.getElementById('eventdata');
            // const eventdata_search = document.getElementById('eventdata-search');
            // const eventdata_create = document.getElementById('eventdata-create');
            for( let i = 0 ; i < read_btn.length ; i++ ){
                read_btn[i].addEventListener("click", function(e){
                    e.preventDefault();
                    memberdata.style.display = 'block';
                    memeberDataSearch.style.display = 'none';
                    // eventdata_create.style.display = 'none';
                    // read_more(e.target.closest("li").querySelector("span").innerHTML);
                })
            }
        },
        error: function(xhr, status, error) {
            alert("error:" + error);
        }
    });

})