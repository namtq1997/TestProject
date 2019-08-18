import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import {Dimensions, Platform} from 'react-native';
import Authen from '../Authenication/Authen';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import Shop from '../Main/Shop/Shop';

const Width = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: Width*0.6,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Shop: Shop,
        Authen: Authen,
        ChangeInfo: ChangeInfo,
    },
    DrawerConfig
)

export default createAppContainer(DrawerNavigator)