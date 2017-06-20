/**
 * Any Entity
 */
export class Entity {
  constructor(
    public id: number,
    public name: string,
    public created: Date,
    public parent: Entity
  ) { }
}
