import { Fonts } from '@/constants/Fonts';
import * as Font from 'expo-font';

class FontLoader {
  static async loadFonts() {
    await Font.loadAsync(Fonts);
  }
}

export default FontLoader;
