import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  IndianRupee,
  Cloud,
  Lightbulb,
  Navigation,
  Landmark
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ItineraryTimeline from '@/components/ItineraryTimeline.jsx';
import RestaurantRecommendations from '@/components/RestaurantRecommendations.jsx';
import { destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!destination) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Destination not found</h2>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to explore
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${destination.name} - Travel guide and itinerary`}</title>
        <meta name="description" content={destination.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Back Button */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to explore
            </Button>
          </div>

          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      {destination.state}
                    </Badge>
                    {destination.travelType.map((type) => (
                      <Badge key={type} variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {type}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {destination.name}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                    {destination.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ideal duration</p>
                    <p className="text-lg font-semibold">{destination.idealDuration}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <IndianRupee className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated budget</p>
                    <p className="text-lg font-semibold">
                      ₹{destination.budget.min.toLocaleString('en-IN')} - ₹{destination.budget.max.toLocaleString('en-IN')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best time to visit</p>
                    <p className="text-lg font-semibold">{destination.bestTime}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Attractions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-semibold">Famous attractions</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {destination.attractions.map((attraction, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Weather and Travel Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    Weather details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {destination.weather}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Travel tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {destination.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Local Transport */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  Local transport
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {destination.transport}
                </p>
              </CardContent>
            </Card>

            {/* Day-wise Itinerary */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Day-wise itinerary</h2>
              <ItineraryTimeline itinerary={destination.dayWiseItinerary} />
            </section>

            {/* Restaurant Recommendations */}
            <section>
              <RestaurantRecommendations destination={destination} />
            </section>

            {/* Bottom Back Button */}
            <div className="flex justify-center pt-8">
              <Button onClick={() => navigate('/')} size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to explore
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default DestinationDetailPage;