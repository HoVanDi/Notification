document.addEventListener("DOMContentLoaded", function () {
  const unreadNotifications = document.querySelectorAll(".comment");
  const notificationNumber = document.querySelector(".notification-number");
  const readAllNotifications = document.querySelector(".notification-btn");

  // Assign click event to each notification
  unreadNotifications.forEach(function (notification) {
    const notificationIcon = notification.querySelector(".notification-icon");

    // Assign click event to all notifications (including icons)
    notification.addEventListener("click", function () {
      notification.classList.add("read");
      notificationIcon.style.display = "none";

      const currentNumber = parseInt(notificationNumber.textContent);
      if (currentNumber >= 1) {
        notificationNumber.textContent = currentNumber - 1;
      }
    });

  });
  // Assign click event to "Mark all as read" button
  readAllNotifications.addEventListener("click", function () {
    unreadNotifications.forEach(function (notification) {
      notification.classList.add("read");
      const notificationIcon = notification.querySelector(".notification-icon");
      if (notificationIcon) {
        notificationIcon.style.display = "none";
      }
    });
    notificationNumber.textContent = "0";
  });
});