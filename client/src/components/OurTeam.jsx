import './OurTeam.css'
import { TEAM_MEMBERS } from '../data/landingData'

export default function OurTeam() {
  return (
    <section className="team" id="team">
      <div className="team__inner">
        <h2 className="team__title">Our Team</h2>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="team-card">
              <div
                className="team-card__photo"
                style={{
                  background: `linear-gradient(145deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`,
                }}
              />
              <p className="team-card__name">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
