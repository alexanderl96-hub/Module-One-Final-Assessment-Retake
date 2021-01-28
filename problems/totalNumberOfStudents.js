/**
* Returns the total number of students in all classes
* 
* @param {object[]} arr - The input array of classes. Objects will be in the form: { subject: "math", studentCount: 30 }
* @returns {number} - The total number of students
* 
* ex: totalNumberOfStudents([{subject: "A", studentCount: 10}, {subject "B", studentCount: 100}])
* returns: 110 
* 
* ex: totalNumberOfStudents([{subject: "Math", studentCount: 50}, {subject: "Gym", studentCount: 17}, {subject: "Art", studentCount: 100}])
* returns: 167
*/

function totalNumberOfStudents(arr, ) {
    let total = 0
    for( let i in arr){
        console.log(arr[i])
        total += arr[i]
        console.log(total)
    }
    //return total

}
totalNumberOfStudents([{subject: "A", studentCount: 10}, {subject: "B", studentCount: 100}])
module.exports = totalNumberOfStudents
