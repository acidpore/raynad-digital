import './FeaturedProject.css'
import { PROJECTS } from '../data/landingData'

export default function FeaturedProject() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__title">Featured Project</h2>

        <div className="portfolio__grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-card__bg project-card__img" />
              ) : (
                <div
                  className="project-card__bg"
                  style={{
                    background: `linear-gradient(160deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                  }}
                />
              )}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <button className="project-card__btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
