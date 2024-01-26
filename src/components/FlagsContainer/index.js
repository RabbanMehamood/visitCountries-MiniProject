import './index.css'

const FlagsContainer = props => {
  const {each, onClickBtn} = props
  const {id, name, imageUrl, isVisited} = each

  const onClickRemove = () => {
    onClickBtn(id)
  }

  return (
    <li className="list-item">
      {isVisited ? (
        <div className="listItemContainer">
          <img src={imageUrl} alt="thumbnail" className="flagImage"/>
          <div className="nameRemoveContainer">
            <p className="countryName">{name}</p>
            <button
              type="button"
              onClick={onClickRemove}
              className="removeButton"
            >
              Remove{' '}
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}
export default FlagsContainer
