/**
 * Represents secret information related to user authentication.
 */
export interface Secret {
  id: number;
  userSalt?: string;
  sessionHash?: string;
}
