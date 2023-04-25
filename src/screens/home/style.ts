import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerInput: {
    height: 32,
    flexDirection: 'row',
    // backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F1FA',
    flex: 1,
    borderRadius: 16,
  },
  searchArea: {
    flex: 1,
    fontSize: 12,
  },
});

export default styles;
