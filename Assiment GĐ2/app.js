var form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    event.preventDefault();
    alert("Vui lòng nhập tên đăng nhập và mật khẩu");
  }
});

// end js đăng nhập

var form = document.getElementById("signup-form");
form.addEventListener("submit", function(event) {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password != confirmPassword) {
    event.preventDefault();
    alert("Mật khẩu xác nhận không khớp");
  }
});
// end đăng kí

var form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Kiểm tra định dạng email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    event.preventDefault();
    alert("Vui lòng nhập địa chỉ email hợp lệ");
  }

  // Kiểm tra số điện thoại
  var phoneRegex = /^\d{10,11}$/;
  if (!phoneRegex.test(phone)) {
    event.preventDefault();
    alert("Vui lòng nhập số điện thoại hợp lệ (10-11 chữ số)");
  }
});
// end contact