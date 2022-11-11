import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { AppRoutes } from "./app.routes";
import { PublicRoutes } from "./public.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <Box flex={1} bgColor="gray.900">
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <PublicRoutes />}
      </NavigationContainer>
    </Box>
  );
}