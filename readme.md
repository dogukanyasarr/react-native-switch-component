# Switch Component
The `Switch` component is compatible with both `iOS` and `Android`. The steps to include it in your React Native project are outlined below.
# UI and Using

[![Switch Component Video](https://img.youtube.com/vi/D6Ymf1si4J4/0.jpg)](https://www.youtube.com/shorts/D6Ymf1si4J4)

# Get Started

Follow these steps to include the `Switch` component in your project:

1. Install the necessary dependency:

First, you need to add the `react-native-switch-component` package to your project. This package helps you manage animations.

   ```bash
   npm i react-native-switch-component
```
or
  ```bash

yarn add react-native-switch-component
```

3.  Usage with Default Values:

```bash
const App = () => {
  return (
    <Switch />
  );
};
export default App;
```
3. Usage with Customized Values:
   
```bash
const App = () => {
  return (
    <Switch
      activeIconColor="white"
      activeBgColor="#02D95A"
      passiveIconColor="white"
      passiveBgColor="lightgray"
      dumping={20}
      startPosition={0}
      endPosition={20}
    />
  );
};
export default App;
```

# Explanation:

| Property               | Type       | Default Value | Description                                                                 |
|------------------------|------------|---------------|-----------------------------------------------------------------------------|
| `activeIconColor`       | string     | `white`       | Defines the color of the icon when the Switch is active.                    |
| `activeBgColor`         | string     | `#02D95A`       | Defines the background color when the Switch is active.                     |
| `passiveIconColor`      | string     | `white`        | Defines the color of the icon when the Switch is passive.                   |
| `passiveBgColor`        | string     | `lightgray`   | Defines the background color when the Switch is passive.                    |
| `dumping`               | number     | `20`           | Controls the speed (slowing down) of the animation.                         |
| `startPosition`         | number     | `0`           | Defines the starting position of the Switch's movement.                     |
| `endPosition`           | number     | `20`         | Defines the ending position of the Switch's movement.                       |