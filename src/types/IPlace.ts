export interface IPlace {
  _id: string;
  userName: string;
  email: string;
  name: string;
  address: string;
  key: string;
  description: string;
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
