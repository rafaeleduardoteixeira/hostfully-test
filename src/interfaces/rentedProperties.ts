export interface RentedProperties {
  id: string;
  propertyId: string;
  propertyImages?: string[];
  propertyName?: string;
  name: string;
  email: string;
  checkIn: Date | null;
  checkOut: Date | null;
}
