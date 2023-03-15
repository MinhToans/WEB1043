var a = prompt("Nhập hệ số a:");
var b = prompt("Nhập hệ số b:");
var c = prompt("Nhập hệ số c:");


var a = parseInt(a);
var b = parseInt(b);
var c = parseInt(c);

if (a == 0) {
if (b == 0) {
if (c == 0) {
      document.write("Phương trình vô số nghiệm");
    } else {
      document.write("Phương trình vô nghiệm");
    }
  } else {
    var x = -c / b;
    document.write("Phương trình có nghiệm duy nhất là" + x);
  }
} else {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("Phương trình vô nghiệm");
  } else if (delta == 0) {
    var x = -b / (2 * a);
  } else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.write(
      "Phương trình có 2 nghiệm là : " + x1.toFixed(2) + " " + x2.toFixed(2)
    );
  }
} 