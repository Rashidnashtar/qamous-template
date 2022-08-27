function PopularTodosItem({
  imageUrl,
  phNum,
  header,
  rating,
  ratingNum,
  location,
  number,
  summary,
  subject,
  state,
  isTrending,
  isTopRated,
  isOffer,
  isSale,
}) {
  console.log(imageUrl);
  return (
    <div className="col-lg-4">
      <div className="popular-todo-item status-closed">
        <div className="todo-thumbnail-area">
          <figure className="item-thumb">
            <img src={imageUrl} alt="Thmubnail" />
          </figure>
          {/*./ item-thumb */}
          <div className="todo-overlay-info">
            {isTopRated && <div className="todo-type rated">top rated</div>}
            {isTrending && (
              <div className="todo-type trending">
                <span className="fa fa-bolt" />
              </div>
            )}
            {isOffer && <div className="todo-type offer">hot offer</div>}
            {isSale && <div className="todo-type sale">sale</div>}
            <div className="todo-meta-bottom">
              <a href="#" className="save">
                <i className="fa fa-heart" />
                save
              </a>
              <a href="#" className="photo">
                <i className="fa fa-image" />
                {phNum} photos
              </a>
            </div>
          </div>
          {/*./ section-header */}
        </div>
        {/*./ todo-overlay-info */}
        <div className="todo-content">
          <h3 className="title">
            <a href="listing-details.html">{header}</a>
          </h3>
          <div className="todo-rating">
            <div className="rating-value">
              <span>{rating}</span>
              {ratingNum} Ratings
            </div>
            <div className="rating-icon">
              <ul>
                <li className="yellow">$</li>
                <li className="yellow">$</li>
                <li className="yellow">$</li>
                <li>$</li>
              </ul>
            </div>
          </div>
          {/*./ todo-rating */}
          <div className="todo-meta">
            <div className="todo-location">
              <span className="icon-location" />
              {location}
            </div>
            <div className="todo-number">
              <span className="icon-phone" />
              {number}
            </div>
          </div>
          {/*./ todo-meta */}
          <div className="todo-summary">
            <p>{summary}</p>
          </div>
        </div>
        {/*./ todo-content */}
        <div className="todo-footer">
          <a href="#" className="todo-cat todo-cat-beauty">
            <span className="icon-grooming" />
            {subject}
          </a>
          <a href="listing-details.html" className="todo-status">
            {state}
          </a>
        </div>
        {/*./ todo-footer */}
      </div>
    </div>
  );
}

export default PopularTodosItem;
