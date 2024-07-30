import { SafeAreaView } from 'react-native';

import { useMemo, type PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function SafeScreen({ children }: PropsWithChildren) {
  const { top, bottom } = useSafeAreaInsets();
  const wrapperStyle = useMemo(() => ({ paddingTop: top, paddingBottom: bottom, flex: 1 }), []);

  return <SafeAreaView style={wrapperStyle}>{children}</SafeAreaView>;
}

export default SafeScreen;
