const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-3 h-3 rounded-full bg-foreground animate-pulse-slow" />
        </div>
        <h1 className="text-lg font-medium tracking-wide text-foreground uppercase">
          Under Construction
        </h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Something great is on its way. Check back soon.
        </p>
      </div>
    </div>
  );
};

export default Index;
