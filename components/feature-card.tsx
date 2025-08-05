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
    <div className="flex flex-col items-center">
      <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="mt-4 text-xl font-headline font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}