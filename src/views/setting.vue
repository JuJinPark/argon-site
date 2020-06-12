<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Category 설정</h3>
                        </div>
                        <div class="card-body">
                            <div> 카테고리 추가</div>
                             <div class="row">
                              <base-input placeholder="category"></base-input>
                             <base-button type="primary" icon="ni ni-bag-17">추가</base-button>
                          
                            </div>
                        </div>
                        <div class="card-body">
                            <div> 카테고리 삭제</div>
                             <div class="row">
                                <base-dropdown>
                                  <base-button slot="title" type="secondary" class="dropdown-toggle">
                                    Categoty
                                  </base-button>
                                  <a class="dropdown-item" href="#">Categoty1</a>
                                  <a class="dropdown-item" href="#">Categoty2</a>
                                  <a class="dropdown-item" href="#">Categoty3</a>
                      
                                </base-dropdown>
                                <base-button type="primary" icon="ni ni-bag-17">삭제</base-button>
                       
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'
  Vue.use(VueClipboard)
  export default {
    directives: {
      'b-tooltip': BTooltipDirective
    },
  };
</script>
<style></style>
