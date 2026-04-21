"use client";

import { useEffect, useState } from "react";
import css from "./ProductTags.module.css";
import clsx from "clsx";
import { Review } from "@/types/review";
import { Description } from "@/types/description";
import Image from "next/image";
import StarsRating from "../StarsRating/StarsRating";
import Pagination from "../Pagination/Pagination";

interface Props {
  reviews: Review[];
  description: Description[];
}

export default function ProductTags({ reviews, description }: Props) {
  const [tags, setTags] = useState<"description" | "review">("description");
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let timeAgo = "";
    if (diffInSeconds < 60) {
      timeAgo = `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      timeAgo = `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 2592000) {
      timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 31536000) {
      timeAgo = `${Math.floor(diffInSeconds / 2592000)} months ago`;
    } else {
      timeAgo = `${Math.floor(diffInSeconds / 31536000)} years ago`;
    }
    return timeAgo;
  }

  return (
    <div className={css.box}>
      <div className={css.tagsBox}>
        <button
          type="button"
          onClick={() => setTags("description")}
          className={clsx(css.tag, tags === "description" && css.currentTag)}
        >
          Description
        </button>
        <button
          type="button"
          onClick={() => setTags("review")}
          className={clsx(css.tag, tags === "review" && css.currentTag)}
        >
          Reviews
        </button>
      </div>

      {tags === "description" && description.length > 0 && (
        <ul className={css.content}>
          {description.map((desc) => (
            <li key={desc.title}>
              <p className={css.description}>
                <span>{desc.title}: </span>
                {desc.content}
              </p>
            </li>
          ))}
        </ul>
      )}

      {tags === "description" && description.length === 0 && (
        <p className={css.description}>No description available.</p>
      )}

      {tags === "review" && reviews.length > 0 && (
        <>
          <ul className={css.content}>
            {currentReviews.map((review) => (
              <li key={review._id} className={css.review}>
                <div className={css.reviewTopBox}>
                  <div className={css.nameImgBox}>
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
                    <div className={css.nameBox}>
                      <p className={css.name}>{review.name}</p>
                      <p className={css.date}>{formatDate(review.createdAt)}</p>
                    </div>
                  </div>
                  <div className={css.ratingBox}>
                    {isMobile ? (
                      <svg width={16} height={16} className={css.starIcon}>
                        <use href="/sprite.svg#star"></use>
                      </svg>
                    ) : (
                      <StarsRating rating={review.rating ? review.rating : 0} />
                    )}

                    <p className={css.rating}>
                      {Math.floor(review.rating ? review.rating : 0)}
                    </p>
                  </div>
                </div>
                <p className={css.testimonial}>{review.testimonial}</p>
              </li>
            ))}
          </ul>

          {reviews.length > 3 && (
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              updatePage={setCurrentPage}
            />
          )}
        </>
      )}

      {tags === "review" && reviews.length === 0 && (
        <p className={css.description}>No reviews available.</p>
      )}
    </div>
  );
}
