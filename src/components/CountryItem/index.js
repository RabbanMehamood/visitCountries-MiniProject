import './index.css'

const CountryItem = props => {
    const {each,onClickBtn} = props
    const {id,name,isVisited} = each 
    const onClickVisitBtn = () => {
        onClickBtn(id)
    }

    return (
        <li className="list-item">
        <div className="nameVisitContainer">
        <p className="countryName">{name}</p>
        { isVisited ? ( <p className="visitButton">Visited</p>)
        : ( <button 
        type="button"
        onClick={onClickVisitBtn}
        className="visitButtonStyles">Visit</button>
        )}
        </div>
        </li>
    )
}
export default CountryItem