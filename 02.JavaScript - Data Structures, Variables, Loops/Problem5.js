let students = [
	{ name: "Ivan", score: 5 },
	{ name: "Dimitar", score: 5.5 },
	{ name: "Kristian", score: 4 },
	{ name: "Valentin", score: 6 },
	{ name: "Veselin", score: 3 },
	{ name: "Genadi", score: 5 },
	{ name: "Yavor", score: 3 },
	{ name: "Marin", score: 5.5 },
	{ name: "Kalin", score: 3 },
	{ name: "Yavor", score: 6 }
];



const getExcellentStudentsFromClass = (studentClass) => {
    //Check if the input is array...
    if (!Array.isArray(studentClass)) {
        throw new Error("The input must be array from students!");
    }
    //Check if the input is not empty...
    if (!studentClass.length) {
        throw new Error("Cannot pass empty array of students!");
    }
    //Check the structure of every single object is { name, score }...
    if (studentClass.some(student => !student.hasOwnProperty("name") || !student.hasOwnProperty('score'))) {
        throw new Error("Student must have properties - { name and grade } ");
    }
    //Check if student score is of type number...
    if (studentClass.some(student => typeof (student.score) !== 'number')) {
        throw new Error("Student grade must be of type number!");
    }
    //Check if student's grade is between 2 and 6...
    if (studentClass.some(student => student.score < 2 || student.score > 6)) {
        throw new Error("Student grade must be number between 2 and 6");
    }
    //Check if the type of student's name is string
    if (studentClass.some(student => typeof (student.name) !== 'string')) {
        throw new Error("Student name must be of type string")
    }
    //Check if the length of student's name is at least 3 symbols...
    if (studentClass.some(student => student.name.length < 3)) {
        throw new Error("Student name must be at least 3 symbols");
    }

    const fillteredStudents = studentClass.filter(student => student.score >= 5.5);

    if(fillteredStudents.length > 1){
        fillteredStudents.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
    }

    return fillteredStudents;
}


const excellentStudents = getExcellentStudentsFromClass(students);

console.log(excellentStudents);