export interface RoutePath {
  id: number;
  name: string;
  fatherID: number | null | String;
  level: string;
  url: string;
  icon: string;
  children?: RoutePath[];

}

