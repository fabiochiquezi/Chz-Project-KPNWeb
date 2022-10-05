import React from 'react'
import BoxWork from '../../../components/Boxes/Work'
import { Title } from '../../../components/Titles/Default'
import { Section } from './styles'

const Portfolio: React.FC = () => {
    return (
        <Section>
            <Title title="What are we proud of" />

            <div className="content">
                <BoxWork
                    src="./sec-portfolio/job-star-list.png"
                    title="Star List"
                    description="A Web App where you can build your own list of works you've watched, read, played..."
                    url="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
                />
                <BoxWork
                    src="./sec-portfolio/job-my-dashboard.png"
                    title="CHZ Dashboard"
                    description="A generic Web Dashboard built with Firebase and React"
                    url="https://github.com/fabiochiquezi/Chz-Dashboard-Web"
                />
                <BoxWork
                    src="./sec-portfolio/job-kpn-project.png"
                    title="KPN Project"
                    description="A project to bring together people who want to learn and produce a portfolio together, building amazing projects."
                    url="https://github.com/fabiochiquezi/Chz-ProjectKPN-Web"
                />
            </div>
        </Section>
    )
}

export default Portfolio
