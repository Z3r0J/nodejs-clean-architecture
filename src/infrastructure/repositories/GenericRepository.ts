import { EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { BaseEntity } from "@entities/BaseEntity";
import { AppDataSource } from "@typeorm-config";
import { IGenericRepository } from "@interfaces/repositories/IGenericRepository";

export abstract class GenericRepository<T extends BaseEntity>
  implements IGenericRepository<T>
{
  protected repository: Repository<T>;
  protected abstract Entity: EntityTarget<T>;

  constructor() {
    this.repository = AppDataSource.getRepository(this.getEntityType());
  }

  async Create(entity: T): Promise<T> {
    const entityCreate = this.repository.save(entity);
    return entityCreate;
  }
  async GetAll(): Promise<T[]> {
    const entities = await this.repository.find();
    return entities;
  }

  async GetById(id?: number): Promise<T> {
    const criterias = { where: { id: id } as FindOptionsWhere<T> };
    const entity = await this.repository.findOne(criterias);
    return entity;
  }

  async Update(id: number, entity: T): Promise<T> {
    await this.repository.update(id, entity as any);
    return entity;
  }

  async Delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  protected getEntityType(): EntityTarget<T> {
    return this.Entity;
  }
}
