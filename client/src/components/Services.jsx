import './Services.css'
import { SERVICES } from '../data/landingData'

export default function Services() {
  return (
    <section className="services" id="service">
      <div className="services__inner">
        <div className="services__header">
          <h2 className="services__title">Our Services</h2>
          <p className="services__subtitle">
            Building integrated business systems for efficiency and growth.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div
                className="service-card__image"
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`,
                }}
              />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
