export type OnChangeText = (value: string) => void;

export type Genre = "Homme" | "Femme" | "Enfant";

export type Birthday = {
  day: number;
  month: string;
};

export type Loyalty = {
  points: number;
  gain: number;
};

export type TimeAppointment = {
  hour: number;
  minute: number;
};

export type Prestation = {
  name: string;
  time: number;
  price: number;
};

export type Collaborateur = {
  name: string;
};

export type PrestationAppointment = {
  id: string;
  name: string;
  time: number;
  price: number;
  collaborateur: string;
};

export type ListePrestation = PrestationAppointment[];
