import { IsEmpty, IsString } from "class-validator";

export class CreateTestDTO {
  constructor(props: CreateTestDTO) {
    Object.assign(this, props);
  }
  @IsEmpty()
  @IsString()
  name: string;
}
