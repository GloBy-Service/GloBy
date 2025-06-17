import '../../../common/style/country.css'
import CanadaHeader from '../../elements/canada'
import Comments from '../../elements/comments'
import Upload from '../../elements/upload'

const Canada = () => {
  return (
    <div className="Country-Group">
      <CanadaHeader />
      <Upload />
      <Comments />
    </div>
  )
}

export default Canada