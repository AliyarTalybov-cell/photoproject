import Image from "next/image";

const RATIO_CLASS: Record<string, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

const WEDDING_PHOTOS = [
  { src: "/images/weddings/sunset-couple.jpg", alt: "Пара на берегу на закате" },
  { src: "/images/weddings/newlyweds-sunset.jpg", alt: "Молодожёны в тёплом вечернем свете" },
  { src: "/images/weddings/bridal-bouquet.jpg", alt: "Свадебный букет" },
  { src: "/images/weddings/wedding-toast.jpg", alt: "Свадебный тост" },
  { src: "/images/weddings/rings-bouquet.jpg", alt: "Обручальные кольца в букете" },
  { src: "/images/weddings/hands-rings.jpg", alt: "Руки молодожёнов с кольцами" },
] as const;

function hash(seed: string, i: number): number {
  let h = 2166136261;
  const s = `${seed}-${i}`;
  for (let n = 0; n < s.length; n++) {
    h ^= s.charCodeAt(n);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export default function Frame({
  seed,
  index,
  ratio = "portrait",
  className = "",
  alt,
}: {
  seed: string;
  index: number;
  ratio?: string;
  className?: string;
  alt?: string;
}) {
  const photo = WEDDING_PHOTOS[hash(seed, index) % WEDDING_PHOTOS.length];

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${RATIO_CLASS[ratio] ?? RATIO_CLASS.portrait} ${className}`}
      role="img"
      aria-label={alt ?? photo.alt}
    >
      <Image
        src={photo.src}
        alt={alt ?? photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        priority={seed === "hero"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" aria-hidden="true" />
    </div>
  );
}
