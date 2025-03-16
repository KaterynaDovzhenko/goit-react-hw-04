import ClipLoader from "react-spinners/ClipLoader";
export default function Loader({ size = 30, color = "#36d7b7", loading }) {
  return <ClipLoader size={size} color={color} loading={loading}></ClipLoader>;
}
