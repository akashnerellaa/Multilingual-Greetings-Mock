import './index.css'

const LanguageItem = props => {
  const {item, updateMethod, buttId} = props
  const {buttonText, id} = item
  const langButton = () => {
    updateMethod(id)
  }
  const clsValue = id === buttId ? 'cls' : ''
  return (
    <li className="li-item">
      <button type="button" className={`butt ${clsValue}`} onClick={langButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
