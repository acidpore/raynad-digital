import './AboutUs.css'
import { ABOUT_TEXT } from '../data/landingData'

export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__title-wrap">
          <h2 className="about__title">About Us</h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__body">{ABOUT_TEXT}</p>
          </div>

          <div className="about__image-wrap">
            <div className="about__image-placeholder" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
