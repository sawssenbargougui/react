import { useParams } from 'react‐router‐dom'
  
function Survey() {
    const { questionNumber } = useParams()
  
9
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
        </div>
    )
}
export default Survey
