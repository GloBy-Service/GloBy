
import '../../../common/style/country.css'
import Comments from '../../elements/comments'
import Upload from '../../elements/upload'
import UsaHeader from '../../elements/usa'

function country() {
  return (
    <div className="Country-Group">
      <UsaHeader />
      <Upload />
      <Comments />
    </div>
  )
}

export default country