import videoBg from '../../../assets/video/Europe.mp4'
import '../../../common/style/country.css'

const Europe = () => {
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
      <h1>Europe</h1>
      <p>
        Easily verify and analyze U.S. bank statements with speed, accuracy,
        and confidence.
      </p>
    </div>
  </section>
  )
}

export default Europe