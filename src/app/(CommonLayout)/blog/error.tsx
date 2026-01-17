"use client";

import { useEffect } from "react";

const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {

    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);
  return (
    <div>
      <h1>Something went wrong! Please try again later.</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default error;
