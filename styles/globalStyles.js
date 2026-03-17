import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // Main background container using Flexbox for centering
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Fallback color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  // Title with high contrast and shadow for readability on images
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  // Paragraph text styled for legibility
  paragraph: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // Interactive button with shadows
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // Background wrapper for ImageBackground components
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // The 'Smaller Box' container for the Detail Screen
  whimsicalBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    padding: 25,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    elevation: 10,
  },
  // Technical/Filler text inside the Detail box
  whimsicalText: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  }
});