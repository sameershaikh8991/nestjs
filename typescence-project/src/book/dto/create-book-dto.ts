

export class CreateBookDto {
  // @IsNotEmpty({ message: 'Title cannot be empty' })
  // @IsString({ message: 'Title must be a string' })
  readonly title: string;

  // @IsNotEmpty({ message: 'Description cannot be empty' })
  // @IsString({ message: 'Description must be a string' })
  readonly desc: string;

  // @IsNotEmpty({ message: 'Price cannot be empty' })
  readonly price: number;

}
