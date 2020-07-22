<template>
  <div>
    <div class="columns">
      <div class="column is-12">
        <div class="card card-shadow">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-4">
                  <b-field grouped group-multiline>
                    <b-field class="control" expanded>
                      <b-input
                        width="100"
                        placeholder="Search..."
                        type="search"
                        :value="search"
                        icon="magnify"
                      />
                    </b-field>
                  </b-field>
                </div>
                <div class="column is-8 has-text-right">
                  <!-- Action Component -->

                  <b-button icon-left="plus" type="is-info">New stand</b-button>
                </div>
              </div>
              <b-table :data="standList" :loading="isLoading" hoverable paginated pagination-simple>
                <template slot="empty" v-if="!isLoading">
                  <p
                    class="has-text-grey has-text-centered"
                    style="padding: 10px"
                  >No data available in table</p>
                </template>

                <template slot-scope="props">
                  <b-table-column label="Registration Date">{{props.row.date}}</b-table-column>
                  <b-table-column label="Stand ID">{{props.row.id}}</b-table-column>
                  <b-table-column label="Name">{{props.row.name}}</b-table-column>
                  <b-table-column label="Phone Number">{{props.row.phone}}</b-table-column>
                  <b-table-column label="Stand Number">{{props.row.stand}}</b-table-column>
                  <b-table-column label="Status">{{props.row.status}}</b-table-column>
                  <b-table-column label="Tenancy">{{props.row.tenancy}}</b-table-column>

                  <b-table-column label="Action" centered style="min-width:140px">
                    <div class="buttons has-addons is-centered">
                      <b-button type="is-primary" size="is-small" icon-left="pencil"></b-button>
                      <b-button type="is-danger" size="is-small" icon-left="delete"></b-button>
                    </div>
                  </b-table-column>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      standList: [
        {
          date: "24 / 08 / 2020",
          id: 76873437638,
          name: "Andri Winanda",
          status: "Active",
          stand: 12736474748,
          tenancy: "28/05/2020",
          phone: "0812-3383-8338"
        },
        {
          date: "24 / 08 / 2020",
          id: 76873437638,
          name: "Andri Winanda",
          status: "Active",
          stand: 12736474748,
          tenancy: "28/05/2020",
          phone: "0812-3383-8338"
        },
        {
          date: "24 / 08 / 2020",
          id: 76873437638,
          name: "Andri Winanda",
          status: "Active",
          stand: 12736474748,
          tenancy: "28/05/2020",
          phone: "0812-3383-8338"
        }
      ]
    };
  }
};
</script>
<style scoped>
.table-info {
  width: auto;
  padding: 5px 0;
}
.table-info tr td {
  padding: 1px 12px !important;
  font-size: 10pt;
  border: none !important;
}
.labelSort {
  padding-right: 50px;
  padding-bottom: 7px;
  font-size: 11pt;
}
</style>
