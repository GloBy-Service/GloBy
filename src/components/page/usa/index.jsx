
import '../../../common/style/country.css'
import Comments from '../../elements/comments'
import FlagListUsa from '../../elements/listUsa'
// import Upload from '../../elements/upload'
import UsaHeader from '../../elements/usa'

function country() {
  return (
    <div className="Country-Group">
      <UsaHeader />
      {/* <Upload /> */}
      <FlagListUsa/>
      <Comments />
    </div>
  )
}

export default country