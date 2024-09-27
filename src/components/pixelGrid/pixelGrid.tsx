"use client";
import { useEffect, useState } from "react";

export const PixelGrid = () => {
  const [pixelsSelected, setPixelsSelected] = useState<number[]>([]);

  useEffect(() => {
    const storedPixels = localStorage.getItem("arrayPixelsSelected");
    setPixelsSelected(storedPixels ? JSON.parse(storedPixels) : []);
  }, []);

  const getColor = (row: number, col: number) => {
    const pixelIndex = row * 16 + col;
    return pixelsSelected.includes(pixelIndex) ? "bg-gray-950" : "bg-slate-300";
  };

  const handleClick = (row: number, col: number) => {
    const pixelIndex = row * 16 + col;
    const updatedPixels = pixelsSelected.includes(pixelIndex)
      ? pixelsSelected.filter((index) => index !== pixelIndex)
      : [...pixelsSelected, pixelIndex];

    setPixelsSelected(updatedPixels);
    localStorage.setItem("arrayPixelsSelected", JSON.stringify(updatedPixels));
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < 11; i++) {
      const row = [];
      for (let z = 0; z < 16; z++) {
        row.push(
          <div
            key={`${i}-${z}`}
            className={`h-6 w-6 border-r-2 border-b-2 ${getColor(i, z)}`}
            onClick={() => handleClick(i, z)}
          />
        );
      }
      grid.push(
        <div key={i} className="flex flex-row">
          {row}
        </div>
      );
    }
    return grid;
  };

  return <div>{renderGrid()}</div>;
};
