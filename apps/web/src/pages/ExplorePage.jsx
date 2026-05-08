import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import DestinationCard from '@/components/DestinationCard.jsx';
import { destinations } from '@/data/destinations';
import { Compass } from 'lucide-react';

function ExplorePage() {
  const [filters, setFilters] = useState({
    search: '',
    state: 'All States',
    budgetMax: 100000,
    travelTypes: []
  });

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          destination.name.toLowerCase().includes(searchLower) ||
          destination.description.toLowerCase().includes(searchLower) ||
          destination.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // State filter
      if (filters.state !== 'All States' && destination.state !== filters.state) {
        return false;
      }

      // Budget filter
      if (destination.budget.min > filters.budgetMax) {
        return false;
      }

      // Travel type filter
      if (filters.travelTypes.length > 0) {
        const hasMatchingType = filters.travelTypes.some((type) =>
          destination.travelType.includes(type)
        );
        if (!hasMatchingType) return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      state: 'All States',
      budgetMax: 100000,
      travelTypes: []
    });
  };

  return (
    <>
      <Helmet>
        <title>Explore India - Discover incredible destinations</title>
        <meta
          name="description"
          content="Explore curated travel itineraries across India. From beaches to mountains, spiritual journeys to adventure trips - find your perfect destination."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto space-y-6"
              >
                <div className="flex justify-center">
                  <Compass className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Explore India
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Discover handpicked destinations with detailed itineraries, local insights, and authentic experiences across incredible India.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filters and Results */}
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <FilterBar
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onClearFilters={handleClearFilters}
                    />
                  </div>
                </div>

                {/* Destination Grid */}
                <div className="lg:col-span-3">
                  {filteredDestinations.length > 0 ? (
                    <>
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground">
                          Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredDestinations.map((destination, index) => (
                          <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-20"
                    >
                      <Compass className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your filters to discover more destinations
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ExplorePage;