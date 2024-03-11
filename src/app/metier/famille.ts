export class Famille {
  public familleID: number = 0;
  public FAMILLE_NAME: string = "";

  constructor(json?: any) {
    if (json) {
      this.familleID = json.familleID;
      this.FAMILLE_NAME = json.FAMILLE_NAME;
    }
  }
}
