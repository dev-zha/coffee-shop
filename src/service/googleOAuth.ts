import axios from 'axios';

interface GoogleUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}
export const getUserFromGoogleOAuthAPI = async (
  accessToken: string
): Promise<GoogleUser | null> => {
  return axios
    .get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    })
    .then((res) => res.data as GoogleUser)
    .catch((err) => {
      console.log('Google OAuth API Error:', err);
      return null;
    });
};
