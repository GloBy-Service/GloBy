
import '../../../common/style/country.css'
import Comments from '../../elements/comments'
import FlagListUk from '../../elements/listUk'
import UkHeader from '../../elements/uk'
// import Upload from '../../elements/upload'

const Uk = () => {
  return (
    <div className="Country-Group">
      <UkHeader />
      {/* <Upload /> */}
      <FlagListUk />
      <Comments />
    </div>
  )
}

export default Uk