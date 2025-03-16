import css from "./ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <img className={css.img} src={item.urls.small} alt={item.description} />
  );
}
