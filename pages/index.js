import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>

      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
