export interface IGenericServices<Entity> {
  Create(entity: Entity): Promise<Entity>;
  GetAll(): Promise<Entity[]>;
  GetById(id?: number): Promise<Entity>;
  Update(id: number, entity: Entity): Promise<Entity>;
  Delete(id: number): Promise<void>;
}
