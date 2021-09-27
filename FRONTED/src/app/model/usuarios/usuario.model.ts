export interface Usuario {

  id?: number;
  nombre?: string;
  email?: string;
  password?: string;
  login?: Date;
  created?: Date;
  updated?: Date;
  roles?: any;
  tareas?: modelTarea[];
}

export interface mModelJWT {
  token?: string;
  type?: string;
  email?: string;
  nombre?: string;
  authorities?: any;
}


export interface modelTarea {
  id?: number;
  idUsuario?: number;
  descripcion?: string;
  activo?: boolean;
  created?: Date;
  updated?: Date;
}
