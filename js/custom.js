// ============================================
// 公告弹窗逻辑 (SweetAlert2)
// ============================================
function showAnnouncement() {
  Swal.fire({
    title: '📢 本站公告',
    // 这里是正文内容，支持 HTML 标签
    // <br> 是换行，<b> 是加粗，<div style="text-align:left"> 是为了让文字左对齐更像文章
    html: `
      <div style="text-align: left; line-height: 1.8;">
        1. 欢迎访问我的博客！🎉<br>
        2. 欢迎加入QQ交流群:1060729358。<br>
        3. 遇到问题可以在留言板反馈。<br>
      </div>
    `,
    icon: 'info',           // 图标可选：success, error, warning, info, question
    confirmButtonText: '好哒', // 按钮文字
    confirmButtonColor: '#49b1f5' // 按钮颜色 (主题蓝)
  });
}

// 如果你之前有粒子特效的代码，也可以接着写在下面...