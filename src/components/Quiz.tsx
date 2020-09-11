import React, { useState, useContext } from 'react';
import { fetchURL, Question, ModifiedQuestion, shuffleArray } from './../API/FetchAPI';
import {  Wrapper, ButtonWrapper } from './../App.styles';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate  } from 'react-router';
import {  Rotate2 } from './../App.styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    /* minWidth: 275,
    width: 600,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center', */    
    //backgroundColor: 'black',
    backgroundImage: `url(${require("./../images/quiz.jpg")})`,
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    width: 380,
  },
  btnNext: {
    backgroundColor: 'lightblue',
    color:'maroon',
    fontSize: 14,
    borderColor: 'maroon',
    borderWidth: 2,
    width: 150,
    height: 30,
    borderRadius: 20,
  },
  btnStart:{
    
    backgroundColor: 'lightblue',
    fontSize: 14,
    borderColor: 'maroon',
    borderWidth: 5,
    width: 90,
    height: 90,
    borderRadius: 70,
    color: 'grey',
  }
});

function Quiz() {
    const navigate = useNavigate();
    const { levelQuiz } = useContext(GlobalContext);
    const { categoryQuiz } = useContext(GlobalContext);
    console.log('levelQuiz', levelQuiz)
    console.log('categoryQuiz', categoryQuiz)
    //const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [quizData, setQuizData] = useState<Question[]>([]);
    const [qno, setQNO] = useState(0);
    const [start, setStart ] = useState(false)
    const [next, setNext ] = useState(false)
    const [finish, setFinish] = useState(false)
    const TOTAL_QUES = 5;
    const [currentQuestion, setCurrentQuestion] = useState<ModifiedQuestion>();
    const [userAns, setUserAns] = useState('');
    const startQuiz = async () => {
        setStart(true)
        setGameOver(false);        
        const data: Question[] = await fetchURL(TOTAL_QUES, levelQuiz , categoryQuiz);        
        setQuizData(data);
        setQNO(0);
        setScore(0);
        let a: ModifiedQuestion={question: data[0].question, options: shuffleArray([...data[0].incorrect_answers , data[0].correct_answer]), correct_answer: data[0].correct_answer};        
        setCurrentQuestion(a);        
        //console.log('currentQuestion', currentQuestion?.question );
        setStart(false);
    }

    const goToNextQuestion = async () => {        
        const num = qno + 1;
        
        if (num < 5){
          setQNO(num);  
          setNext(false)      
          setCurrentQuestion({question: quizData[num].question, options: shuffleArray([...quizData[num].incorrect_answers , quizData[num].correct_answer]), correct_answer: quizData[num].correct_answer});        
        }
        else{
         
          setFinish(true)   
        }
        
    }
    
    const goToRestart = async () => {                    
      navigate("/");    
  }

    const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
       setUserAns(e.currentTarget.value)
       setNext(true);
       if (currentQuestion?.correct_answer === e.currentTarget.value){
        setScore(score+1)
       }
    }

    const classes = useStyles();      
  return (
    <>
    { gameOver || qno === TOTAL_QUES ? ( <Wrapper>
      <button onClick={ startQuiz } className={classes.btnStart}>
        <h2>Begin Quiz</h2>
      </button> </Wrapper> ): null}
     {start ? (  <Wrapper>
      <p>
        Loading ...
      </p> </Wrapper> ): null}
      {!start && !gameOver ? ( <Wrapper>
        <div> <h3 > Score: [ {score} ] </h3> </div>
       <div> Question # { qno+1 } / { TOTAL_QUES } </div>
      
       <Card className={classes.root} variant="outlined">             
      <CardContent>
      
        <Typography component="p"  gutterBottom>
          { currentQuestion?.question }
        </Typography>                             
      { currentQuestion?.options.map (answer => (
        <ButtonWrapper
        correct = { currentQuestion?.correct_answer === answer && answer === userAns }
        userClicked = { userAns === answer }
      >
        
        <button  disabled={ next } value={answer} onClick={ checkAnswer } className={classes.btn}>
            <span dangerouslySetInnerHTML={{ __html: answer}} />
        </button> <br />
        </ButtonWrapper>
      ))}
      </CardContent>
      
      </Card>
      
        </Wrapper>
       ): null}

<Wrapper>
      {!gameOver && !start && qno !== TOTAL_QUES && next && !finish ?(
      <button onClick={ goToNextQuestion } className={classes.btnNext} >
        Next
      </button> ): null}

      {!gameOver && !start && finish ?(
        <>
         <Rotate2>               
         <div id="anim" > Quiz Completed </div>        
       </Rotate2>  
      <button onClick={ goToRestart } className={classes.btnNext} >
        Restart Quiz
      </button> </>): null} 
      </Wrapper> 

       
      
      
    </>
  );
}

export default Quiz;

