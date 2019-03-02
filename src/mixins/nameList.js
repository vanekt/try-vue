export default {
  data: () => ({
    names: ['Alex', 'Elena', 'Boris', 'Anna', 'Robin'],
    searchName: '',
  }),
  computed: {
    filteredNames() {
      return this.names.filter(item => (
        item.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      ));
    },
  },
};
