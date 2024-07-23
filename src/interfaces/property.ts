export interface Property {
  id: string;
  name: string;
  description: string;
  city: string;
  country: string;
  purpose: string;
  price: number;
  images: string[];
  position: {
    latitude: number;
    longitude: number;
  };
  rentals?: {
    user: string;
    startDate: string;
    endDate: string;
  }[];
}
