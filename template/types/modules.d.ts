// Allow importing .js files in TypeScript
declare module '*.js';

// Module declarations for your custom paths
declare module '@config/theme' {
  export const ThemeProvider: React.ComponentType<any>;
  export const useTheme: () => any;
}

declare module '@navigation/AppNavigator' {
  const AppNavigator: React.ComponentType<any>;
  export default AppNavigator;
}

declare module '@store' {
  const store: any;
  export default store;
}