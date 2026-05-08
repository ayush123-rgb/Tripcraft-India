import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';

function FilterBar({ filters, onFilterChange, onClearFilters }) {
  const states = [
    'All States',
    'Rajasthan',
    'Goa',
    'Uttar Pradesh',
    'Uttarakhand',
    'Kerala',
    'Ladakh',
    'Karnataka',
    'West Bengal',
    'Andaman and Nicobar'
  ];

  const travelTypes = ['Adventure', 'Beach', 'Historical', 'Nature', 'Spiritual', 'Cultural'];

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleStateChange = (value) => {
    onFilterChange({ ...filters, state: value });
  };

  const handleBudgetChange = (value) => {
    onFilterChange({ ...filters, budgetMax: value[0] });
  };

  const handleTravelTypesChange = (value) => {
    onFilterChange({ ...filters, travelTypes: value });
  };

  const hasActiveFilters = 
    filters.search || 
    filters.state !== 'All States' || 
    filters.budgetMax < 100000 || 
    filters.travelTypes.length > 0;

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Search destinations</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name or keyword..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>

      {/* State Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">State</label>
        <Select value={filters.state} onValueChange={handleStateChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Budget Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Budget (max)</label>
          <span className="text-sm font-medium text-primary">
            ₹{filters.budgetMax.toLocaleString('en-IN')}
          </span>
        </div>
        <Slider
          value={[filters.budgetMax]}
          onValueChange={handleBudgetChange}
          min={0}
          max={100000}
          step={5000}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>₹0</span>
          <span>₹1,00,000</span>
        </div>
      </div>

      {/* Travel Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Travel type</label>
        <ToggleGroup
          type="multiple"
          value={filters.travelTypes}
          onValueChange={handleTravelTypesChange}
          className="flex flex-wrap gap-2 justify-start"
        >
          {travelTypes.map((type) => (
            <ToggleGroupItem
              key={type}
              value={type}
              className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {type}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Clear all filters
        </Button>
      )}
    </div>
  );
}

export default FilterBar;