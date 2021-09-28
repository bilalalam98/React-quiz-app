import './App.css';
import { useState } from 'react' 

function App() {
  const questions = [
    {
      title: 'What is HTML?',
      options: [
        'Hyper Text Makeup Language',
        'Hyper Text Markup Language',
        'Hydro Text Markup Land',
        'Hyper Thermometer Markup Language'
      ],
      answer: 'Hyper Text Markup Language'
    },
    {
      title: 'What is CSS?',
      options: [
        'Cyber Security Service',
        'Computer Setting Service',
        'Customer Stylesheet',
        'Cascading Stylesheet',
      ],
      answer: 'Cascading Stylesheet'
    }
    ,{
      title: 'what is js?',
      options: [
        'Javaid Shakir',
        'Java Stylsheet',
        'Java Script',
        'Java Source',
      ],
      answer: 'Java Script'
    },{
      title: 'why react?',
      options: [
        'to be fast, scalable, and simple',
        'to be fast, nonscalable, and simple',
        'to be fast, scalable, and complex',
        'to be slow but  scalable, and simple',
      ],
      answer: 'to be fast, scalable, and simple'
    },{
      title: 'what is  (VDOM)?',
      options: [
        'Visual Document Oriented Model',
        'Vital Document Object Model',
        'Virtual Document Oriented Model',
        'Virtual Document Object Model',
      ],
      answer: 'Virtual Document Object Model'
    },{
      title: 'what is react router?',
      options: [
        'standard library for routing in React.',
        'standard framework for routing in React.',
        'provide network facility to react',
        'allows react to invoke function',
      ],
      answer: 'standard library for routing in React.'
    },{
      title: 'what is reactnative?',
      options: [
        'React framework',
        'React library',
        'React function',
        'nodejs framework',
      ],
      answer: 'React framework'
    },{
      title: 'what is react?',
      options: [
        'JavaScript function',
        'JavaScript framework',
        'JavaScript library',
        'ReactNative framework',
      ],
      answer: 'JavaScript library'
    },{
      title: 'whats ECMA Script?',
      options: [
        'JavaScript standard meant to ensure the interoperability of web pages',
        'JavaScript standard meant to ensure the that components are connected',
        'Python standard meant to ensure the interoperability of web pages',
        'JavaScript standard meant to ensure the testing is working fine',
      ],
      answer: 'JavaScript standard meant to ensure the interoperability of web pages'
    },{
      title: 'what is graphql?',
      options: [
        'a runtime for fulfilling queries with existing data',
        'backend service provider',
        'a graph providing framework',
        'a graph providing library',
      ],
      answer: 'a runtime for fulfilling queries with existing data'
    }
  ]
  const [Selectedrad,setSelectedrad] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Currectans,setCurrectans] = useState(questions[0].answer);
  const [Status,setStatus] = useState('');
  const [Counter,setCounter] = useState(0);
  var val= Counter;
  const nextQuestion = () => {
   
   

    if(questions[currentQuestionIndex+1 ] ){
      
     
   
    setCurrectans(questions[currentQuestionIndex+1].answer);
  
  
    setCurrentQuestionIndex(currentQuestionIndex + 1) ;
    
    
  
  }
 
    else{
     
      setCurrentQuestionIndex(currentQuestionIndex + 1) ;
     }

     console.log({Selectedrad});
    console.log({Currectans});

    if(Selectedrad !== Currectans){
   
     setCounter(val);
    }
    else{
      setCounter(val+1);
    }
    if(Counter === 9){
      setCounter('10')
    }
    setSelectedrad('');
  }


  

  return (
    <div className="App">
      <header className="App-header">
      
    
      {currentQuestionIndex === questions.length  ?
          <div className='divstyle1'>
            <div className='divstyle3' ><h1>Quiz Application</h1></div>  
            <div className='divstyle2'>
            <h1>Quiz Ended</h1>
            <br/> <br/> 
            <h2>you have Scored {Counter} / {questions.length }</h2>
             <br/> <br/> </div>  
            <button onClick={() => {
              setCurrentQuestionIndex(0);
              setCurrectans(questions[0].answer);
              setCounter(0);
              
            }}
            className='but' style={{outline:'none',width:'60%',borderRadius:'20px',fontSize:'21px'}}
            >Start Again</button>
          </div> :
          
          <div className='divstyle1'>
            <div className='divstyle3' ><h3>Quiz Application</h3></div>    
       <span>   <h3 style={{display: 'inline-block' ,}}>Question: </h3>
           <h4 style={{display: 'inline-block'}}>
              {questions[currentQuestionIndex].title} </h4></span>
            
            <h5 >Choose the correct answer!</h5>
            {questions[currentQuestionIndex].options.map((item, index) => {
           
              return ( <div  className={(Status===item ? 'activediv' : 'divstyle')}
              
              key={index}
              > <input
              
              
                onChange={(e) =>{
                
                setSelectedrad(e.target.value);
                setStatus(e.target.value)
              
               
             
              } } 
             
              type='checkbox' name={currentQuestionIndex} value={item} id={index,'radio'} checked={Status===item}  /> {item}</div>)
            })}

            


            <br /><br /><br />
            <button className='but' style={{outline:'none',width:'60%',borderRadius:'20px',fontSize:'21px'}} onClick={nextQuestion} value={Selectedrad}>Next</button>
            
          </div>
        }






      </header>
    </div>
  );
}

export default App;
