import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile103443Navigator from '../features/UserProfile103443/navigator';
import Tutorial103442Navigator from '../features/Tutorial103442/navigator';
import NotificationList103414Navigator from '../features/NotificationList103414/navigator';
import Settings103413Navigator from '../features/Settings103413/navigator';
import Settings103405Navigator from '../features/Settings103405/navigator';
import UserProfile103403Navigator from '../features/UserProfile103403/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile103443: { screen: UserProfile103443Navigator },
Tutorial103442: { screen: Tutorial103442Navigator },
NotificationList103414: { screen: NotificationList103414Navigator },
Settings103413: { screen: Settings103413Navigator },
Settings103405: { screen: Settings103405Navigator },
UserProfile103403: { screen: UserProfile103403Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
