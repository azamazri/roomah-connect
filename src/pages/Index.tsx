import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Selamat Datang di Roomah</h1>
        <p className="text-xl text-muted-foreground mb-6">Platform Ta'aruf Islami untuk menemukan jodoh terbaik Anda!</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus-ring transition-colors"
        >
          Mulai Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Index;
