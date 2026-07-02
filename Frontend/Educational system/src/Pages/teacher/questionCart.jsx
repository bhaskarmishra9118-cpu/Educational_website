const Questioncart= ({questions, onAccept, onView})=>{
  return(
    <div>
      {questions.map(question =>{
        return(
          <div key={question.id} className="question-card">
            <h3>{question.title}</h3>
            <p>{question.description}</p>
            <button onClick={() => onAccept(question)}>Accept</button>
            <button onClick={() => onView(question)}>View</button>
          </div>
        )
      })}
    </div>
  )
  

}