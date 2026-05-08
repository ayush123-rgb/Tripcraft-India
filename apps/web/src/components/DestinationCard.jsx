import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, IndianRupee, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function DestinationCard({ destination, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${destination.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        onClick={handleClick}
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* State Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              <MapPin className="h-3 w-3 mr-1" />
              {destination.state}
            </Badge>
          </div>
        </div>

        <CardContent className="flex-1 p-6 space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-200">
            {destination.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {destination.description}
          </p>

          {/* Travel Types */}
          <div className="flex flex-wrap gap-2">
            {destination.travelType.map((type) => (
              <Badge key={type} variant="outline" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{destination.idealDuration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <IndianRupee className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {destination.budget.min.toLocaleString('en-IN')} - {destination.budget.max.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {destination.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default DestinationCard;