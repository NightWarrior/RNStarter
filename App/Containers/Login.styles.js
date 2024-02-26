import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  titleText: {
    marginVertical: 40,
    fontSize: 35
  },
  textInput: {
    width: '70%',
    marginVertical: 3
  },
  button: {
    marginTop: 40,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
