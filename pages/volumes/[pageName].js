import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import VolumeButtonPrevious from "../../components/VolumeButtonPrevious.js";
import VolumeButtonNext from "../../components/VolumeButtonNext";

import StyledBackground from "./StyledBackground";
import StyledH1 from "./StyledH1";
import StyledBody from "./StyledBody";

export default function LordOfRings() {
  const router = useRouter();
  const { pageName } = router.query;
  const currentBook = volumes.find(({ slug }) => slug === pageName);

  if (!currentBook) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentBook.title}</title>
      </Head>
      <body>
        <div>
          <Link href="/">All Volumes</Link>
        </div>

        <StyledH1>{currentBook.title}</StyledH1>
        <p>{currentBook.description}</p>

        <StyledBackground backgroundcolor={currentBook.color}>
          <ul>
            {currentBook.books.map(({ ordinal, title }) => (
              <li key={currentBook.title + ordinal}>
                {ordinal}:{title}
              </li>
            ))}
          </ul>
          <div>
            <Image
              src={`${currentBook.cover}`}
              height={230}
              width={140}
              alt={`${currentBook.title}`}
            />
          </div>
        </StyledBackground>

        <VolumeButtonPrevious currentBook={currentBook} />

        <VolumeButtonNext currentBook={currentBook} />
      </body>
    </>
  );
}
