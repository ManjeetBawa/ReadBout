import React from 'react';
import Navigation from './navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

PushNotification.configure({
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);
  },
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
})

 
const queryClient = new QueryClient();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}> 
    <QueryClientProvider client={queryClient}>
      
      <Navigation />
     
    </QueryClientProvider>
     </GestureHandlerRootView>
  );
};

export default App;
