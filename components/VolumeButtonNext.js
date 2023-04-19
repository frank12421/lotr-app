import { volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function VolumeButtonNext({ currentBook }) {
  console.log(currentBook.title);
  const router = useRouter();
  const currentIndex = volumes.indexOf(currentBook);

  function handleClickNext(currentIndex) {
    if (currentIndex + 1 === volumes.length) {
      router.push(`/volumes/${volumes[0].slug}`);
    } else {
      router.push(`/volumes/${volumes[currentIndex + 1].slug}`);
    }
  }
  if (currentIndex + 1 < volumes.length) {
    return (
      <button
        onClick={() => {
          handleClickNext(currentIndex);
        }}
      >
        Next Volume
      </button>
    );
  }
}
