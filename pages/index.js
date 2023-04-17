import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";
import { useId } from "react";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Lord of the Rings</title>
      </Head>

      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={useId()}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
