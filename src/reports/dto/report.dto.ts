import { Expose, Transform } from 'class-transformer';
// import { User } from 'src/users/users.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  year: number;
  @Expose()
  lat: number;
  @Expose()
  lng: number;
  @Expose()
  mileage: number;
  @Expose()
  approved: boolean;
  @Transform((value) => value.obj?.user.id)
  @Expose()
  userId: number;
}
