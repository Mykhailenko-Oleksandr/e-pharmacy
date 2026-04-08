import { Review } from "@/types/review";
import css from "./ReviewCard.module.css";
import Image from "next/image";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <li className={css.item}>
      <div className={css.imgBox}>
        <Image
          src={
            review.avatar
              ? review.avatar
              : "https://res.cloudinary.com/ddln4hnns/image/upload/v1769512644/default-avatar_hlcio8.webp"
          }
          alt="Avatar"
          fill
          loading="lazy"
          className={css.avatarImg}
        />
      </div>
      <h3 className={css.userName}>{review.name}</h3>
      <p className={css.reviewText}>{review.testimonial}</p>
    </li>
  );
}
