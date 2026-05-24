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
    <Card className="group h-full text-center  hover:text-primary-100 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
      <Link href={href} className="flex flex-col h-full">
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
          <CardTitle className="mt-4 font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
}