export class CentresActivite {
  public CentreActiviteID: number = 0;
  public NumeroCentreActivite: number = 0;

  constructor(json?: any) {
    if (json) {
      this.CentreActiviteID = json.CentreActiviteID;
      this.NumeroCentreActivite = json.NumeroCentreActivite;
    }
  }
}
