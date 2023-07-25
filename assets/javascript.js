document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các thông báo chưa đọc
  const unreadNotifications = document.querySelectorAll(".comment.comment-read");

  // Gán sự kiện nhấp chuột cho từng thông báo
  unreadNotifications.forEach(function (notification) {
    // Lấy đối tượng notification-icon bên trong thông báo
    const notificationIcon = notification.querySelector(".notification-icon");

    // Gán sự kiện click cho cả thông báo (bao gồm cả icon)
    notification.addEventListener("click", function () {
      // Kiểm tra xem thông báo có class unread hay không
      if (notification.classList.contains("unread")) {
        // Khi một thông báo được nhấp vào,
        // đổi màu nền và ẩn icon
        notification.classList.remove("unread");
        notification.classList.add("read");

        // Ẩn phần tử icon trong thông báo nếu tồn tại
        if (notificationIcon) {
          notificationIcon.style.display = "none";
        }

        // Giảm số lượng thông báo
        const notificationNumber = document.querySelector(".notification-number");
        let unreadCount = parseInt(notificationNumber.textContent);
        unreadCount--;
        notificationNumber.textContent = unreadCount;

        // Nếu số lượng thông báo đã đọc là 0, ẩn nút thông báo
        if (unreadCount === 0) {
          notificationNumber.style.display = "none";
        }
      }
    });
  });
});