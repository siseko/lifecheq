interface IPerson {
  id: string;
  relationship: string;
  name: string;
  surname: string;
  sex: "male" | "female";
  dob: any;
  nationalities: string;
  isSouthAfrican: boolean;
}

export default IPerson;
