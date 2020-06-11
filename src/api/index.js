import axios from 'axios';

const config = {
  baseUrl : 'http://apiAddress'
};


//API함수들을 정리한다,
function fetchList(){
  //리스트 불러오기
  return axios.get(config.baseUrl+'/listtemplate/1.json');
}


export{
  fetchList,
}