import './index.css'

const QuestionArea = props => {
  const {filteredQuestion, onOptionSelection} = props
  const {questionText, options} = filteredQuestion

  const onClickOption = event => {
    onOptionSelection(event.target.value)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1 className="question">{questionText}</h1>
      <div className="options">
        {options.map(each => (
          <button
            type="button"
            onClick={onClickOption}
            className="option"
            value={each.id}
            key={each.id}
          >
            {each.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionArea
