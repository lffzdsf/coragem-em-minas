import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export default function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "instagram-embed-script";
    const process = () => window.instgrm?.Embeds.process();

    if (document.getElementById(scriptId)) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, [url]);

  return (
    <div ref={ref} className={`w-full overflow-hidden rounded-sm bg-navy-light/40 border border-blue-vibrant/20 ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "transparent", border: 0, margin: 0, maxWidth: "100%", minWidth: "280px", width: "100%" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-vibrant underline text-sm p-4 block">
          Ver publicação no Instagram
        </a>
      </blockquote>
    </div>
  );
}
