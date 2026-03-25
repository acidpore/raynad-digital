import './WhyStruggle.css'
import { PAIN_POINTS } from '../data/landingData'

export default function WhyStruggle() {
  return (
    <section className="struggle" id="why-struggle">
      <div className="struggle__inner">
        <div className="struggle__title-wrap">
          <h2 className="struggle__title">Why Most Businesses Struggle</h2>
        </div>

        <div className="struggle__subtitle-wrap">
          <p className="struggle__subtitle">
            Most businesses don&apos;t lack customers, they lack systems
          </p>
        </div>

        <div className="struggle__tags">
          {PAIN_POINTS.map((point) => (
            <span key={point} className="struggle__tag">{point}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
