export class Application {
  public IRT: string = "";
  public nomAppli: string = "";

  constructor(json?: any) {
    if (json) {
      this.IRT = json.IRT;
      this.nomAppli = json.nomAppli;
    }
  }
}
