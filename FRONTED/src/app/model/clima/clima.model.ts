export class respModelClima {
  public location?: Localizacion;
  public current?: Actual;
  public localtime?: string;
}

export interface Localizacion {
  name: string;
  region: string;
  country: string;
  tz_id: string;
  localtime: string;
  temp_c: number;
}

export interface Actual {
  condition: Condicion;
  temp_c: string;
  last_updated: string;
}

export interface Condicion {
  text?: string;
  icon?: string;
}
