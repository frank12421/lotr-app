import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import { useId, useState } from "react";
import Image from "next/image";

export default function LordOfRings() {
  const router = useRouter();
  const { pageName } = router.query;
  const currentBook = volumes.find(({ slug }) => slug === pageName);

  function VolumeButtonPrevious() {
    const currentBook = volumes.find(({ slug }) => slug === pageName);
    const currentIndex = volumes.indexOf(currentBook);
    const defaultButtonText = currentIndex === 0 ? false : true;
    const [buttontext, setButtonText] = useState(defaultButtonText);

    function handleClickPrevious(currentIndex) {
      if (currentIndex === 0) {
        setButtonText(false);
        router.push(`/volumes/${volumes[volumes.length - 1].slug}`);
      } else {
        setButtonText(true);
        router.push(`/volumes/${volumes[currentIndex - 1].slug}`);
      }
    }

    return (
      <button
        onClick={() => {
          handleClickPrevious(currentIndex);
        }}
      >
        {buttontext ? `Previous Volume` : `Last Volume`}
      </button>
    );
  }

  function VolumeButtonNext() {
    const currentBook = volumes.find(({ slug }) => slug === pageName);
    const currentIndex = volumes.indexOf(currentBook);
    const defaultButtonText =
      currentIndex + 1 === volumes.length ? false : true;
    const [buttontext, setButtonText] = useState(defaultButtonText);

    function handleClickNext(currentIndex) {
      if (currentIndex + 1 === volumes.length) {
        setButtonText(false);
        router.push(`/volumes/${volumes[0].slug}`);
      } else {
        setButtonText(true);
        router.push(`/volumes/${volumes[currentIndex + 1].slug}`);
      }
    }

    return (
      <button
        onClick={() => {
          handleClickNext(currentIndex);
        }}
      >
        {buttontext ? `Next Volume` : `First Volume`}
      </button>
    );
  }

  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{currentBook.title}</h1>
      <p>{currentBook.description}</p>
      <ul>
        {currentBook.books.map(({ ordinal, title }) => (
          <li key={useId}>
            {ordinal}:{title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src={`/../public/images/${currentBook.slug}.png`}
          height={230}
          width={140}
          alt={`${currentBook}`}
        />
      </div>
      <VolumeButtonPrevious />
      <VolumeButtonNext />
    </div>
  );
}
