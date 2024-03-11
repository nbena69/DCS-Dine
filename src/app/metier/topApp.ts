export class TopApp {
  public GrandClient: string = "";
  public Application: string = "";
  public MontantTotalEuro: string = "";

  constructor(json?: any) {
    if (json) {
      this.GrandClient = json.GrandClient;
      this.Application = json.Application;
      this.MontantTotalEuro = json.MontantTotalEuro;
    }
  }
}
