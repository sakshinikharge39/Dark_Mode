

// import React from 'react';
// import { View, Text } from 'react-native';
// import { useDarkMode } from '../DarkModeContext';

// const OtherScreen = () => {
//   const { darkMode } = useDarkMode();

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkMode ? '#000' : '#fff' }}>
//       <Text style={{ color: darkMode ? '#fff' : '#000' }}>Other Screen</Text>
//     </View>
//   );
// };

// export default OtherScreen;

// OtherScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import { useDarkMode } from '../DarkModeContext';

const OtherScreen = () => {
  const { darkMode } = useDarkMode();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkMode ? '#000' : '#fff' }}>
      <Text style={{ color: darkMode ? '#fff' : '#000' }}>Other Screen</Text>
    </View>
  );
};

export default OtherScreen;
