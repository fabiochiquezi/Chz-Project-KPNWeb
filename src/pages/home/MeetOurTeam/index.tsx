import React from 'react'
import { TeamPlayer } from '../../../components/Boxes/TeamPlayer'
import { Title } from '../../../components/Titles/Default'
import { Section } from './styles'

const MeetOurTeam: React.FC = () => {
    return (
        <Section className="sec">
            <Title title="Meet Our Team" />

            <div className="content">
                <TeamPlayer
                    src="./sec-meet-our-team/person-1.png"
                    name="Fábio Chiquezi"
                    role="Founder / Developer / Designer"
                />
            </div>
        </Section>
    )
}

export default MeetOurTeam
