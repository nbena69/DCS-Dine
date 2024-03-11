export class Clients {
  public ClientID: number = 0;
  public NomClient: string = "";
  public GrandClientID: number | null = null;
  public CentreActiviteID: number | null = null;

  constructor(json?: any) {
    if (json) {
      this.ClientID = json.ClientID;
      this.NomClient = json.NomClient;
      this.GrandClientID = json.GrandClientID;
      this.CentreActiviteID = json.CentreActiviteID;
    }
  }
}
