import './index.css'

const HistoryList = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="listCont">
      <div className="searchItemCont">
        <div className="iconCont">
          <p className="date">{timeAccessed}</p>
          <img className="itemImage" src={logoUrl} alt="domain logo" />
          <p className="date">{title}</p>
          <p href={domainUrl}>{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete" onClick={deleteItem}>
          <img
            className="deleteLogo"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
