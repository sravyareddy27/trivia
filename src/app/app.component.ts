import { Component } from '@angular/core';
import { Service } from './service';
import { ResponseObject, QuestionsObject } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incorrectAnsCount: number;
  correctAnsCount: number;
  calculatedResults = false;
  constructor(private readonly service: Service) {}
  events: string[] = [];
  opened = true;
  category: number;
  selectedAnswers = [];
  type: string;
  difficulty: string;
  data: QuestionsObject[];
  selectcategory = [
    { value: '9', viewValue: 'General Knowledge' },
    { value: '10', viewValue: 'Entertainment: Books' },
    { value: '11', viewValue: 'Entertainment: Film' },
    { value: '12', viewValue: 'Entertainment: Music' },
    { value: '13', viewValue: 'Entertainment: Musical and Theatres' },
    { value: '14', viewValue: 'Entertainment: Telivision' },
    { value: '15', viewValue: 'Entertainment: Video Games' },
    { value: '16', viewValue: 'Entertainment: Board Games' },
    { value: '17', viewValue: 'Science and Nature' },
    { value: '18', viewValue: 'Science: Computers' },
    { value: '19', viewValue: 'Science:Mathematics' },
    { value: '20', viewValue: 'Mythology' },
    { value: '21', viewValue: 'Sports' },
    { value: '22', viewValue: 'Geography' },
    { value: '23', viewValue: 'History' },
    { value: '24', viewValue: 'Politics' },
    { value: '25', viewValue: 'Art' },
    { value: '26', viewValue: 'Celebrities' },
    { value: '27', viewValue: 'Animals' },
    { value: '28', viewValue: 'Vehicles' },
    { value: '29', viewValue: 'Entertainment:comics' },
    { value: '30', viewValue: 'Science:Gadgets' },
    { value: '31', viewValue: 'Entertainment: Japanese Anime and Manga' },
    { value: '32', viewValue: 'Entertainment: Cartoons and Animations' }
  ];
  SelectDifficulty = [
    { value: 'easy', viewValue: 'Easy' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'hard', viewValue: 'Hard' }
  ];
  SelectType = [
    { value: 'multiple', viewValue: 'MultipleChoice' },
    { value: 'boolean', viewValue: 'True/False' }
  ];
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {}
  selectCat(category: number) {
    this.category = category;
    this.filterResults();
  }
  selectDifficulty(difficulty: string) {
    this.difficulty = difficulty;
    this.filterResults();
  }
  selectType(type: string) {
    this.type = type;
    this.filterResults();
  }
  filterResults() {
    this.service
      .get(this.category, this.type, this.difficulty)
      .subscribe((res: ResponseObject) => {
        this.data = res.results.map(obj => {
            obj.randomOptions = this.randomizeAnswers(
              obj.correct_answer,
              obj.incorrect_answers
            );
            return obj;
        });
      });
  }
  randomizeAnswers( correctAnswer: string, incorrectAnswers: string[]): string[] {
    let finalAnswers = incorrectAnswers;
    finalAnswers.push(correctAnswer);
    const array = [];
    while (finalAnswers.length !== 0) {
      const randomIndex = Math.floor(Math.random() * finalAnswers.length);
      array.push(finalAnswers[randomIndex]);
      finalAnswers.splice(randomIndex, 1);
    }
    finalAnswers = array;
    return finalAnswers;
  }
  radioChange(selectedOption: string, selectedQuestion: QuestionsObject): void {
    const sampleobj = {
      selectedOption,
      selectedQuestion
    };
    this.selectedAnswers.forEach((data , i) => {
      // console.log('data', JSON.stringify(data));
      if (data.selectedQuestion.question === selectedQuestion.question) {
        this.selectedAnswers.splice(i, 1);
      }
    });
    this.selectedAnswers.push(sampleobj);
  }
  handleClick() {
    this.correctAnsCount = 0;
    this.incorrectAnsCount = 0;

    this.selectedAnswers.map(opt => {
      if (opt.selectedOption === opt.selectedQuestion.correct_answer) {
        ++this.correctAnsCount;
      } else {
        ++this.incorrectAnsCount;
      }
    });
    this.calculatedResults = true;
    console.log({
      correctAnsCount: this.correctAnsCount,
      incorrectAnsCount: this.incorrectAnsCount
    });
  }
}
