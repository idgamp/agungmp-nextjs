import Image from "next/image";
import Link from "next/link";

export default function SubscribeOrc() {
  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-64">
      <Link href={"#"}>
        <Image src={"/pixel-orc.webp"} width={300} height={300} alt="Orc" />
      </Link>
    </div>
  );
}
