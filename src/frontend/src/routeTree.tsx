import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductOfferingsPage } from './pages/ProductOfferingsPage';
import { GDPRPage } from './pages/GDPRPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const productOfferingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product-offerings',
  component: ProductOfferingsPage,
});

const gdprRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gdpr',
  component: GDPRPage,
});

const whyChooseUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-choose-us',
  component: WhyChooseUsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/disclaimer',
  component: DisclaimerPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productOfferingsRoute,
  gdprRoute,
  whyChooseUsRoute,
  contactRoute,
  disclaimerRoute,
]);
