


export const fetchURL = async (NoOfQuestion: number, difficultyLevel: DifficultyLevel , quizDomain: Category ) => {
    const url=`https://opentdb.com/api.php?amount=${NoOfQuestion}&difficulty=${difficultyLevel}&category=${quizDomain}&type=multiple`
    const data: Question[] = await (await (await fetch(url)).json()).results
    //console.log('json' , data);
    return data;
}

export enum DifficultyLevel {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export enum Category {
    
    GK = '9' ,
    SN = '17', //Science & Nature
    SP = '21',  //'Sports',
    VH = '28',  //'Vehicles',
    
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type ModifiedQuestion = {
    question: string;
    options: string[];
    correct_answer: string;
}

export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5)

export interface ApplicationState {
    categoryQuiz: Category;
    levelQuiz: DifficultyLevel;
}    

export interface StateAction {
    type: string;
    payload: any;
}