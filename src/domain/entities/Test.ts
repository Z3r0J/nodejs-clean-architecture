import { Column, Entity } from "typeorm";
import { BaseEntity } from "@entities/BaseEntity";

@Entity()
export class Test extends BaseEntity {
  constructor(test?: Test) {
    super();
    Object.assign(this, test);
  }
  @Column()
  name: string;
}
