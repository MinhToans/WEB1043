let hoTen = prompt("Họ và Tên: ");
let gioiTinh = prompt("Giới tính: ");

//tách họ, tên đệm và tên riêng
let hoTenArr = hoTen.trim().split(" ");
let ho = hoTenArr[0];
let tenDem = hoTenArr.slice(1, -1).join(" ");
let ten =hoTenArr[hoTenArr.length - 1];


//thay đổi tên đệm 
if (gioiTinh.toLowerCase() === "Nam") {
    tenDem = " Văn ";
} else if (gioiTinh.toLowerCase() === "Nữ") {
    tenDem = " Vẽ ";
}
//in ra kết quả
document.write(`Họ: ${ho}`);
document.write(`Ten Dem: ${tenDem}`);
document.write(`Ten: ${ten}`);

let tenMoi = `${ho} ${tenDem} ${ten}`;
document.write(`Tên mới của bạn:${tenMoi}`);