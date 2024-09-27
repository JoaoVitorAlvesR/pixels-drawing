import { PixelGrid } from "@/components";

export default function Home() {
  return (
    <>
      <h1 className="flex flex-row m-20 items-center justify-center">
        Clique nos quadrados para marcar
      </h1>
      <div className="flex flex-row m-4 items-center justify-center">
        <PixelGrid />
      </div>
    </>
  );
}
