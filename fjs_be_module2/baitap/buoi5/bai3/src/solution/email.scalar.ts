import { CustomScalar, Scalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql';

@Scalar('Email')
export class EmailScalar implements CustomScalar<string, string> {
  description = 'Email address containing @';
  private readonly scalar = new GraphQLScalarType({ name: 'Email', serialize: this.validate.bind(this), parseValue: this.validate.bind(this), parseLiteral: value => value.kind === Kind.STRING ? this.validate(value.value) : this.invalid() });
  serialize(value: unknown) { return this.scalar.serialize(value); }
  parseValue(value: unknown) { return this.scalar.parseValue(value); }
  parseLiteral(ast: Parameters<NonNullable<typeof this.scalar.parseLiteral>>[0]) { return this.scalar.parseLiteral(ast); }
  private validate(value: unknown) { if (typeof value !== 'string' || !/^\S+@\S+\.\S+$/.test(value)) return this.invalid(); return value; }
  private invalid(): never { throw new TypeError('Email không hợp lệ'); }
}
