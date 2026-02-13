import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { StaticSiteLayout } from '@/layouts/StaticSiteLayout';
import { WhyChooseUsPage } from '@/pages/WhyChooseUsPage';
import { safeMount } from '@/utils/safeMount';
import '@/index.css';

const queryClient = new QueryClient();

safeMount(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <StaticSiteLayout>
          <WhyChooseUsPage />
        </StaticSiteLayout>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
