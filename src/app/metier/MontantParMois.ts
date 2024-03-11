export class MontantParMois {
  public GrandClient: string = "";
  public Mois: number = 0;
  public Annee: number = 0;
  public MontantTotalEuro: string = "";

  constructor(json?: any) {
    if (json) {
      this.GrandClient = json.GrandClient;
      this.Mois = json.Mois;
      this.Annee = json.Annee;
      this.MontantTotalEuro = json.MontantTotalEuro;
    }
  }
}
