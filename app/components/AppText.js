import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

function AppText({ children, textType, style, onPress }) {
    let type = defaultStyles.primaryText;

    if (textType === "primary") {
        type = defaultStyles.primaryText;
    }
    else if (textType === "secondary") {
        type = defaultStyles.secondaryText;
    }
    else if (textType === "colored") {
        type = defaultStyles.coloredText;
    }
    else if (textType === "title") {
        type = defaultStyles.title;
    }
    else if (textType === "buttonLG") {
        type = defaultStyles.buttonLGText;
    }

    return (
        <Text style={[type, style]} onPress={onPress}>{children}</Text>
    );
}

export default AppText;