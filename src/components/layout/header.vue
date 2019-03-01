<template>
  <div class="header fixed-header">
    <span
      @click="opendrawer"
      class="btn-link toggle-sidebar hidden-lg-up pg pg-menu"
      data-toggle="sidebar"
    ></span>

    <div class>
      <div class="brand inline">
        <img
          src="../../assets/assets/img/logo/next-counsel-original.png"
          alt="logo"
          data-src="assets/img/logo.png"
          data-src-retina="assets/img/logo_2x.png"
          width="78"
          height="21"
        >
      </div>

      <!-- <a href="#" class="search-link hidden-md-down" data-toggle="search">
        <i class="pg-search"></i>Type anywhere to
        <span class="bold">search</span>
      </a> -->
    </div>

    <a
      href="#"
      class="header-icon pg pg-alt_menu btn-link m-l-10 sm-no-margin d-inline-block"
      data-toggle="quickview"
      data-toggle-element="#quickview"
    ></a>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      show: false
    };
  },
  methods: {
    opendrawer(boole) {
      this.$emit("opendrawer", boole);
    }
  }
};
</script>

<style>
.fixed-header .header {
  position: fixed;
  left: 0;
  top: -70px;
}
</style>