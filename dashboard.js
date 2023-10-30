var students = [];

function addStudent() {
  // Gather input values from the modal form fields
  var name = document.getElementById('name').value;
  var classroom = document.getElementById('class').value;
  var percentage = document.getElementById('percentage').value;

  // Validate input values
  if (name === '') {
    document.getElementById('name-error').innerHTML = 'Please enter a name';
    return;
  }
  if (classroom === '') {
    document.getElementById('class-error').innerHTML = 'Please choose a class';
    return;
  }
  if (percentage === '') {
    document.getElementById('percentage-error').innerHTML = 'Please choose a percentage';
    return;
  }

  // Add new student to the array
  let student = {
    name: name,
    classroom: classroom,
    percentage: percentage
  };
  students.push(student);

  // Clear input fields and error messages
  document.getElementById('name').value = '';
  document.getElementById('classroom').value = '';
  document.getElementById('percentage').value = '';
  document.getElementById('name-error').innerHTML = '';
  document.getElementById('classroom-error').innerHTML = '';
  document.getElementById('percentage-error').innerHTML = '';

  // Update the table with the new student
  updateTable();
}

function updateTable() {
  // Clear existing rows from the table
  let table = document.getElementById('student-table');
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Add each student as a new row in the table
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let row = table.insertRow(i + 1);
    let nameCell = row.insertCell(0);
    let classCell = row.insertCell(1);
    let percentageCell = row.insertCell(2);
    nameCell.innerHTML = student.name;
    classCell.innerHTML = student.class;
    percentageCell.innerHTML = student.percentage;
  }
}
