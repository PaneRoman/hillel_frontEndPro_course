class Student {

    #presentList;
    #marks;
    

    constructor(firstName, secondName, birthYear) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthYear = birthYear;
        this.#marks = [];
        this.#presentList = [];
    }

    getAge() {
        const presentYear = new Date().getFullYear();
        let age = presentYear - this.birthYear;
        return age;
    }

    getMarks() {
        return this.#marks;
    }

    getAverageMark() {
        let average = this.#marks.reduce(function(acc, item, i, arr) {
            return acc + item;
        }, 0)

        return Number((average / this.#marks.length).toFixed(2));
    }

    setPresent() {
        if (this.#presentList.length < 25) {
            this.#presentList.push(true);
        }
    }

    setAbsent() {
        if (this.#presentList.length < 25) {
            this.#presentList.push(false);
        }
    }

    setMark(value) {
        if (value <= 5) {
            this.#marks.push(value);
        }
    }

    summary() {
        let presentArr = this.#presentList.filter(item => item);
        let averagePresent = Number((presentArr.length / this.#presentList.length).toFixed(2));
        let averageMark = this.getAverageMark();

        console.log('averagePresent', averagePresent, 'averageMark', averageMark);
        
        if (averagePresent >= 0.9 && averageMark >= 4) {
            return 'Молодец!';
        }

        if ((averagePresent < 0.9 && averageMark >= 4) || (averagePresent >= 0.9 && averageMark < 4)) {
            return 'Хорошо, но можно лучше!';
        }

        if (averagePresent < 0.9 && averageMark < 4) {
            return 'Редиска!';
        }
       
 
    }

}

let student = new Student('Roma', 'Petrov', 1981);
student.setPresent();
student.setAbsent();
student.setPresent();
student.setAbsent();
student.setPresent();
student.setAbsent();
student.setPresent();
student.setPresent();
student.setPresent();
student.setPresent();
student.setPresent();
student.setPresent();
student.setPresent();
student.setMark(5);
student.setMark(3);
student.setMark(3);
student.setMark(4);
student.setMark(5);
student.setMark(5);
student.setMark(5);
student.setMark(5);
student.setMark(5);
student.setMark(5);

console.log(student.getAge());
console.log(student.getMarks());
console.log(student.getAverageMark());
console.log(student.summary());
console.log(student);


let student2 = new Student('Ivanov', 'Dmitry', 1990);
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setPresent();
student2.setAbsent();
student2.setPresent();
student2.setAbsent();
student2.setPresent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setMark(5);
student2.setMark(3);
student2.setMark(3);
student2.setMark(4);
student2.setMark(3);
student2.setMark(3);
student2.setMark(3);
student2.setMark(5);
student2.setMark(5);

console.log(student2.getAge());
console.log(student2.getMarks());
console.log(student2.getAverageMark());
console.log(student2.summary());
console.log(student2);
