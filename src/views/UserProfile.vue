<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 150px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <!-- <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hello Jesse</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <a href="#!" class="btn btn-info">Edit profile</a>
                    </div>
                </div>
            </div> -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Template 작성</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <!-- <a href="#!" class="btn btn-sm btn-primary">Settings</a> -->
                                
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Writer information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Writer"
                                                        placeholder="name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                        <!-- <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div> -->
                                    </div>
                                    <div class="row">
                                        <!-- <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="First name"
                                                        placeholder="First name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div> -->
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Creation Date"
                                                        placeholder="Creation Date "
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lastName"
                                            />
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Category"
                                                        placeholder="Category"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lastName"
                                            />
                                        </div>
                                    </div> -->
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-dropdown> 
                                                <base-button slot="title" type="secondary" class="dropdown-toggle">
                                                    Categoty
                                                </base-button>
                                                <a class="dropdown-item" href="#">Categoty1</a>
                                                <a class="dropdown-item" href="#">Categoty2</a>
                                                <a class="dropdown-item" href="#">Categoty3</a>
                                            </base-dropdown>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Title"
                                                        placeholder="제목을 입력하세요"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                       
                                    </div>


                                </div>
                                <!-- <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Home Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="City"
                                                        placeholder="City"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.city"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Country"
                                                        placeholder="Country"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.country"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Postal code"
                                                        placeholder="Postal code"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.zipCode"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />  -->
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">Template 내용</h6>
                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <base-input alternative=""
                                                    label="Template Content">
                                            <textarea id="template-text2" rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">
                                               </textarea>
                                        </base-input>
                                    </div>
                                </div>
                                <div id="button-submit">
                                    <base-button  type="primary">글쓰기</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        },
        radio: {
          radio1: "radio1",
          //radio2: "radio3"
        },
        data(){

        } 
      }
    },
  };
</script>
<style>
#button-submit {
    padding-left: 40%;
}
/*  */
#template-text2{
   height: 500px;
}
.addCategory{
     width: 111px;
    font-size: 11px;
}
</style>
