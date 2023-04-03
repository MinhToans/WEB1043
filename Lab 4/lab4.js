class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    get_full_name() {
      return this.last_name + " " + this.first_name;
    }
  
    get_age() {
      const today = new Date();
      const dob_date = new Date(this.dob);
      const age_in_milliseconds = today - dob_date;
      const age_in_years = Math.floor(age_in_milliseconds / 31536000000);
      const age_in_days = Math.floor(age_in_milliseconds / 86400000);
      return [age_in_years, age_in_days];
    }
  }
  
  const students = [
    new Student(1, "Nguyen", "Van A", "CS01", "vana@gmail.com", "0123456789", "2000-01-01"),
    new Student(2, "Tran", "Thi B", "CS01", "thib@gmail.com", "0123456789", "2001-02-02"),
    new Student(3, "Le", "Van C", "CS01", "vanc@gmail.com", "0123456789", "2002-03-03"),
    new Student(4, "Pham", "Thi D", "CS01", "thid@gmail.com", "0123456789", "2003-04-04"),
    new Student(5, "Hoang", "Van E", "CS01", "vane@gmail.com", "0123456789", "2004-05-05")
  ];
  
  const students_sorted_by_age = students.sort((a, b) => a.get_age()[1] - b.get_age()[1]);
  
  students_sorted_by_age.forEach(student => {
    console.log(`${student.get_full_name()} ${student.get_age()[0]} years old`);
  });
  
  // In ra thông tin BOM
 console.log(`Screen width: ${window.screen.width} Screen height: ${window.screen.height}`);
  