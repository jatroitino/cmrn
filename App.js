import Stack from './src/navigators'
import { StackNavigator } from 'react-navigation'

console.disableYellowBox = true;

const App = StackNavigator({
  mainStack: { screen: Stack },
},{
  headerMode: 'none',
  initialRouteName: 'mainStack'
})

export default App;