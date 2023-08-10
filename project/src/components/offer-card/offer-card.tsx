import { Offer } from '../../types/offer';
import { Pages } from '../../const';

type OfferCardProps = {
  offerData: Offer;
  id: number;
  page: string;
  onMouseOver?: (key: number) => void;
};

function OfferCard ({id, offerData, page, onMouseOver}: OfferCardProps): JSX.Element {
  // Вопрос про правильность приема!!
  const isMark = offerData.isMark ? 'place-card__bookmark-button--active' : '';
  const handleMouseOver = () => {
    if (onMouseOver) {
      onMouseOver(id);
    }
  };

  // Вопрос про объявление!!
  const imgSize = {
    width: 260,
    height: 200,
  };

  switch(page) {
    case Pages.Main:
      imgSize.width = 260;
      imgSize.height = 200;
      break;

    case Pages.Favorites:
      imgSize.width = 150;
      imgSize.height = 100;
      break;
  }

  return (
    <article
      className={`${page}__card place-card`}
      id={`${id}`}
      onMouseOver={handleMouseOver}
    >
      {offerData.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <a href="#a">
          <img
            className="place-card__image"
            src={offerData.imgs[0].src}
            width={imgSize.width}
            height={imgSize.height}
            alt={offerData.imgs[0].alt}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerData.price} </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`${isMark} place-card__bookmark-button button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offerData.rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#a">
            {offerData.name}
          </a>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
