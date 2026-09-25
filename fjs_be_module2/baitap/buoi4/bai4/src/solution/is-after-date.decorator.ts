import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsAfterDate(startProperty: string, options?: ValidationOptions): PropertyDecorator {
  return (object: object, propertyName: string | symbol) => registerDecorator({
    name: 'isAfterDate', target: object.constructor, propertyName: propertyName.toString(), constraints: [startProperty], options,
    validator: { validate(value: unknown, args: ValidationArguments) { const start = (args.object as Record<string, unknown>)[args.constraints[0]]; return new Date(String(value)).getTime() > new Date(String(start)).getTime(); } },
  });
}
