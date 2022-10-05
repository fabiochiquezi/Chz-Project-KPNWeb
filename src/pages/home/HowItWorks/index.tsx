import React from 'react'
import Question from '../../../components/Colapse/Question'
import { Title } from '../../../components/Titles/Default'
import { Section } from './styles'

const HowItWorks: React.FC = () => {
    return (
        <Section>
            <Title title="How It Works">
                <p>
                    The project is still new, so honestly, we don&apos;t have
                    yet all settled up, so come and help us to build it.
                </p>
            </Title>

            <div className="content">
                <div className="block">
                    <h3>About the work</h3>

                    <Question
                        question="What kind of projects does the group do?"
                        answer="Web/App Software and open-source"
                    />

                    <Question
                        question="What do I need to join the group?"
                        answer="
                            1) Intermediate English: At least a small level of communication is needed to work as a team.
                            2) Working with development or design.
                            3) Want to learn, make friends and build great projects
                        "
                    />

                    <Question
                        question="How many people can participate?"
                        answer="At this time we are targeting a small group of 5 people, so if it is full we will form a group to wait"
                    />

                    <Question
                        question="How can I apply?"
                        answer="Below is a direct link to my WhatsApp or Discord, send your name, country, profession, portfolio/github and why you want to join us"
                    />
                </div>
            </div>
        </Section>
    )
}

export { HowItWorks }
