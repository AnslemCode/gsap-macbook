interface MacbookStore {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
}
