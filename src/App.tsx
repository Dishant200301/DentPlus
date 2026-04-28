import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/modules/core/components/ui/sonner";
import { TooltipProvider } from "@/modules/core/components/ui/tooltip";

import { Layout } from "@/modules/core/components/Layout";
import HomePage from "./modules/home/pages/HomePage";
import AboutPage from "./modules/about/pages/AboutPage";
import ContactPage from "./modules/contact/pages/ContactPage";
import ServicesPage from "./modules/services/pages/ServicesPage";
import ServiceDetailsPage from "./modules/services/pages/ServiceDetailsPage";
import BlogPage from "./modules/blog/pages/BlogPage";
import BlogDetailsPage from "./modules/blog/pages/BlogDetailsPage";
import AppointmentsPage from "./modules/appointments/pages/AppointmentsPage";
import TeamPage from "./modules/team/pages/TeamPage";
import TeamDetailsPage from "./modules/team/pages/TeamDetailsPage";
import NotFoundPage from "@/modules/core/components/NotFoundPage";
import ScrollToTop  from "./modules/core/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/appointment" element={<AppointmentsPage />} />
              <Route path="/doctors" element={<TeamPage />} />
              <Route path="/doctors/:slug" element={<TeamDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

