export class LigneFacturation {
  public LF_ID: number = 0;
  public produitID: number = 0;
  public CentreActiviteID: number = 0;
  public mois: Date = new Date();
  public IRT: string = "";
  public prix: number = 0;
  public nature: string = "";
  public volume: number = 0;

  constructor(json?: any) {
    if (json) {
      this.LF_ID = json.LF_ID;
      this.produitID = json.produitID;
      this.CentreActiviteID = json.CentreActiviteID;
      this.mois = new Date(json.mois);
      this.IRT = json.IRT;
      this.prix = json.prix;
      this.nature = json.nature;
      this.volume = json.volume;
    }
  }
}
