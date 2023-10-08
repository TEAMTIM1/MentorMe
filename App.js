import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

class ClassComponent extends React.Component {
  render() {
    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => <View style={{ paddingTop: insets.top }} />}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}