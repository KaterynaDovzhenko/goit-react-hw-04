import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImgClick }) {
  return (
    <img
      onClick={() =>
        onImgClick({ url: item.urls.full, alt: item.alt_description })
      }
      className={css.img}
      src={item.urls.small}
      alt={item.alt_description}
    />
  );
}
