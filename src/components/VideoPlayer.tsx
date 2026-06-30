"use client";

import { getBunnyEmbedUrl } from "@/lib/courses";

type VideoPlayerProps = {
  videoId: string;
  title: string;
};

/**
 * Reproductor de video embebido de Bunny.net Stream.
 * Usa el iframe oficial de Bunny para máxima compatibilidad y seguridad.
 */
export const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const embedUrl = getBunnyEmbedUrl(videoId);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-pch-border">
      {/* Aspect ratio 16:9 */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};
