
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home1Screen from './Home1Screen';
import Home2Screen from './Home2Screen';

const StackContainer = createStackNavigator({
    Home1: {screen: Home1Screen},
    Home2:{screen : Home2Screen}
    },
    {
        initialRouteName: "Home1"
    },
    { headerMode: 'none' }
);

export default createAppContainer(StackContainer);