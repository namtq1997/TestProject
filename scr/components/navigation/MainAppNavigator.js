import { createStackNavigator, createAppContainer } from 'react-navigation';
import Authen from '../Authenication/Authen';
import Main from '../Main/Main';
import ChangeInfo from '../ChangeInfo/ChangeInfo';

const MainAppNavigator = createStackNavigator ({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        },
    },          //First screen
    Authen: {
        screen: Authen,
        navigationOptions: {
            header: null,
        },
    },          
    ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            header: null,
        },
    },     
});

export default createAppContainer(MainAppNavigator);
