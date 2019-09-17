(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,i,e){"use strict";e.r(i),i.default=[{title:"git可视化工具--GitKraken",path:"/posts/gitpug.html",strippedContent:" # 今天给大家推荐一款git可视化工具(GitKraken) ## 这个工具让我说怎么样？  我只想说 完美 这个工具第一是漂亮的ui界面(我不是舔狗 这个真的是很漂亮) 给大家看看 ![GitKraken的操作界面](/git1.png) ## 第二就是超级简单的提交代码到git的操作 不需要记那些 git add . , git status , git commit -m “” , git push 等等指令 只需点一下就行 而且你不需要下载git！！！ 因为这个软件自带git是不是很强  ### 接下来我就给大家介绍他从克隆项目 然后到拉取新代码--commit--提交代码 的简单使用吧 ### 1.我们需要先把项目从git上克隆下来 ![1.获取github上的克隆地址](/git2.png) ### 2.新建一个文件夹 右键(如果你安装了GitKraken就会有这个选项) ![2.鼠标右键点击GitKraken](/git3.png) ### 3.点一下进去后左下角会出来这个 大家不用管 ![3.进入GitKraken](/git4.png) ### 4.进去后按此步骤点克隆项目 ![4.准备克隆](/git5.png) ![5.准备克隆](/git6.png) ### 5.然后按照这个要求把需要的东西填进去然后静待佳音 ![6.开始克隆](/git7.png) ![6.等待克隆完成](/git8.png) ### 6.然后点open now就进入主页面了 ![6.进入主页面](/git9.png) ### 7.然后开始提交自己改的东西 ![7.先pull一下拉取新的代码(每次提交件之前都要pull一下 这个很重要！！！！！ 不然会冲突)](/git10.png) ### 8.然后点中间第一个你右面会出来要提交的内容 ![9.你要提交的内容都在这](/git11.png) ### 9.把你要提交的内容全部放到暂存区 ![10.准备放到暂存区](/git12.png) ![10.放到暂存区](/git13.png) ### 10.提交后你会发现中间的那块多了你提交的内容及备注 ![10.准备提交](/git14.png) ### 11.最后点push 提交完成 ![11.提交完成](/git15.png)  # 到这来GitKraken的基础操作就完成了！！！ 还有很多功能各位可以自行挖掘 这真的是一款很棒的软件"},{title:"点击图片放大",path:"/posts/Imgmax.html",strippedContent:"点击图片让图片放大 图片是动态渲染出来的  ## jQuery点击图片让图片放大  ### html部分  ``` html部分(只有body内) <div class=\"hide dn\">     <div>x</div>     <img src=\"\" alt=\"\"> </div> ```  ### css部分  ``` css部分 * {     margin: 0;     padding: 0; } .hide {     position: fixed;     top: 0;     left: 0;     width: 100%;     height: 100%;     background-color: rgba(0, 0, 0, 0.5);     z-index: 100; } .hide img {     position: absolute;     width: 100px;     top: 0;     right: 0;     bottom: 0;     left: 0;     margin: auto; } .hide div {     position: absolute;     right: 15px;     top: 0;     font-size: 30px;     color: #ccc;     cursor: pointer; } img {     width: 100px;     float: left; } .dn {     display: none; } .oh {     overflow-y: hidden; } ```  ### js部分  ``` js部分 $(document).ready(function () {     $.ajax({         type: \"get\",         url: \"https://www.apiopen.top/satinApi?type=1&page=1\",         dataType: 'json',         success: function (response) {             if (response.code == 200) {                 var data = response.data                 for (var i in data) {                     var str = '';                     var cdn_img = data[i].cdn_img                     str += '<img src=\"' + cdn_img + '\" alt=\"\" data-src=\"' + cdn_img + '\">'                     $('body').append(str)                 }             }         }     }); }) $(document).on('click','img', function () {     $('body').addClass('oh')     $('.hide').show()     var url = $(this).attr('data-src')     $('.hide img').attr('src', url)     $('.hide').bind('mousewheel', function (e) {         var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 :-1)) ||             // chrome & ie             (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox         var wid = $('.hide img').width();         if (delta > 0) {             $('.hide img').stop().animate({                 'width': wid + 100             },300)         } else if (delta < 0) {             $('.hide img').stop().animate({                 'width': wid - 100             },300)         }     }) }) $('.hide div').on('click',function () {     $('body').removeClass('oh')     $('.hide').hide() }) ```  ## 效果图(鼠标滚动放大缩小) ![](/imgmax.png) # 此代码需要jq2.2.0以上版本才可以运行   "},{title:"用js实现rem",path:"/posts/size.html",strippedContent:" ### js部分  ``` js部分  /*计算rem高度*/ (function (win, doc) {     win.onresize = function () {         change();     };     change();      function change() {         var oFs = doc.documentElement.clientWidth / (750 / 100);         doc.documentElement.style.fontSize = oFs + 'px';              } })(window, document); ``` 这个是直接调用的公共js文件 没有效果图直接调用就行 ## 使用后直接把这个js文件引成公共的 1rem = 100px  例如你需要 36px 那么就 36px = 0.36rem"},{title:"下拉加载更多支持pc和移动",path:"/posts/The-drop-down.html",strippedContent:"# 这个例子中使用了公共的接口 各位可以用这个接口 但是不可以恶意刷数据哦 恶意刷数据时间长了此接口会禁用的 好了话不多说 上菜~  ## jQuery下拉加载更多 支持pc和移动  ### html部分  ``` html部分(只有body内) 因为有接口就结构都是动态渲染出来的 所以body以内没有结构标签 各位用的时候按自己的实际情况活用哦 ```  ### css部分  ``` css部分 div {     width: 300px;     height: 200px;     margin: 0 auto; } .dn {     display: none; } div img {     width: 100%;     height: 100%; } #loading, #over {     width: 100%;     height: 30px;     background-color: pink;     text-align: center; } ```  ### js部分  ``` js部分  $(document).ready(function () {         $.ajax({             type: \"get\",             url: \"https://www.apiopen.top/satinApi?type=1&page=1\",             dataType: 'json',             success: function (response) {                 if (response.code == 200) {                     console.log('%c第\\t1\\t次\\t数\\t据\\t请\\t求\\t成\\t功', 'color:red;font-size: 20px;');                     var data = response.data                     for (var i in data) {                         var str = '';                         var cdn_img = data[i].cdn_img                         str += '<div><img src=\"' + cdn_img + '\" alt=\"\"></div>'                         $('body').append(str)                     }                 }             }         });     })     // 这是从第二页开始下拉更多     var pager = 1;     var stop = true;     $(window).scroll(function () {         if ($(this).scrollTop() + $(window).height() + 100 >= $(document).height() && $(this).scrollTop() +             100) {             if (stop == true) {                 stop = false;                 pager = pager + 1;                 $.ajax({                     type: \"get\",                     url: \"https://www.apiopen.top/satinApi?type=1&page=\" + pager,                     dataType: 'json',                     success: function (response) {                         if (response.code == 200) {                             console.log('%c第\\t' + pager + '\\t次\\t数\\t据\\t请\\t求\\t成\\t功','color:red;font-size: 20px;');                             var data = response.data                             for (var i in data) {                                 var str = '';                                 var cdn_img = data[i].cdn_img                                 str += '<div><img src=\"' + cdn_img + '\" alt=\"\"></div>'                                 $('body').append(str)                                 $('#loading').remove()                             }                             $('body').append('<div id=\"loading\">加载中......</div>')                             stop = true;                         } else {                             console.log('%c数\\t据\\t请\\t求\\t失\\t败', 'color:red;font-size: 20px;');                             $('body').append('<div id=\"over\">淦！~没有数据</div>')                         }                     }                 });             }         }     }); ```  ## 效果图 ![](/bottom.png) 如果有数据就会拉一下 出现一下加载中 然后出现下一组内容 如果没有数就显示没有数据 也可以f12控制台看 # 此代码需要jq2.2.0以上版本才可以运行"},{title:"jquery模拟实现删除，查询，全选，反选",path:"/posts/table.html",strippedContent:'这是第二天 学习的代码 jquery模拟实现删除，查询，全选，反选  ## jquery模拟实现删除，查询，全选，反选  ### html部分 ``` html部分(只有body内) <h1>学员信息查询管理系统</h1> 条件： <p><input id="txt_search" type="text" placeholder="搜索空为显示全部"> <input id="btn_search" type="button" value="查询姓名">     <input type="button" id="del_btn" value="选择删除">     </p><table id="tab" border="1">         <tbody><tr id="sh">             <th><input type="checkbox" id="selectAll">全选 <input type="checkbox" id="ReverseSelect">反选</th>             <th>学号</th>             <th>姓名</th>             <th>性别</th>             <th>年龄</th>             <th>成绩</th>             <th>班级</th>         </tr>         <tr>             <td><input type="checkbox" class="xz"></td>             <td>110</td>             <td class="nm">小明</td>             <td>男</td>             <td>44</td>             <td>100</td>             <td>89班</td>         </tr>         <tr>             <td><input type="checkbox" class="xz"></td>             <td>110</td>             <td class="nm">小红</td>             <td>男</td>             <td>44</td>             <td>99</td>             <td>89班</td>         </tr>         <tr>             <td><input type="checkbox" class="xz"></td>             <td>110</td>             <td class="nm">小白</td>             <td>男</td>             <td>44</td>             <td>98</td>             <td>89班</td>         </tr>         <tr>             <td><input type="checkbox" class="xz"></td>             <td>110</td>             <td class="nm">小王</td>             <td>男</td>             <td>44</td>             <td>22</td>             <td>89班</td>         </tr>     </tbody></table> ```  ### css部分 ``` css部分 #nul { \tmargin-left:150px; \tdisplay:none; } ```  ### js部分 ``` js部分 $(\'#selectAll\').on(\'click\', function() {     // $(\'#tab td input\').attr(\'checked\')     var flage = $(this).is(":checked");     if (flage) {         $(\'#tab td input\').prop("checked", true);     } else {         $(\'#tab td input\').prop("checked", false);     } }) // 四个选中再全选 $(\'.xz\').on(\'click\', function() {     if ($(".xz[type=\'checkbox\']:checked").length == $(\'.xz\').length) {         $(\'#selectAll\').prop("checked", true);     } else {         $(\'#selectAll\').prop("checked", false);     } }) // 反选 $(\'#ReverseSelect\').on(\'click\', function() {     $("#tab td :checkbox").each(function() {         //遍历所有复选框，然后取值进行 !非操作         $(this).prop("checked", !$(this).prop("checked"));     })     if ($(".xz[type=\'checkbox\']:checked").length == $(\'.xz\').length) {         $(\'#selectAll\').prop("checked", true);     } else {         $(\'#selectAll\').prop("checked", false);     } }) // 搜索 $(\'#btn_search\').on(\'click\', function() {     var tex = $(\'#txt_search\').val()     $(\'.nm\').each(function() {         if (tex == $(this).text()) {             $(this).text(tex).parents(\'tr\').show().siblings().hide();             $(\'#nul\').hide();         } else {             $(this).parents(\'tr\').hide();             // $(\'#nul\').show();         }         if (tex == \'\') {             $(this).parents(\'tr\').show();             $(\'#nul\').hide();         }     })     $(\'#sh\').show() }) // 删除 $(\'#del_btn\').on(\'click\', function() {     $("#tab td :checkbox").each(function() {         if ($(this).prop("checked") == true) {             $(this).parents(\'tr\').remove()         }     }) }) ```  ## 效果图(全选-反选-删除-搜索这些功能都可以使用 删除了就搜索不到了哦) ![](/tab.png) # 此代码需要jq2.2.0以上版本才可以运行'},{title:"自己手写的一个jQuery轮播图+滚动导航楼层效果+点击返回顶部",path:"/posts/my-first-blog.html",strippedContent:"这是我博客的第一天从此以后我自己成长学到的内容将全部放到此地方 欢迎大家访问！  ## jQuery轮播图+滚动导航楼层效果+点击返回顶部  ### html部分  ``` html部分(只有body内) <ul id=\"nav\">     <li data-in=\"go1\" class=\"blue\">1</li>     <li data-in=\"go2\">2</li>     <li data-in=\"go3\">3</li>     <li data-in=\"go4\">4</li>     <li data-in=\"go5\">5</li>     <li data-in=\"go6\">6</li>     <li data-in=\"go7\">7</li>     <li data-in=\"go8\">8</li>     <li data-in=\"go9\">9</li>     <li data-in=\"go10\">10</li> </ul> <div class=\"btn\">     <button class=\"left fl\">←</button>     <button class=\"right fr\">→</button> </div> <ul id=\"list\">     <li id=\"go1\">         <div>1</div>         <div>2</div>         <div>3</div>         <div>4</div>         <div>5</div>         <div>6</div>         <div>7</div>         <div>8</div>         <div>9</div>         <div>10</div>     </li>     <li id=\"go2\">2</li>     <li id=\"go3\">3</li>     <li id=\"go4\">4</li>     <li id=\"go5\">5</li>     <li id=\"go6\">6</li>     <li id=\"go7\">7</li>     <li id=\"go8\">8</li>     <li id=\"go9\">9</li>     <li id=\"go10\">10</li>     <li class=\"undfand\"> </li> </ul>  <div class=\"top\">返回顶部</div> ```  ### css部分  ``` css部分  * { \tmargin:0; \tpadding:0; } #nav { \tposition:fixed; \tleft:30px; \ttop:10px; } #nav li { \twidth:50px; \theight:30px; \tfont:bold 20px/30px simhei; \ttext-align:center; \tlist-style-type:none; \tbackground:#333; \tcolor:#fff; \tmargin:10px 0; \tcursor:pointer; } #list { \twidth:470px; \toverflow:hidden; \tmargin-left:200px; } #list li { \twidth:470px; \theight:300px; \ttext-align:center; \tfont:bold 100px/300px simhei; \tlist-style-type:none; \tbackground:yellow; \tcolor:blue; \t/* margin:50px 200px; \t*/             margin-bottom:50px; } .blue { \tbackground-color:blue !important; \tcolor:#fff !important; } .undfand { \tbackground-color:#fff !important; } .top { \tposition:fixed; \tright:0; \tbottom:0; \twidth:50px; \theight:50px; \tbackground-color:pink; \tcursor:pointer; } #list #go1 { \tposition:relative; \theight:300px; } #go1 div { \tfloat:left; \twidth:470px; \theight:100%; \tbackground-color:orange; \tmargin-right:10px; } .btn { \tposition:absolute; \twidth:546px; \theight:50px; \ttop:130px; \tleft:160px; } .btn button { \twidth:30px; \theight:40px; } .fl { \tfloat:left; } .fr { \tfloat:right; } ```  ### js部分  ``` js部分  var len = $('#go1 div').length  // 动态计算轮播图的宽度  $(document).ready(function() {      $('#list #go1').css({          'width': len * 480      })  })  // 轮播图的右按钮点击  var i = 0;  $('.right').on('click', function() {      i++;      var j = 480 * i;      $('#go1').stop().animate({          'right': j      })      if (i >= len) {          $('#go1').stop().css({              'right': 0          });          i = 0;      }  })  // 轮播图的左按钮点击  $('.left').on('click', function() {      i--;      var j = 480 * i + 'px';      $('#go1').stop().animate({          'right': j      })      if (i < 0) {          $('#go1').stop().css({              'right': 480 * (len - 1)          });          i = len;      }  })  // 点击导航滚动到对应位置  $('#nav').on('click', 'li', function(e) {      var target = e.target;      var id = $(target).data(\"in\");      $('html,body').stop().animate({          scrollTop: $('#' + id).offset().top      }, 800);  });  // 滚动到某个位置导航某个背景颜色变化  $(document).scroll(function() {      var scroH = $(document).scrollTop(); //滚动高度      var viewH = $(window).height(); //可见高度       var contentH = $(document).height(); //内容高度      var li = $('#nav li');      if (scroH >= 50) {          li.eq(0).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 400 - 200) {          li.eq(1).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 749 - 200) {          li.eq(2).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 1100 - 200) {          li.eq(3).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 1450 - 200) {          li.eq(4).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 1800 - 200) {          li.eq(5).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 2150 - 200) {          li.eq(6).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 2500 - 200) {          li.eq(7).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 2850 - 200) {          li.eq(8).addClass('blue').siblings().removeClass('blue')      }      if (scroH >= 3200 - 200) {          li.eq(9).addClass('blue').siblings().removeClass('blue')      }  });  // 点击到达顶部  $('.top').on('click', function() {      $('html,body').stop().animate({          scrollTop: 0      }, 800);  }) ``` ## 效果图(点击左侧导航可以到对应的位置和轮播图) ![](/lti.png) 页面刚进去轮播图父盒子的宽度就已经计算出来了 所以宽度是动态的 因为咱们在日常工作总轮播图是后台数据遍历出来的 所以宽度是动态算出来的  左导航方法比较笨不过很容易看懂  代码都很简单新手看四五分钟就懂了 # 此代码需要jq2.2.0以上版本才可以运行"}]}}]);