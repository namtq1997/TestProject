import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Cart from '../Main/Shop/Cart/Cart';
import Contact from '../Main/Shop/Contact/Contact';
import Home from '../Main/Shop/Home/Home';
import Search from '../Main/Shop/Search/Search';

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Cart: Cart,
    Search: Search,
    Contact: Contact,
});
  
export default createAppContainer(TabNavigator);