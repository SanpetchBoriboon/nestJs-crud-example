export class CreateUserDto {
  constructor(
    public id: string,
    public username: string,
    public password: string,
  ) {}
}
