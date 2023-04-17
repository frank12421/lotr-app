import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function LordOfRings() {
  const router = useRouter();
  const { pageName } = router.query;
  const currentBook = volumes.find(({ slug }) => slug === pageName);

  if (!currentBook) {
    return null;
  }

  function VolumeButtonPrevious() {
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
      <Head>
        <title>{currentBook.title}</title>
      </Head>

      <Link href="/">All Volumes</Link>
      <h1>{currentBook.title}</h1>
      <p>{currentBook.description}</p>
      <ul>
        {currentBook.books.map(({ ordinal, title }) => (
          <li key={currentBook.title + ordinal}>
            {ordinal}:{title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src={`/../public${currentBook.cover}`}
          height={230}
          width={140}
          alt={`${currentBook.title}`}
        />
      </div>
      <VolumeButtonPrevious />
      <VolumeButtonNext />
    </div>
  );
}
