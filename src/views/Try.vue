<template>
  <div class="free-table">
    <free-table border stripe :data="data" :column="basicColumn"></free-table>
  </div>
</template>

<script>
import FreeTable from '@/components/FreeTable'
import TableData from '@/table'

export default {
  components: {
    FreeTable
  },
  mixins: [TableData],
  data() {
    return {
      columnsProps: {
        width: 'auto'
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      },
      editForm: {},
      dialogVisible: false
    }
  }
}
</script>
