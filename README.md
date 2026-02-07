# My RN Framework

A comprehensive React Native framework with theming, navigation, state management, and reusable components.

## Features

- **Theming System**: Light and dark theme support with easy theme switching
- **Navigation**: Pre-configured navigation stacks for authentication and main app flow
- **State Management**: Redux Toolkit for predictable state management
- **Reusable Components**: Common UI components (Button, Input, Card, etc.)
- **API Integration**: Axios-based API service with authentication
- **Validation**: Utility functions for form validation
- **TypeScript Support**: Type definitions for better development experience

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/attendance1978-wq/my-rn-framework.git>
cd my-rn-framework
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Metro Bundler
```bash
npm start
```

## Project Structure

```
my-rn-framework/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── src/
│   └── config/
│       ├── themes.ts        # Theme definitions
│       ├── ThemeContext.tsx # Theme context provider
│       └── index.ts         # Config exports
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Card.js
│   │   └── index.js
│   └── index.js
├── navigation/              # Navigation configurations
│   ├── AppNavigator.js
│   ├── AuthStack.js
│   └── MainStack.js
├── screens/                 # Screen components
│   ├── auth/
│   │   └── LoginScreen.js
│   └── main/
│       └── HomeScreen.js
├── services/                # API and external services
│   └── api.js
├── store/                   # Redux store configuration
│   ├── store.js
│   ├── slices/
│   │   └── authSlice.js
│   └── index.js
├── utils/                   # Utility functions
│   ├── validators.js
│   └── index.js
├── hooks/                   # Custom hooks
│   └── useDebounce.js
├── assets/                  # Static assets (fonts, images)
├── template/                # Template files and types
└── App.tsx                  # Main app component
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run clean` - Clean React Native project
- `npm run clean:android` - Clean Android build
- `npm run clean:ios` - Clean iOS build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm test` - Run Jest tests
- `npm run types` - Check TypeScript types

## Theming

The app supports light and dark themes. To use theming in your components:

```javascript
import { useTheme } from '@config/theme';

const MyComponent = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>
        Current theme: {isDark ? 'Dark' : 'Light'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};
```

## Navigation

The app uses React Navigation with pre-configured stacks:

- **AuthStack**: Login and authentication screens
- **MainStack**: Main app screens with tab navigation

## State Management

Uses Redux Toolkit for state management. The store is configured in `store/store.js` with auth slice as an example.

## API Integration

API calls are handled through `services/api.js`. The service includes:

- Axios instance with base configuration
- Authentication interceptors
- Common API methods (login, register, etc.)

## Components

### Common Components

- **Button**: Customizable button component
- **Input**: Text input with validation and icons
- **Card**: Card component for displaying content

## Development

### Code Style

The project uses ESLint and Prettier for code formatting. Run `npm run lint:fix` to automatically fix formatting issues.

### Adding New Features

1. Create components in appropriate directories
2. Add navigation routes if needed
3. Update state slices for new data
4. Add API methods for backend integration
5. Update themes if new colors are needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

