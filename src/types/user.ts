export type user = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: {
    zipcode: string;
    street: string;
    city: string;
    state: string;
    country: string;
  };
};
