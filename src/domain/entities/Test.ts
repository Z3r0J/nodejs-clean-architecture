import { Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Test extends BaseEntity {
  name: string;
}
