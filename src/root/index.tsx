import React from 'react';
import Navigation from './navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

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
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
