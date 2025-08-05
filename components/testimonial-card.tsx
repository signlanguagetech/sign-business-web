import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "./ui/card";

export function TestimonialCard({
  quote,
  name,
  title,
  avatarUrl,
  avatarFallback,
}: {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  avatarFallback: string;
}) {
  return (
    <Card className="p-6">
      <CardContent className="p-0">
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          {quote}
        </blockquote>
        <div className="mt-4 flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src={avatarUrl}
              alt={name}
              data-ai-hint="person headshot"
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
