import React from 'react'
import { Section } from './styles'
import { Title } from '../../../components/Titles/Default'
import { DiscordButton } from '../../../components/Buttons/Discord'
import { WhatsappButton } from '../../../components/Buttons/WhatsApp'

const JoinUs: React.FC = () => {
    return (
        <Section>
            <Title title="Let’s build something amazing together.">
                <p>
                    Send to us your name, country, profession, portfolio/github
                    and why you want to join us. We&apos;ll answer in 24h.
                </p>
            </Title>

            <div className="buttons">
                <DiscordButton user="Chiquezi#3816" />
                <WhatsappButton url="https://wa.me/5519983127035?text=ProjectKPN" />
            </div>
        </Section>
    )
}

export { JoinUs }
