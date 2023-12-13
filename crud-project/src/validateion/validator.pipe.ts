import { PipeTransform, BadRequestException } from '@nestjs/common';
import Joi from 'joi';

export class ValidatorPipe<Dto> implements PipeTransform<Dto> {
  constructor(private schema: Joi.ObjectSchema<any>) {}

  public transform(value: Dto): Dto {
    const { error } = this.schema.validate(value, { abortEarly: false });
    if (error) {
      const errorMessages = error.details
        .map((detail) => detail.message)
        .join();
      throw new BadRequestException(errorMessages);
    }

    return value;
  }
}
