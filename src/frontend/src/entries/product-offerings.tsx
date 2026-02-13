import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { StaticSiteLayout } from '@/layouts/StaticSiteLayout';
import { ProductOfferingsPage } from '@/pages/ProductOfferingsPage';
import { safeMount } from '@/utils/safeMount';
import '@/index.css';

const queryClient = new QueryClient();

safeMount(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <StaticSiteLayout>
          <ProductOfferingsPage />
        </StaticSiteLayout>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
