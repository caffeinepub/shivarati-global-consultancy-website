import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

interface StaticSiteLayoutProps {
  children: ReactNode;
}

export function StaticSiteLayout({ children }: StaticSiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
