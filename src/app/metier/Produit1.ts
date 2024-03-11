export class Produit1 {
  NomProduit: string;
  Mois: number;
  Annee: number;
  VolumeTotal: string;

  constructor(
    nomProduit: string,
    mois: number,
    annee: number,
    volumeTotal: string
  ) {
    this.NomProduit = nomProduit;
    this.Mois = mois;
    this.Annee = annee;
    this.VolumeTotal = volumeTotal;
  }
}
