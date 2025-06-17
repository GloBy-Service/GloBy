import '../../../common/style/country.css'
import Comments from '../../elements/comments'
import EuropeHeader from '../../elements/europe'
import FlagList from '../../elements/list'
// import Upload from '../../elements/upload'

const Europe = () => {
  return (
    <div className="Country-Group">
      <EuropeHeader />
      {/* <Upload/> */}
      <FlagList />
      <Comments />
    </div>
  )
}

export default Europe