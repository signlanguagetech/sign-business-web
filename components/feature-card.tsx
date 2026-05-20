import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center h-full">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
