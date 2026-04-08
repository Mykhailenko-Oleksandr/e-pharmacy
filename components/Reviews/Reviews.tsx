import clsx from "clsx";
import css from "./Reviews.module.css";
import { Review } from "@/types/review";
import ReviewCard from "../ReviewsCard/ReviewCard";

interface Props {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props) {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>Reviews</h2>
        <p className={css.description}>
          Search for Medicine, Filter by your location
        </p>

        {reviews.length > 0 && (
          <ul className={css.list}>
            {reviews.map((review) => {
              return <ReviewCard review={review} key={review._id} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
