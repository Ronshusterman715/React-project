import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useJwtDecoder = (token: string | null) => {
  const [decodedToken, setDecodedToken] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // if (decoded.exp && Date.now() / 1000 > decoded.exp) {
        //   setError("token has expired");
        //   setDecodedToken(null);
        // }
        //  else {
        localStorage.setItem("user", JSON.stringify(decoded));
        setDecodedToken(decoded);
        setError(null);
        // }
      } catch (error) {
        setDecodedToken(null);
        setError(error);
      }
    }
  }, [token]);

  return { decodedToken, error };
};
