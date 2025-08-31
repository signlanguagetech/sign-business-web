import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from 'next/link';

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="group text-center text-primary-44 hover:text-primary-100 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
      <Link href={href} className="flex flex-col h-full">
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
          <CardTitle className="mt-4 font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <div className="p-6 pt-0">
          <div className="text-primary font-semibold flex items-center justify-center gap-2">
            Learn More{' '}
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
}