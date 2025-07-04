import videoBg from '../../../assets/video/Canada.mp4'
import '../../../common/style/country.css'

const CanadaHeader = () => {
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
      <h1>Canada</h1>
      <p>
        Easily verify and analyze Canada bank statements with speed, accuracy, and confidence.
      </p>
    </div>
  </section>
  )
}

export default CanadaHeader