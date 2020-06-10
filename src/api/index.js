import axios from 'axios';

const config = {
  baseUrl : 'http://apiAddress'
};



function fetchList(){
  return axios.get(config.baseUrl+'/listtemplate.json');
}


export{
  fetchList,
}