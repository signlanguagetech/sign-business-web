import { Card, CardContent } from "./ui/card";

export function TestimonialCard({
  quote,
  name,
  title,
  youtubeVideoId,
}: {
  quote: string;
  name: string;
  title: string;
  youtubeVideoId: string;
}) {
  return (
    <Card className="group relative overflow-hidden border-white/20 w-80 lg:w-96 flex-shrink-0 snap-center hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-4 lg:p-6">
        {/* Header with name and title */}
        <div className="mb-4 lg:mb-6">
          <h3 className="text-lg lg:text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
        
        {/* YouTube Video Container */}
        <div className="relative mb-4 lg:mb-6 aspect-[9/16] lg:aspect-[9/16] w-full rounded-lg border-2 border-white/20 overflow-hidden bg-black/50">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title={`Testimonial Video from ${name}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            loading="lazy"
          />
          
          {/* Quote overlay that slides up from bottom */}
          <div className="absolute inset-x-0 bottom-10 translate-y-full group-hover:translate-y-10 transition-transform duration-500 ease-out bg-black/80 backdrop-blur-sm p-2 rounded-[10px]">
            <blockquote className="text-white text-xs lg:text-sm leading-relaxed overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-white h-32 pt-2">
              "{quote}"
            </blockquote>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
