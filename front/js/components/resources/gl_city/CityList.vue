<template>
  <div class="container-fluid">
    <br />
    <h1>{{ list_title }}</h1>
    <app-add-button @click="list_onAddClick"></app-add-button>
    <br />
    <br />
    <div class="form-row">
      <div class="form-group col-12">
        <label>Estado</label>
        <app-state-select v-model="filters.state"></app-state-select>
      </div>
      <div class="form-group col-12">
        <div class="input-group mb-3">
          <input
            type="text"
            v-model="searchText"
            class="form-control"
            placeholder="pesquisar"
            aria-label="pesquisar"
            @keyup.enter="list_refreshCurrentPage"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              @click="list_refreshCurrentPage"
            >
              <i class="fa fa-search"></i> Filtrar
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr class>
          <th>#</th>
          <th>Nome</th>
          <th>
            IBGE
            <i
              class="fa fa-question-circle"
              v-b-tooltip.hover
              title="Código no IBGE"
            ></i>
          </th>
          <th>Estado</th>
          <th class="text-right">Prioridade</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="cursor: pointer;"
          v-for="entity in list.data"
          :key="entity.id"
          @click="list_onItemClick(entity)"
        >
          <td>{{ entity.id }}</td>
          <td>{{ entity.name }}</td>
          <td>{{ entity.ibgeCode }}</td>
          <td>{{ entity.state ? entity.state.code : null }}</td>
          <td class="text-right">{{ entity.priority }}</td>
        </tr>
      </tbody>
    </table>
    <app-pagination :pagination="list" @paginate="list_refreshPage($event)" />
  </div>
</template>

<script>
import { listMixin } from "@mixins/list-mixin";
import StateSelect from "@resources/gl_state/StateSelect.vue";

export default {
  mixins: [listMixin],
  components: {
    "app-state-select": StateSelect,
  },
  data() {
    return {
      filters: {
        state: null,
      },
    };
  },
  computed: {
    list_title() {
      return "Cidades";
    },
    list_url_base() {
      return "/api/admin/gl_city";
    },
    list_route_base() {
      return "gl_city";
    },
  },
  methods: {
    list_buildURL(page) {
      let url =
        this.list_url_base +
        "?page=" +
        page +
        "&q=" +
        encodeURIComponent(this.searchText ? this.searchText : "");
      if (this.filters.state) {
        url += `&stateId=${this.filters.state.id}`;
      }
      return url;
    },
  },
};
</script>

<style scoped></style>
