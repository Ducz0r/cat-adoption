export interface CatDto {
  id: number | null;
  listed_at: Date;
  name: string;
  image: string | null;
  age: number;
  breed: string;
  description: string | null;
  contact_name: string;
  contact_phone: string;
}
