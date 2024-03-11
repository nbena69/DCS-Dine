export class GrandClients {
  public GrandClientID: number = 0;
  public NomGrandClient: string = "";

  constructor(json?: any) {
    if (json) {
      this.GrandClientID = json.GrandClientID;
      this.NomGrandClient = json.NomGrandClient;
    }
  }
}
