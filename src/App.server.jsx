import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  Route,
  FileRoutes,
  ShopifyProvider,
  PerformanceMetrics,
  PerformanceMetricsDebug,
} from '@shopify/hydrogen';
import {Suspense} from 'react';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import LoadingFallback from './components/LoadingFallback';
import ServerCartProvider from './components/ServerCartProvider.server';
import AnalyticsListener from './components/AnalyticsListener.client';

function App() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <ShopifyProvider>
          <ServerCartProvider>
            <DefaultSeo />
            <Router>
              <FileRoutes />
              <Route path="*" page={<NotFound />} />
            </Router>
          </ServerCartProvider>
          <PerformanceMetrics />
          {import.meta.env.DEV && <PerformanceMetricsDebug />}
        </ShopifyProvider>
      </Suspense>
      <AnalyticsListener />
    </>
  );
}

export default renderHydrogen(App);
