import { volumes } from "../lib/data";
import { useState } from "react";
import { useRouter } from "next/router";

export default function VolumeButtonPrevious({ currentBook }) {
  const router = useRouter();
  const currentIndex = volumes.indexOf(currentBook);

  function handleClickPrevious(currentIndex) {
    if (currentIndex === 0) {
      router.push(`/volumes/${volumes[volumes.length - 1].slug}`);
    } else {
      router.push(`/volumes/${volumes[currentIndex - 1].slug}`);
    }
  }
  if (currentIndex > 0) {
    return (
      <button
        onClick={() => {
          handleClickPrevious(currentIndex);
        }}
      >
        Previous Volume
      </button>
    );
  }
}
