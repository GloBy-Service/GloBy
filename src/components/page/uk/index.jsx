
import '../../../common/style/country.css'
import Comments from '../../elements/comments'
import UkHeader from '../../elements/uk'
import Upload from '../../elements/upload'

const Uk = () => {
  return (
    <div className="Country-Group">
      <UkHeader />
      <Upload />
      <Comments />
    </div>
  )
}

export default Uk