import React, { FC, useState } from 'react'
import { Div } from './styles'

interface props {
    question: string
    answer: string
}

const Question: FC<props> = ({ question, answer }) => {
    const [answerShow, setAnswerShow] = useState(false)
    return (
        <Div>
            <h6
                className="button-anim"
                onClick={() => setAnswerShow((state) => !state)}
            >
                + {question}
            </h6>
            {answerShow && <p>{answer}</p>}
        </Div>
    )
}

export default Question
