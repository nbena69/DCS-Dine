export class Produit {
  public produitID: number = 0;
  public NOM_PRODUIT: string = "";
  public familleID: number = 0;

  constructor(json?: any) {
    if (json) {
      this.produitID = json.produitID;
      this.NOM_PRODUIT = json.NOM_PRODUIT;
      this.familleID = json.familleID;
    }
  }
}
