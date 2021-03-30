export interface IPlace {
  _id: string;
  userName: string;
  userMail: string;

  name: string;
  address: string;
  description: string;
  key: string;

  email?: string;
  phone?: string;
  website?: string;
  imageURL?: string;
}

/*
 Collection Indexes

{
  "userName": "text",
  "name": "text",
  "address": "text",
  "description": "text"
}
*/
