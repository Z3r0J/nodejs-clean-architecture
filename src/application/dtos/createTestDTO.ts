import { IsNotEmpty, IsString } from "class-validator";

export class CreateTestDTO {
  constructor(props: CreateTestDTO) {
    Object.assign(this, props);
  }
  @IsNotEmpty()
  @IsString()
  name: string;
}
