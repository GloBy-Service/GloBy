import videoBg from '../../../assets/video/UK.mp4'
import '../../../common/style/country.css'

const UkHeader = () => {
  return (
    <section className="country">
    <video
      className="country-video"
      src={videoBg}
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="country-content">
      <h1>United Kingdom</h1>
      <p>
        Easily verify and analyze UK bank statements with speed, accuracy, and confidence.
      </p>
    </div>
  </section>
  )
}

export default UkHeader