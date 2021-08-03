import Link from "next/link";
import { Gallery } from "../components/Gallery";

export default function ArtGallery() {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h3>I am the Gallery component</h3>
      <Gallery />
    </div>
  );
}
