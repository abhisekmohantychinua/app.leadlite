export interface Secret {
  id: number;
  userSalt?: string;
  sessionHash?: string;
}
