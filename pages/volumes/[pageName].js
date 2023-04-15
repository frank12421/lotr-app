import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LordOfRings() {
  const router = useRouter();
  const { pageName } = router.query;
  return (
    <div>
      <p>PageName:{pageName}</p>
    </div>
  );
}
