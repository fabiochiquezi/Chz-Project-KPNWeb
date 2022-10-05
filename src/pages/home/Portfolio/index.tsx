import React from 'react'
import BoxWork from '../../../components/Boxes/Work'
import { Title } from '../../../components/Titles/Default'
import { Section } from './styles'

const Portfolio: React.FC = () => {
    return (
        <Section>
            <Title title="What we proud of" />

            <div className="content">
                <BoxWork
                    src="./sec-portfolio/job-star-list.png"
                    title="Star List"
                    description="A WebApp where you can build your own list of works you've been watching, reading, playing..."
                    url="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
                />
                <BoxWork
                    src="./sec-portfolio/job-my-dashboard.png"
                    title="CHZ Dashboard"
                    description="A generic Web Dashboard build up with Firebase and React"
                    url="https://github.com/fabiochiquezi/Chz-Dashboard-Web"
                />
                <BoxWork
                    src="./sec-portfolio/job-kpn-project.png"
                    title="KPN Project"
                    description="A project to gather people who want to learn and produce portfolio together, building amazing projects."
                    url="https://github.com/fabiochiquezi/Chz-ProjectKPN-Web"
                />
            </div>
        </Section>
    )
}

export default Portfolio
