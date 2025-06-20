import '../../../common/style/country.css'
import CanadaHeader from '../../elements/canada'
import Comments from '../../elements/comments'
import FlagListCanada from '../../elements/listCanada'
// import Upload from '../../elements/upload'

const Canada = () => {
  return (
    <div className="Country-Group">
      <CanadaHeader />
      {/* <Upload /> */}
      <FlagListCanada />
      <Comments />
    </div>
  )
}

export default Canada