import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Clock, UtensilsCrossed, Camera, AlertCircle, Navigation } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';

function ItineraryTimeline({ itinerary }) {
  const [openDays, setOpenDays] = useState([0]); // First day open by default

  const toggleDay = (dayIndex) => {
    setOpenDays((prev) =>
      prev.includes(dayIndex)
        ? prev.filter((i) => i !== dayIndex)
        : [...prev, dayIndex]
    );
  };

  const getActivityIcon = (activity) => {
    if (activity.type === 'meal') return UtensilsCrossed;
    if (activity.type === 'evening') return Camera;
    return MapPin;
  };

  return (
    <div className="space-y-4">
      {itinerary.map((day, dayIndex) => {
        const isOpen = openDays.includes(dayIndex);

        return (
          <Collapsible
            key={dayIndex}
            open={isOpen}
            onOpenChange={() => toggleDay(dayIndex)}
          >
            <Card className="overflow-hidden">
              <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                    {day.day}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Day {day.day}</h3>
                    <p className="text-sm text-muted-foreground">{day.title}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t"
                    >
                      <div className="p-6 space-y-6">
                        {day.activities.map((activity, activityIndex) => {
                          const Icon = getActivityIcon(activity);
                          const isLastActivity = activityIndex === day.activities.length - 1;

                          return (
                            <div key={activityIndex} className="relative">
                              {/* Timeline connector */}
                              {!isLastActivity && (
                                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
                              )}

                              <div className="flex gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                                  <Icon className="h-5 w-5 text-primary" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                  {/* Time */}
                                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <Clock className="h-4 w-4" />
                                    {activity.time}
                                  </div>

                                  {/* Place/Title */}
                                  <h4 className="text-base font-semibold">
                                    {activity.place}
                                  </h4>

                                  {/* Description */}
                                  {activity.description && (
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {activity.description}
                                    </p>
                                  )}

                                  {/* Details Grid */}
                                  {!activity.type && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                      {activity.duration && (
                                        <div className="flex items-start gap-2 text-sm">
                                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                                          <div>
                                            <span className="font-medium">Duration: </span>
                                            <span className="text-muted-foreground">{activity.duration}</span>
                                          </div>
                                        </div>
                                      )}

                                      {activity.openingHours && (
                                        <div className="flex items-start gap-2 text-sm">
                                          <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                                          <div>
                                            <span className="font-medium">Hours: </span>
                                            <span className="text-muted-foreground">{activity.openingHours}</span>
                                          </div>
                                        </div>
                                      )}

                                      {activity.bestTime && (
                                        <div className="flex items-start gap-2 text-sm">
                                          <Navigation className="h-4 w-4 text-muted-foreground mt-0.5" />
                                          <div>
                                            <span className="font-medium">Best time: </span>
                                            <span className="text-muted-foreground">{activity.bestTime}</span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Tips */}
                                  {activity.tips && (
                                    <div className="mt-3 p-3 rounded-lg bg-muted/50 border border-border">
                                      <div className="flex items-start gap-2 text-sm">
                                        <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{activity.tips}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        );
      })}
    </div>
  );
}

export default ItineraryTimeline;