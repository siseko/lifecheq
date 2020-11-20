interface IPerson {
  id: string;
  relationship: string;
  firstName: string;
  lastName: string;
  sex: "male" | "female";
  dob: any;
  nationalities: string;
  isSouthAfrican: boolean;
}

export default IPerson;
