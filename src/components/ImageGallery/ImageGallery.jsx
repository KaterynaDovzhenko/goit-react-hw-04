import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImgClick }) {
  return (
    <ul className={css.img_gallery}>
      {items.map((item) => {
        return (
          <li
            className={css.img_gallery_item}
            key={item.id}
            onClick={() =>
              onImgClick({ url: item.urls.full, alt: item.alt_description })
            }
          >
            <div>
              <ImageCard item={item} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
