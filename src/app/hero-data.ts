export class Hero {

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _id: string | number;
  public get id(): string | number {
    return this._id;
  }
  public set id(v: string | number) {
    this._id = v;
  }
}

