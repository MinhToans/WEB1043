while (true) {
    console.log("Menu:");
    console.log("1. Tính điểm trung bình ");
    console.log("2. Tính điểm trung bình ");
    console.log("0. Thoát");
  
    let choice = prompt("Nhập lựa chọn của bạn: ");
  
    if (choice === "1") {
      tinh_diem_trung_binh_switch();
    } else if (choice === "2") {
      tinh_diem_trung_binh_ifelse();
    } else if (choice === "0") {
      break;
    } else {
      console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
  }
//   endmenu


function tinh_diem_trung_binh_ifelse() {
    let diem_toan = parseFloat(prompt("Nhập điểm Toán: "));
    let diem_ly = parseFloat(prompt("Nhập điểm Lý: "));
    let diem_hoa = parseFloat(prompt("Nhập điểm Hóa: "));
    let diem_sinh = parseFloat(prompt("Nhập điểm Sinh: "));
  
    if (diem_toan < 0 || diem_toan > 10 || diem_ly < 0 || diem_ly > 10 || diem_hoa < 0 || diem_hoa > 10 || diem_sinh < 0 || diem_sinh > 10) {
      console.log("Điểm không hợp lệ.");
      return;
    }
  
    let diem_tb = (diem_toan + diem_ly + diem_hoa + diem_sinh) / 4;
  
    if (diem_tb >= 9 && diem_tb <= 10) {
      console.log("Xếp loại: Giỏi");
    } else if (diem_tb >= 7 && diem_tb < 9) {
      console.log("Xếp loại: Khá");
    } else if (diem_tb >= 5 && diem_tb < 7) {
      console.log("Xếp loại: Trung bình");
    } else {
      console.log("Xếp loại: Yếu");
    }
  }
  
  function tinh_diem_trung_binh_switch() {
    let diem_toan = parseFloat(prompt("Nhập điểm Toán: "));
    let diem_ly = parseFloat(prompt("Nhập điểm Lý: "));
    let diem_hoa = parseFloat(prompt("Nhập điểm Hóa: "));
    let diem_sinh = parseFloat(prompt("Nhập điểm Sinh: "));
  
    if (diem_toan < 0 || diem_toan > 10 || diem_ly < 0 || diem_ly > 10 || diem_hoa < 0 || diem_hoa > 10 || diem_sinh < 0 || diem_sinh > 10) {
      console.log("Điểm không hợp lệ.");
      return;
    }
  
    let diem_tb = (diem_toan + diem_ly + diem_hoa + diem_sinh) / 4;
  
    switch (true) {
      case (diem_tb >= 9 && diem_tb <= 10):
        console.log("Xếp loại: Giỏi");
        break;
      case (diem_tb >= 7 && diem_tb < 9):
        console.log("Xếp loại: Khá");
        break;
      case (diem_tb >= 5 && diem_tb < 7):
        console.log("Xếp loại: Trung bình");
        break;
      default:
        console.log("Xếp loại: Yếu");
        break;
    }
    // endchucnang
  }
  