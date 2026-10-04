import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * Custom hook to get and manage Auth0 access token
 * This hook automatically fetches the token and stores it for API calls
 */
export const useAuth0Token = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [token, setToken] = useState(null);
  const [tokenError, setTokenError] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated && !isLoading) {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
          // Store in localStorage for RTK Query to access
          localStorage.setItem('auth0_token', accessToken);
        } catch (error) {
          console.error('Error getting access token:', error);
          setTokenError(error);
        }
      }
    };

    getToken();
  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

  return { token, tokenError, isLoading };
};
