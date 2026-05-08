import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Star, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchNearbyRestaurants } from '@/utils/RestaurantFetcher';

function RestaurantRecommendations({ destination }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRestaurants() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchNearbyRestaurants(
          destination.coordinates.lat,
          destination.coordinates.lon,
          destination.id
        );
        setRestaurants(data);
      } catch (err) {
        setError('Failed to load restaurant recommendations');
        console.error('Restaurant fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    if (destination?.coordinates) {
      loadRestaurants();
    }
  }, [destination?.id, destination?.coordinates]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            Nearby restaurants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            Nearby restaurants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UtensilsCrossed className="h-5 w-5 text-primary" />
          Nearby restaurants
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Recommended dining options near {destination.name}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-2">
                {/* Name and Rating */}
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-base leading-tight">{restaurant.name}</h4>
                  {restaurant.rating && (
                    <div className="flex items-center gap-1 text-sm font-medium text-primary flex-shrink-0">
                      <Star className="h-4 w-4 fill-current" />
                      {restaurant.rating}
                    </div>
                  )}
                </div>

                {/* Cuisine */}
                {restaurant.cuisine && (
                  <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                )}

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{restaurant.address}</span>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{restaurant.isOpen}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {restaurants.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            No restaurant data available for this location.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default RestaurantRecommendations;