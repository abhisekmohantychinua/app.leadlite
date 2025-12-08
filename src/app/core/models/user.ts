export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  profile: Blob;
  createdAt: Date;
  lastModifiedAt: Date | undefined;
}
