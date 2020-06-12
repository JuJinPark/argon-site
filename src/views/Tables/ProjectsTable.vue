<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            게시판
          </h3>
           

          
        </div>
        <div  class="col col-lg-2" id="checkbutton">
              <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle">
                  category
                </base-button>
                <a class="dropdown-item" href="#">category1</a>
                <a class="dropdown-item" href="#">category2</a>
                <a class="dropdown-item" href="#">category3</a>
              </base-dropdown>
             <base-button  v-on:click="changeflag" v-if="check===true" type="primary">삭제</base-button>
              <base-button v-on:click="changeflag" v-if="check===false" type="primary">확인</base-button>
         </div> 
       
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th v-if="check===false">
            선택
          </th>
          <th>제목</th>
          <th>날짜</th>
          <th>카테고리</th>
          <!-- <th>Users</th>
          <th>Completion</th> -->
        </template>

        <template slot-scope="{row}">
          <th v-if="check===false">
            <base-checkbox class="mb-3" v-model="row.flag">
            </base-checkbox>
          </th>
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{row.budget}}
          </td>
          <td>
            <badge class="badge-dot mr-4" >
              <!-- <i :class="`bg-${row.statusType}`"></i> -->
              <span class="status">{{row.status}}</span>
            </badge>
          </td>
         

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
          
      <base-pagination total="30"></base-pagination>
    </div>
    <div>
     
    </div>

  </div>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    methods:{
      changeflag(){
         if(this.check){ this.check= false;}
         else {this.check = true;} 

        alert(this.check);
      }
    },
    data() {
      return {
        check:true,
        tableData: [
          {
            img: 'img/theme/bootstrap.jpg',
            title: 'Argon Design System',
            budget: '20/05/10',
            status: 'category2',
            statusType: 'warning',
            completion: 60,
            flag : false
          },
          {
            img: 'img/theme/angular.jpg',
            title: 'Angular Now UI Kit PRO',
            budget: '20/05/11',
            status: 'category1',
            statusType: 'success',
            completion: 100,
            flag : false
          },
          {
            img: 'img/theme/sketch.jpg',
            title: 'Black Dashboard',
            budget: '20/05/15',
            status: 'category5',
            statusType: 'danger',
            completion: 72,
            flag : false
          },
          {
            img: 'img/theme/react.jpg',
            title: 'React Material Dashboard',
            budget: '20/04/10',
            status: 'category2',
            statusType: 'info',
            completion: 90,
            flag : false
          },
          {
            img: 'img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            budget: '20/02/10',
            status: 'category1',
            statusType: 'success',
            completion: 100,
            flag : false
          }
        ]
      }
    }
  }
</script>
<style>
#checkbutton{
  padding-left :30%
}
</style>
