import './Hero.css'

const VIDEO_BG_SRC = '/landing-video.mp4'

const HIGHLIGHTS = [
  {
    id: 'highlight-1',
    title: 'Business System & Growth Consultant',
    description: null,
  },
  {
    id: 'highlight-2',
    title: 'Focus on Integrated Business System and Customer Loyalty',
    description: null,
  },
  {
    id: 'highlight-3',
    title: 'Combine Business Strategy + System Architecture',
    description: null,
  },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero__video-bg"
        src={VIDEO_BG_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Transform Fragmented Operations into Integrated Ecosystems
        </h1>
        <p className="hero__subtitle">
          We design integrated business ecosystems that drive efficiency and long term customer value
        </p>

        <a href="#contact" className="hero__cta">Start Your Transformation</a>

        <div className="hero__badges">
          {HIGHLIGHTS.map((item) => (
            <span key={item.id} className="hero__badge">
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
