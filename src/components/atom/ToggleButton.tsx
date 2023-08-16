import React, {useState} from 'react';
import {Switch, TouchableOpacity} from 'react-native';

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <TouchableOpacity onPress={handleToggle}>
      <Switch
        trackColor={{false: 'red', true: '4CC481'}}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor="#A9A9A9"
        onValueChange={handleToggle}
        value={isEnabled}
      />
    </TouchableOpacity>
  );
};

export default ToggleButton;
