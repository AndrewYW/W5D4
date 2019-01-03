function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() {
  return '${this.fname} ${this.lname}';
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.forEach(ele => {
      if (ele.conflictsWith(course)) {
        throw 'Course Conflict';
      }
    });

    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function() {
  const courseLoad = {};

  this.courses.forEach(course => {
    courseLoad[course.department] = courseLoad[course.department] || 0;
    courseLoad[course.department] += course.credits;
  });

  return courseLoad;
}

function Course (name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.block = block;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  if (!this.students.includes(student)) {
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(course) {
  if (this.block !== course.block) {
    return false;
  }

  return this.days.some(day => other.days.includes(day));
};