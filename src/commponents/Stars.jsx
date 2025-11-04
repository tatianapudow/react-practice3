import ReactStars from "react-stars";

export default function StarRating({ rating }) {
  return(
    <div className="flex items-center gap-1">
        <ReactStars
            count={5}
            value={rating}
            size={24}
            isHalf={true}
            edit={false}
            activeColor="#ffd700"
            />
        <span className="ml-2 text-gray-500 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
}
